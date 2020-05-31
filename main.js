///////////////////////////////////// chrome extensions import /////////////////////////////////////
// https://medium.com/@otiai10/how-to-use-es6-import-with-chrome-extension-bd5217b9c978
let bm, utils;
(async () => {
	bm = await import(chrome.extension.getURL('bookmark.js'));

	// 目前似乎因為載入順序等因素，第二筆無法再呼叫前完成載入
	// utils = await import(chrome.extension.getURL('utils.js'));
})();
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: [Depreciation] 改為使用多組函式，以 node 為參數，來協助存取
function Node(id, name, url, parent_id){
	this.id = id;
	this.name = name
	this.url = url;

	// parent_id: 協助建立資料夾結構
	this.parent_id = parent_id;

	// TODO: children 父節點指向子節點

	this.isFolder = function(){
		if(this.url){
			return true;
		}else{
			return false;
		}
	};

	this.isLink = function(){
		if(this.url){
			return false;
		}else{			
			return true;
		}
	};

	// 以字串形式表達這個 Node
	this.toString = function(){
		return String.format("({0} : {2}) {1}", this.id, this.name, this.parent_id);
	};
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
let branch = "root";

// 之前所使用的變數
let nodes = [];
let tags = {}
let node_dict = {};

// 利用網址列作為 command line 來輸入測試指令
let get = location.search;
/*if(get != null){
	//location.reload(true);
	console.log(get);
}*/

document.addEventListener("DOMContentLoaded", function() {
	// 建立右鍵事件
	bm.createMenus();

	// 取得 index.html 當中的 bookmarks 元素
	let bookmarks = document.getElementById("bookmarks");

	// 取得 BookmarkTreeNode
	let bookmark_tree;

	// 取得 BookmarkTreeNode
	let e_branch = document.getElementById("branch");;

	// 處理 command line 給的指令
	$("#command").change(function() {
		// 取得 command line 的內容
		command = $("#command").val();
		bm.print(command, "$");

		// 清空 command line
		e_branch.innerText = String.format("({0})", branch);
		$("#command").val("");

		// 根據長度不同、關鍵字不同，導向不同功能
		let command_array = command.split(" -");
		bm.print(String.format("length: {0}", command_array.length), "command_array");

		switch(command_array.length){			
			case 1:
				// TODO: 輸入 tag 名稱，篩選出含有該 tag 的書籤
				// 將取得的內容轉為數字
				let idx = parseInt(command, 10);
				bm.buildBookmarks(idx, bookmarks, bookmark_tree);
				break;
			case 2:
				bm.print(String.format("command_array[0]: {0}", command_array[0]), "command_array");
				if(command_array[0] == "sudo"){
					let array1 = command_array[1].split(" ");
					let kind = array1[0];
					let content = array1[1];

					bm.print(String.format("kind: {0}", kind), "command_array");
					bm.print(String.format("content: {0}", content), "command_array");

					switch(kind){
						case "checkout":
							branch = content;
							// 切換分支
							e_branch.innerText = String.format("({0})", branch);
							$("#command").val("");
							break;
						default:
							break;
					}
				}
			default:
				break;
		}		
	});

	// 取得儲存書籤的物件(形式為一種樹):  bookmarks.BookmarkTreeNode 
	// 參考網站: https://developer.chrome.com/extensions/bookmarks
	chrome.bookmarks.getTree(function(bookmark_tree_array) {

		// 取得 BookmarkTreeNode
		bookmark_tree = bookmark_tree_array[0];

		// TODO: 預設呈現 書籤列(1) 的書籤(包含 資料夾 與 超連結 )
		////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////

		// 取得 Tree 下的節點: 書籤列(1) & 其他書籤(2)
		bookmark_tree.children.forEach(function(node) {
			// console.log(String.format("{0}\t{1}", node.id, node.title));

			// 非空節點才加入
			if(node.children.length > 0){

				// 添加到 nodes 當中
				bm.print(String.format("node id: {0}, parent_id: {1}", node.id, node.parentId));
				nodes.push(node);
			}
		});

		bm.buildBookmarks(1, bookmarks, bookmark_tree);

		/*
		// 遍歷全部書籤
		let i = 0, len = nodes.length;
		while(i < len){
			let node = nodes[i];

			node.children.forEach(function(leaf_or_node){
				// is bookmark
				if(leaf_or_node.url){
					// console.log(num + ": " + leaf_or_node.title + "(" + leaf_or_node.url + ")");

					// 產生假的 tags 資訊
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

				//  將所有 node 存入一陣列、字典或物件，並給予索引值，並將這索引值做為產生後元素的 id ，點擊元素後的行為，由該 node 決定
				node_dict[leaf_or_node.id] = new Node(leaf_or_node.id, leaf_or_node.title, leaf_or_node.url, leaf_or_node.parentId);
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
				span.innerText = String.format("length {0}, group: {1}, id: {2}", len, len % 10, page.id);
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

		let ul = document.createElement("ul");
		Object.keys(node_dict).forEach(function(key){
			let node = node_dict[key];
			// bm.print(String.format("{0} : {1}", node.id, node.parent_id), "ID");
			if(node.parent_id == 1){
				let li = document.createElement("li");
				let span = document.createElement("span");
				if(node.url){
					span.innerText = String.format("({0}) dir: {1}", node.id, node.name);
				}else{
					span.innerText = String.format("({0}) link: {1}", node.id, node.name);
				}

				li.appendChild(span);
				ul.appendChild(li);
			}
		});
		bookmarks.appendChild(ul);*/
	});
});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== TEST ==========
function storageTest(){
	chrome.storage.sync.getBytesInUse(null, function(bytes_in_use){
		bm.print(bytes_in_use, "bytes_in_use 0");
	});

	chrome.storage.sync.set({"color": "red"}, function() {
		bm.print("chrome.storage.sync.set", "set");
	});

	chrome.storage.sync.getBytesInUse(null, function(bytes_in_use){
		bm.print(bytes_in_use, "bytes_in_use 1");
	});

	chrome.storage.sync.get("color", function(items) {
		bm.print(items["color"], "sync.get");
	});

	chrome.storage.sync.remove("color", function() {
		bm.print("chrome.storage.sync.remove", "remove");
	});

	chrome.storage.sync.getBytesInUse(null, function(bytes_in_use){
		bm.print(bytes_in_use, "bytes_in_use 2");
	});
}

function storageTest2(){
	let key = "number";
	chrome.storage.sync.get(key, function(items) {
		if(items[key] == null){
			bm.print("items["+ key +"] == null");
		}else{
			bm.print("chrome.storage.sync.get:" + items[key], "sync.get");
		}
	});

	chrome.storage.sync.set({[key]: [9388]}, function() {
		bm.print("chrome.storage.sync.set", "sync.set");
	});

	chrome.storage.sync.set({[key]: [123, 456]}, function() {
		bm.print("chrome.storage.sync.set", "sync.set");
	});

	chrome.storage.sync.get(key, function(items) {
		if(items[key] == null){
			bm.print("items["+ key +"] == null");
		}else{
			bm.printArray(items[key], "sync.get");
			// bm.print("chrome.storage.sync.get:" + );
		}
	});

	key = "number";
	chrome.storage.sync.remove(key, function() {
		bm.print("chrome.storage.sync.remove", "remove");
	});

	chrome.storage.sync.getBytesInUse(null, function(bytes_in_use){
		bm.print(bytes_in_use, "bytes_in_use");
	});
}