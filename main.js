//////////// chrome extensions import ////////////
// https://medium.com/@otiai10/how-to-use-es6-import-with-chrome-extension-bd5217b9c978
let bm, utils;
(async () => {
	bm = await import(chrome.extension.getURL('bookmark.js'));

	// 目前似乎因為載入順序等因素，第二筆無法再呼叫前完成載入
	// utils = await import(chrome.extension.getURL('utils.js'));
})();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function Node(id, name, url, parent_id){
	this.id = id;
	this.name = name
	this.url = url;
	this.parent_id = parent_id;
	this.toString = function(){
		return String.format("({0} : {2}) {1}", this.id, this.name, this.parent_id);
	};
}

let nodes = [];
let tags = {}
let node_dict = {};

document.addEventListener("DOMContentLoaded", function() {
	// tag element in html
	let bookmarks = document.getElementById("bookmarks");

	/*let get = location.search;*/
	bm.print("中文測試", "get");

	
	createMenus();

	// 處理 command line 給的指令
	$("#command").change(function() {
		// 取得 command line 的內容
		command = $("#command").val();
		bm.print(command, "$");
		$("#command").val("");

		// TODO: 根據長度不同、關鍵字不同，導向不同功能
		// 將取得的內容轉為數字
		let idx = parseInt(command, 10);

		// 確保 node_dict 當中含有 idx 這個 key
		if(idx in node_dict){
			let node = node_dict[idx];

			// 判斷物件類別
			bm.print(node instanceof Node, "OO");
			bm.print(node.toString(), "node");
			if(node.url){			
				bm.print(node.url, "node");
			}
		}
	});


	chrome.bookmarks.getTree(function(bookmark_tree_array) {

		// 取得第 0 個 Tree
		var bookmark_tree = bookmark_tree_array[0];

		// 取得 Tree 下的節點: 書籤列 & 其他書籤
		bookmark_tree.children.forEach(function(node) {
			console.log(String.format("{0}\t{1}", node.id, node.title));

			// 非空節點才加入
			if(node.children.length > 0){

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
		bookmarks.appendChild(ul);
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

	const host = "developer.chrome.com";

	if(url.indexOf(host) != -1) {
		let border_right = "5px solid #666";
		let box_shadow = "0px 0px 2px #333";
		let background_color = "#ccc";
		li.style.borderRight = border_right;
		li.style.boxShadow = box_shadow;
		li.style.backgroundColor = background_color;
	}

	// 將 li tag 添加到 listElement tag 之下
	parent_element.appendChild(li);
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// ========== storage ==========
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


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// ========== 右鍵功能 ==========
function genericOnClick(info, tab) {
    //根據你點選右鍵的狀況不同，可以得到一些跟內容有關的資訊
    //例如 頁面網址，選取的文字，圖片來源，連結的位址
    console.log(
        "ID是：" + info.menuItemId + "\n" +
        "現在的網址是：" + info.pageUrl + "\n" +
        "選取的文字是：" + (info.selectionText ? info.selectionText : "") + "\n" +
        "現在hover元素的圖片來源：" + (info.srcUrl ? info.srcUrl : "") + "\n" +
        "現在hover的連結：" + (info.linkUrl ? info.linkUrl : "") + "\n" +
        "現在hover的frame是：" + (info.frameUrl ? info.frameUrl : "") + "\n"
    );
}

function checkableClick(info, tab) {
    //checkbox 以及 radio 這兩種類型的項目，除了上面的程式碼提到的資訊外，還會用布林值來告訴你使用者點選前，及點選後的狀態。
    console.log(
        "ID是：" + info.menuItemId + "\n" +
        "現在的網址是：" + info.pageUrl + "\n" +
        "選取的文字是：" + (info.selectionText ? info.selectionText : "") + "\n" +
        "現在hover元素的圖片來源：" + (info.srcUrl ? info.srcUrl : "") + "\n" +
        "現在hover的連結：" + (info.linkUrl ? info.linkUrl : "") + "\n" +
        "現在hover的frame是：" + (info.frameUrl ? info.frameUrl : "") + "\n" +
        "現在的狀態是：" + info.checked + "\n" +
        "之前的狀態是：" + info.wasChecked
    );
}

function createMenus() {
    console.log("[background] createMenus");

    let parent = chrome.contextMenus.create({
        "title": "你選擇了%s",
        "contexts": ['all'],    
        "onclick": genericOnClick
    });

    let normal = chrome.contextMenus.create({
        "title": "通常項目",
        "type": "normal",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": genericOnClick
    });

    let checkbox = chrome.contextMenus.create({
        "title": "checkbox",
        "type": "checkbox",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": checkableClick
    });

    //被separator分隔的radio項目會自動形成一個只能單選的group
    let line1 = chrome.contextMenus.create({
        "title": "Child 2",
        "type": "separator",
        "contexts": ['all'],
        "parentId": parent
    });

    let radio1A = chrome.contextMenus.create({
        "title": "group-1 的A選項(單選)",
        "type": "radio",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": checkableClick
    });
    let radio1B = chrome.contextMenus.create({
        "title": "group-1 的B選項(單選)",
        "type": "radio",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": checkableClick
    });
    //被separator分隔的radio項目會自動形成一個只能單選的group
    let line2 = chrome.contextMenus.create({
        "title": "Child 2",
        "type": "separator",
        "contexts": ['all'],
        "parentId": parent
    });

    let radio2A = chrome.contextMenus.create({
        "title": "group-2 的A選項(單選)",
        "type": "radio",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": checkableClick
    });

    let radio2B = chrome.contextMenus.create({
        "title": "group-2 的B選項(單選)",
        "type": "radio",
        "contexts": ['all'],
        "parentId": parent,
        "onclick": checkableClick
    });

    // 使用chrome.contextMenus.create的方法回傳值是項目的id
    
    console.log(parent);
    console.log(normal);
    console.log(checkbox);
    console.log(line1);
    console.log(line2);
    console.log(radio1A);
    console.log(radio1B);
    console.log(radio2A);
    console.log(radio2B);
}
