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

/*  字串格式化
    作者： mrkt
    參考來源：https://kevintsengtw.blogspot.com/2011/09/javascript-stringformat.html

    此實作方法為 Javascript 的物件擴充方法，String 為 Javascript 原始物件，
    透過以下做法，可擴充 String 的方法，因此無須透過 import 也可使用。
    http://d8890007.blogspot.com/2012/11/javascript-extension-method.html
*/
// 可在Javascript中使用如同C#中的string.format
// 使用方式 : var fullName = String.format('Hello. My name is {0} {1}.', 'FirstName', 'LastName');
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

// 可在Javascript中使用如同C#中的string.format (對jQuery String的擴充方法)
// 使用方式 : var fullName = 'Hello. My name is {0} {1}.'.format('FirstName', 'LastName');
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