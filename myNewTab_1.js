//region {variables and functions}
var folders = [];
let nodes = [];

// id of ul in myNewTab.html
var listName = "list";

var host = "developer.chrome.com";
var itemBorderRightStyle = "5px solid #666";
var itemBoxShadowStyle = "0px 0px 2px #333";
var itemBackgroundColor = "#ccc";
var storageKey = "APPEND_MATCHING_ONLY";

function appendItem(listElement, nodeURL, nodeParentTitle) {
	// 生成 li tag
	var li = document.createElement("li");

	// 生成 a tag
	var a = document.createElement("a");
	a.href = nodeURL;
	a.innerText = nodeURL + " (" + nodeParentTitle + ")";

	// 將 a tag 添加到 li tag 之下
	li.appendChild(a);

	if(nodeURL.indexOf(host) != -1) {
		li.style.borderRight = itemBorderRightStyle;
		li.style.boxShadow = itemBoxShadowStyle;
		li.style.backgroundColor = itemBackgroundColor;
	}

	// 將 li tag 添加到 listElement tag 之下
	listElement.appendChild(li);
}

function appendMatchingItem(listElement, nodeURL, nodeParentTitle) {
	if(nodeURL.indexOf(host) != -1){
		appendItem(listElement, nodeURL, nodeParentTitle);
	}
}

// [Depreciate]
function populateList(listElement) {
	folders.forEach(function(folder) {
		folder.children.forEach(function(bookmarkTreeNode) {
			appendItem(listElement,bookmarkTreeNode.url, folder.title);
		});
	});
}

// current using
function populateListV2(listElement) {
	chrome.storage.sync.get(storageKey, function(items) {
		// storageKey: APPEND_MATCHING_ONLY
		// console.log("storageKey: " + storageKey);

		if(!chrome.runtime.lastError && items[storageKey]) {
			console.log("populateListV2 if");

			folders.forEach(function(folder) {
				folder.children.forEach(function(bookmarkTreeNode) {
					if(bookmarkTreeNode.url){
						console.log("bookmarkTreeNode.title: " + bookmarkTreeNode.title);
						appendMatchingItem(listElement, bookmarkTreeNode.url, folder.title);
					}						
				});
			});

		} else {
			console.log("populateListV2 else");

			folders.forEach(function(folder) {
				folder.children.forEach(function(bookmarkTreeNode) {
					if(bookmarkTreeNode.url){
						console.log("bookmarkTreeNode.title: " + bookmarkTreeNode.title);
						console.log("bookmarkTreeNode.id: " + bookmarkTreeNode.id);
						appendItem(listElement, bookmarkTreeNode.url, folder.title);
					}else{
						console.log(bookmarkTreeNode.title + " length = " + bookmarkTreeNode.children.length);
					}
				});
			});
		}
	});
}
//end-region


document.addEventListener("DOMContentLoaded", function(dcle) {
	// tag element in html
	var listElement = document.getElementById(listName);

	chrome.bookmarks.getTree(function(bookmark_tree_array) {

		// 取得第 0 個 Tree
		var bookmark_tree = bookmark_tree_array[0];

		// 取得 Tree 下的節點: 書籤列 & 其他書籤
		bookmark_tree.children.forEach(function(node) {
			// 非空節點才加入
			if(node.children.length > 0){
				// 添加到 folders 當中
				folders.push(node);

				// 添加到 nodes 當中
				nodes.push(node);
			}
		});

		// 遍歷全部書籤
		let i = 0, len = nodes.length, num = 1;
		while(i < len){
			let node = nodes[i];

			node.children.forEach(function(leaf_or_node){
				// is bookmark
				if(leaf_or_node.url){
					console.log(num + ": " + leaf_or_node.title + "(" + leaf_or_node.url + ")");
					num++;
				}
				// is folder
				else{
					console.log("Add folder: " + leaf_or_node.title);
					nodes.push(leaf_or_node);
				}
			});

			len = nodes.length;
			i++;
		}

		/*folders.forEach(function(folder) {
			folder.children.forEach(function(bookmarkTreeNode) {
				console.log("bookmarkTreeNode.id: " + bookmarkTreeNode.id);
				console.log("bookmarkTreeNode.parentId: " + bookmarkTreeNode.parentId);
				console.log("bookmarkTreeNode.index: " + bookmarkTreeNode.index);
				console.log("bookmarkTreeNode.url: " + bookmarkTreeNode.url);
				console.log("bookmarkTreeNode.title: " + bookmarkTreeNode.title);
				console.log("bookmarkTreeNode.dateAdded: " + bookmarkTreeNode.dateAdded);
				console.log("bookmarkTreeNode.dateGroupModified: " + bookmarkTreeNode.dateGroupModified);
				
				if(bookmarkTreeNode.url){
					appendItem(listElement, bookmarkTreeNode.url, folder.title);

				}else{
					console.log(bookmarkTreeNode.title + " length = " + bookmarkTreeNode.children.length);
				}
			});
		});*/

		// populateList(listElement);
		// populateListV2(listElement);
	});
});
//end-region