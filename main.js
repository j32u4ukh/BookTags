//////////// chrome extensions import ////////////
// https://medium.com/@otiai10/how-to-use-es6-import-with-chrome-extension-bd5217b9c978
let bm, utils;
(async () => {
	bm = await import(chrome.extension.getURL('bookmark.js'));

	// 目前似乎因為載入順序等因素，第二筆無法再呼叫前完成載入
	utils = await import(chrome.extension.getURL('utils.js'));
})();
//////////////////////////////////////////////////

//region {variables and functions}
var folders = [];


// id of ul in myNewTab.html
var listName = "list";

const host = "developer.chrome.com";
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

//////////////////////////////////////////////////
let nodes = [];
let tags = {}

document.addEventListener("DOMContentLoaded", function() {
	// tag element in html
	let bookmarks = document.getElementById("bookmarks");

	chrome.bookmarks.getTree(function(bookmark_tree_array) {

		// 取得第 0 個 Tree
		var bookmark_tree = bookmark_tree_array[0];

		// 取得 Tree 下的節點: 書籤列 & 其他書籤
		bookmark_tree.children.forEach(function(node) {
			console.log(node.title + "\t" + node.id);

			// 非空節點才加入
			if(node.children.length > 0){
				// 添加到 folders 當中
				// folders.push(node);

				// 添加到 nodes 當中
				nodes.push(node);
			}
		});

		// 遍歷全部書籤
		let i = 0, len = nodes.length;
		while(i < len){
			let node = nodes[i];

			node.children.forEach(function(leaf_or_node){
				// is bookmark
				if(leaf_or_node.url){
					// console.log(num + ": " + leaf_or_node.title + "(" + leaf_or_node.url + ")");

					let key = leaf_or_node.title.length % 10;

					if(!(key in tags)){
						tags[key] = [];						
					}
					tags[key].push(leaf_or_node);

				}
				// is folder
				else{
					nodes.push(leaf_or_node);
				}
			});

			len = nodes.length;
			i++;
		}

		Object.keys(tags).forEach(function(key){
			let ul = document.createElement("ul");
			let span = document.createElement("span");
			span.innerText = String.format("key {0}", key);
			ul.appendChild(span);

			let pages = tags[key];
			pages.forEach(function(page){
				let li = document.createElement("li");
				span = document.createElement("span");
				let len = page.title.length;
				span.innerText = String.format("length {0}, group: {1}", len, len % 10);
				li.appendChild(span);
				ul.appendChild(li);

				// 生成 a tag
				li = document.createElement("li");
				let a = document.createElement("a");
				a.href = page.url;
				a.innerText = page.title;
				li.appendChild(a);

				ul.appendChild(li);
			});
			
			bookmarks.appendChild(ul);
		});

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

function addNode(parent_element, node){

}

function addListItem(parent_element, leaf) {
	// 生成 li tag
	let li = document.createElement("li");

	// 生成 a tag
	let a = document.createElement("a");
	let url = leaf.url
	a.href = url;
	a.innerText = leaf.title;

	// 將 a tag 添加到 li tag 之下
	li.appendChild(a);

	if(url.indexOf(host) != -1) {
		li.style.borderRight = itemBorderRightStyle;
		li.style.boxShadow = itemBoxShadowStyle;
		li.style.backgroundColor = itemBackgroundColor;
	}

	// 將 li tag 添加到 listElement tag 之下
	parent_element.appendChild(li);
}