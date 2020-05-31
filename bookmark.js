export function print(content, message_type = "Log"){
	console.log(String.format("[{0}] {1}", message_type, content));
}

export function arrayToString(array){
    let i, len = array.length - 1, result = "[";

    for(i = 0; i < len; i++){
        result += array[i];
        result += ", ";
	}

    result += array[len];
    result += "]";

    return result;
}

// 印出陣列
export function printArray(array, name = "array"){
	let array_string = arrayToString(array);
    print(array_string, name);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== elements and Nodes ==========
export function addNode(parent_element, node){

}

export function addListItem(parent_element, leaf) {
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

export function buildBookmarks(root_id, parent_element, tree){
    // 清空 parent_element 所含子元素
    parent_element.innerText = "";

    let nodes = [], node, root_node = null;
    nodes.push(tree);
    let i = 0, len = nodes.length;
    
    while(i < len){
        node = nodes[i];

        // 若 children 為空，會有 some 的適用問題
        if(node.children == null){
            // print(String.format("[bookmark] buildBookmarks node {0} without children.", node.id));
		}

        /* 若 children 個數大於 0，使用 some 可在找到目標 node 的時候跳出迴圈
        參考：https://jser.me/2014/04/02/%E5%A6%82%E4%BD%95%E5%9C%A8Array.forEach%E7%9A%84%E5%BE%AA%E7%8E%AF%E9%87%8Cbreak.html
        */
        else{
            node.children.some(function(nod, index, arry){
                if(nod.id == root_id){
                    root_node = nod;
                    return true;
			    }else{
                    nodes.push(nod);
			    }
            });
		}

        i++;
        len = nodes.length;
    }

    // 若有找到 id 為 root_id 的 root_node
    if(root_node != null){
        root_node.children.forEach(function(node){
            let text_class = document.createAttribute("class");
            text_class.value = "text";

            // 若為資料夾
            if(isFolder(node)){
                // TODO: 資料夾可根據 id 開啟下一層的 Tree
                let container = document.createElement("div");
                container.id = node.id;
                let icon = document.createElement("div");
                let title = document.createElement("span");
                let expand = document.createElement("div");
            

                // TODO: 按下 expand 後應在該欄下方展開該欄所包含的 tag

                // TODO: 對個別元素進行定義
                title.innerText = String.format("({0}) {1}", node.id, node.title);
                title.setAttributeNode(text_class);

                // 將元素們載入容器中
                container.appendChild(icon);
                container.appendChild(title);
                container.appendChild(expand);

                parent_element.appendChild(container);
            }
        
            // 若為超連結
            else{
                let a = document.createElement("a");
                let container = document.createElement("div");
                let icon = document.createElement("div");
                let title = document.createElement("span");
                let expand = document.createElement("div");

                // TODO: 按下 expand 後應在該欄下方展開該欄所包含的 tag

                // TODO: 對個別元素進行定義
                title.innerText = String.format("({0}) {1}", node.id, node.title);
                title.setAttributeNode(text_class);
                a.href = node.url;

                // 將元素們載入容器中
                container.appendChild(icon);
                container.appendChild(title);
                container.appendChild(expand);
                a.appendChild(container);

                parent_element.appendChild(a);
            }
        });
	}else{
        print(String.format("Without node {0}.", root_id), "Error");
	}
}

// TODO: sort nodes

////////////////////////////////////////////////////////////////////////////////////////////////////
function isFolder(node){
    if(node.url){
        return false;
	}else{
        return true;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== storage ==========
// CRUD: C, U
export function setTag(tag, id){
    chrome.storage.sync.get(tag, function(dict) {
        let array = dict[tag];

        // 若為空則新建數據
        if(array == null){
            chrome.storage.sync.set({[tag]: [id]}, function() {
		        print(String.format("Create tag: {0}, id: [{1}]", tag, id));
	        });
		}

        // 若已有該 tag
        else{
            array.push(id);
            chrome.storage.sync.set({[tag]: array}, function() {
		        print(String.format("Update tag: {0}, id: [{1}]", tag, arrayToString(array)));
	        });
		}
    });
}

// CRUD: R
export function getTag(key){
    chrome.storage.sync.get(key, function(dict) {
        // 讀取全部
        if(key == null){
            Object.keys(dict).forEach(function(sub_key){
                bm.print(sub_key, key);
            });

            return null;
	    }else{

            return dict[key];
	    }    
    });
}

// CRUD: D
export function deleteTag(key){
    chrome.storage.sync.remove(key, function() {
		// pass
	});

    chrome.storage.sync.getBytesInUse(key, function(bytes_in_use){
		if(bytes_in_use == 0){
              bm.print(String.format("Key {0} has been removed successful.", key), "remove");
		}
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== 右鍵功能 ==========
// TODO: 讀取 BookTags 紀錄，動態產生右鍵事件
// 參考網址: https://ithelp.ithome.com.tw/articles/10187476
export function createMenus() {
    // console.log("[background] createMenus");

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
    /*console.log(parent);
    console.log(normal);
    console.log(checkbox);
    console.log(line1);
    console.log(line2);
    console.log(radio1A);
    console.log(radio1B);
    console.log(radio2A);
    console.log(radio2B);*/
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== 右鍵功能的 Listener ==========
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

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// ========== 擴充功能 ==========
/*  字串格式化
    作者: mrkt
    說明: 可在 Javascrip t中使用如同 C# 中的 string.format
    使用方式: var fullName = String.format('Hello. My name is {0} {1}.', 'FirstName', 'LastName');
    參考來源: https://kevintsengtw.blogspot.com/2011/09/javascript-stringformat.html

    此實作方法為 Javascript 的物件擴充方法，String 為 Javascript 原始物件，
    透過以下做法，可擴充 String 的方法，因此無須透過 import 也可使用。
    http://d8890007.blogspot.com/2012/11/javascript-extension-method.html
*/
String.format = function ()
{
    var s = arguments[0];
    if (s == null) return "";
    for (var i = 0; i < arguments.length - 1; i++)
    {
        var reg = getStringFormatPlaceHolderRegEx(i);
        s = s.replace(reg, (arguments[i + 1] == null ? "" : arguments[i + 1]));
    }
    return cleanStringFormatResult(s);
}

// 可在 Javascript 中使用如同 C# 中的 string.format (對 jQuery String 的擴充方法)
// 使用方式: var fullName = 'Hello. My name is {0} {1}.'.format('FirstName', 'LastName');
String.prototype.format = function ()
{
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++)
    {
        var exp = getStringFormatPlaceHolderRegEx(i);
        txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
    }
    return cleanStringFormatResult(txt);
}

// 讓輸入的字串可以包含{}
function getStringFormatPlaceHolderRegEx(placeHolderIndex)
{
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}

// 當format格式有多餘的position時，就不會將多餘的position輸出
// ex:
// var fullName = 'Hello. My name is {0} {1} {2}.'.format('firstName', 'lastName');
// 輸出的 fullName 為 'firstName lastName', 而不會是 'firstName lastName {2}'
function cleanStringFormatResult(txt)
{
    if (txt == null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
}