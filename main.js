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
// index.html 當中的 bookmarks 元素
let bookmarks;

// 取得 BookmarkTreeNode
let bookmark_tree;


// 之前所使用的變數
let nodes = [];
let tags = {}
let node_dict = {};
let branch = "root";

// 利用網址列作為 command line 來輸入測試指令
// let get = location.search;
/*if(get != null){
	//location.reload(true);
	console.log(get);
}*/

document.addEventListener("onTagsReaded", function(event){
	let ids = event.detail;
	bm.print(String.format("onTagsReaded Listener, ids: {0}", bm.arrayToString(ids)));
})

document.addEventListener("DOMContentLoaded", function() {
	// 建立右鍵事件
	bm.createMenus();

	// 取得 index.html 當中的 bookmarks 元素
	bookmarks = document.getElementById("bookmarks");

	////////////////////////////////////////////////////////////////////////////////////////////////////
	// 處理 command line 給的指令
	$("#command").change(function() {
		// 取得 command line 的內容
		let command = $("#command").val();
		bm.print(command, "$");

		// 清空 command line
		$("#command").val("");

		// 根據長度不同、關鍵字不同，導向不同功能
		let cmd = command.split(" ");
		bm.print(String.format("length: {0}", cmd.length), "cmd");

		switch(cmd.length){
			// 保留字 或 tag_name
			case 1:	
				// 判斷所輸入的內容是否為數字
				if(parseInt(cmd, 10).toString() == "NaN"){
					if(isKeyWord(cmd)){
						bm.print(String.format("This is keyword: {0}", cmd[0]));

						switch(cmd){
							case "get":
							case "g":
								getTag(null);
								break;
							default:
								break;
						}

					}else{
						showTag(cmd, bookmarks, bookmark_tree);
					}
				}else{
					// 根據索引值作為上層節點的 ID，呈現書籤
					// 將取得的內容轉為數字
					let idx = parseInt(cmd, 10);
					bm.buildBookmarks(idx, bookmarks, bookmark_tree);
				}				
				break;
			// 2 參數 Tag 相關指令(tag_name, func_name)
			case 2:
				// tag_name 不能是保留字(keyword)
				if(isKeyWord(cmd[0])){
					bm.print(String.format("This is keyword: {0}", cmd[0]));

				}else{
					bm.print(String.format("This is not keyword: {0}", cmd[0]));
					// func_name: get(g)  delete(d)
					// tag_name
					switch(cmd[1]){
						case "get":
						case "g":
							getTag(cmd[0]);
							break;
						case "delete":
						case "d":
							deleteTag(cmd[0]);
							break;
						case "all":
						case "a":
							getTag(null);
							break;
						default:
							break;
					}
				}
				break;
			// 3 參數 Tag 相關指令(tag_name, func_name, ids)
			case 3:
				// tag_name 不能是保留字(keyword)
				let tag_name = cmd[0];
				
				if(isKeyWord(tag_name)){
					bm.print(String.format("This is keyword: {0}", tag_name));

				}else{
					let func_name = cmd[1];
					let ids = cmd[2].split(",");
					switch(func_name){
						case "set":
						case "s":
							// TODO: 若對資料夾添加 tag，則資料夾內的書籤全部添加該 tag，但資料夾本身無法設置 tag
							// 資料夾本身無法設置 tag 是為了避免之後根據 tag 相對關係所產生的資料夾結構會產生衝突
							if(ids.length == 1){
								setTag(tag_name, ids);

							}else{
								setTags(tag_name, ids);

							}
							break;
						case "delete":
						case "d":
							if(ids.length == 1){
								deleteTagElement(tag_name, ids);

							}else{
								deleteTagElements(tag_name, ids);

							}
							break;
						default:
							break;
					}
				}
				break;
			default:
				break;
		}		
	});

	////////////////////////////////////////////////////////////////////////////////////////////////////
	// 取得儲存書籤的物件(形式為一種樹):  bookmarks.BookmarkTreeNode 
	// 參考網站: https://developer.chrome.com/extensions/bookmarks
	chrome.bookmarks.getTree(function(bookmark_tree_array) {

		// 取得 BookmarkTreeNode
		bookmark_tree = bookmark_tree_array[0];

		// 預設呈現 書籤列(1) 的書籤(包含 資料夾 與 超連結 )
		bm.buildBookmarks(1, bookmarks, bookmark_tree);
		////////////////////////////////////////////////////////////////////////////////////////////////////

		getTag(null);
		
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
			// print(String.format("{0} : {1}", node.id, node.parent_id), "ID");
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
// ========== utils ==========
// 判斷是否為保留字
function isKeyWord(target){
	let key_words = ["set", "s", "get", "g", "delete", "d"];
	let is_key_word = false;

	key_words.some(function(key_word, index, array){
		if(target == key_word){
			is_key_word = true;
		}
	});

	return is_key_word;
}

// 返回 element 在 array 當中的索引值，若不存在則返回 -1
function indexOfArray(array, element){
	let idx = -1;

	array.some(function(arr, index, list){
		if(arr == element){
			idx = index;
		}
	});

	return idx;
}

// 將陣列去除重複值，並由小排到大
function conciseIntArray(array){
	let concise = [];

	array.forEach(function(item){
		if(indexOfArray(concise, item) == -1){
			concise.push(item);
		}
	});

	concise.sort(function (a, b) {
		return a - b;
	});

	return concise;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== storage ==========
// CRUD: C, U
function setTag(tag, id){
    chrome.storage.sync.get(tag, function(dict) {
        let array = dict[tag];

        // 若為空則新建數據
        if(array == null){
            chrome.storage.sync.set({[tag]: [id]}, function() {
		        bm.print(String.format("Create tag: {0}, id: [{1}]", tag, id));
	        });
		}

        // 若已有該 tag
        else{
            array.push(id);
			array = conciseIntArray(array);

            chrome.storage.sync.set({[tag]: array}, function() {
		        bm.print(String.format("Update tag: {0}, id: {1}", tag, bm.arrayToString(array)));
	        });
		}
    });
}

// CRUD: C, U
function setTags(tag, ids){
    chrome.storage.sync.get(tag, function(dict) {
        let array = dict[tag];

        // 若為空則新建數據
        if(array == null){
			ids = conciseIntArray(ids);
            chrome.storage.sync.set({[tag]: ids}, function() {
		        bm.print(String.format("Create tag: {0}, ids: [{1}]", tag, ids));
	        });
		}

        // 若已有該 tag
        else{
            ids.forEach(function(id){
                array.push(id.trim());
            });
            array = conciseIntArray(array);

            chrome.storage.sync.set({[tag]: array}, function() {
		        bm.print(String.format("Update tag: {0}, id: {1}", tag, bm.arrayToString(array)));
	        });
		}
    });
}

// CRUD: R
function getTag(tag){	
    chrome.storage.sync.get(tag, function(dict) {
        // 讀取全部
        if(tag == null){
            Object.keys(dict).forEach(function(sub_tag){
                bm.print(sub_tag, "tag");
            });
	    }else{
			// 若 dict 有 tag 這個關鍵字
			if(dict.hasOwnProperty(tag)){
				bm.print(String.format("getTag ids: {0}", dict[tag]));
				// 利用 CustomEvent 將 tag 下的 id 傳出去
				var onTagsReaded = new CustomEvent("onTagsReaded", {"detail": dict[tag]});
				document.dispatchEvent(onTagsReaded);
			}
	    }    
    });
}

// CRUD: R
function showTag(tag, bookmarks, bookmark_tree){
    chrome.storage.sync.get(tag, function(dict) {
        // 若 dict 有 tag 這個關鍵字
		if(dict.hasOwnProperty(tag)){
			let ids = dict[tag];

			bm.buildTagBookmarks(ids, bookmarks, bookmark_tree);
		}else{
			alert("沒有該 tag");
		}  
    });
}

// CRUD: D
function deleteTag(tag){	
    chrome.storage.sync.remove(tag, function() {
		// pass
	});

    chrome.storage.sync.getBytesInUse(tag, function(bytes_in_use){
		if(bytes_in_use == 0){
              bm.print(String.format("Tag {0} has been removed successful.", tag), "remove");
		}
	});
}

// CRUD: D
function deleteTagElement(tag, id){
    chrome.storage.sync.get(tag, function(dict) {
		// 若 dict 有 tag 這個關鍵字
		if(dict.hasOwnProperty(tag)){
			let array = dict[tag];

			array.forEach(function(arr){
				bm.print(String.format("arr: {0}, id: {1}, arr == id: {2}", arr, id, arr == id));
			});

			// 取得該 id 在陣列中的索引值
			let index = indexOfArray(array, id);
			bm.print(String.format("deleteTagElement | index: {0}", index));

			// 若索引值在正常區間內
			if(index > -1){
				// 移除該索引值所指向的內容
				bm.print(String.format("Delete id {0} @ {1}", id, index));
				array.splice(index, 1);
			}

			// 將新的 array 再次存入 tag 當中
			chrome.storage.sync.set({[tag]: array}, function() {
		        bm.print(String.format("Update tag: {0}, id: {1}", tag, bm.arrayToString(array)));
	        });
		}   
    });
}

// CRUD: D
function deleteTagElements(tag, ids){
    chrome.storage.sync.get(tag, function(dict) {
		// 若 dict 有 tag 這個關鍵字
		if(dict.hasOwnProperty(tag)){
			// 取得目前 tag 下的 id 們
			let array = dict[tag];

			ids.forEach(function(id){
				// 取得該 id 在陣列中的索引值
				let index = indexOfArray(array, id);
				bm.print(String.format("deleteTagElements | index: {0}", index));

				// 若索引值在正常區間內
				if(index > -1){
					// 移除該索引值所指向的內容
					array.splice(index, 1);
				}
			});

			// 將新的 array 再次存入 tag 當中
			chrome.storage.sync.set({[tag]: array}, function() {
		        bm.print(String.format("Update tag: {0}, id: {1}", tag, bm.arrayToString(array)));
	        });
		}   
    });
}


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
	let tag = "number";
	chrome.storage.sync.get(tag, function(items) {
		if(items[tag] == null){
			bm.print("items["+ tag +"] == null");
		}else{
			bm.print("chrome.storage.sync.get:" + items[tag], "sync.get");
		}
	});

	chrome.storage.sync.set({[tag]: [9388]}, function() {
		bm.print("chrome.storage.sync.set", "sync.set");
	});

	chrome.storage.sync.set({[tag]: [123, 456]}, function() {
		bm.print("chrome.storage.sync.set", "sync.set");
	});

	chrome.storage.sync.get(tag, function(items) {
		if(items[tag] == null){
			bm.print("items["+ tag +"] == null");
		}else{
			bm.printArray(items[tag], "sync.get");
			// print("chrome.storage.sync.get:" + );
		}
	});

	tag = "number";
	chrome.storage.sync.remove(tag, function() {
		bm.print("chrome.storage.sync.remove", "remove");
	});

	chrome.storage.sync.getBytesInUse(null, function(bytes_in_use){
		bm.print(bytes_in_use, "bytes_in_use");
	});
}

function callEventTest(){
	var onEventTest = new CustomEvent("onEventTest", {"detail": "Message from CustomEvent."});
	document.dispatchEvent(onEventTest);
}

function addEventListenerTest(){
	document.addEventListener("onEventTest", function(event){
		let info = event.detail;
		bm.print(String.format("onTagsReaded Listener: {0}", info));
	});

	callEventTest();
}