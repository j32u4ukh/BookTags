export function print(content, message_type = "Log"){
	console.log(String.format("[{0}] {1}", message_type, content));
    // console.log(String.format("[" + message_type + "] " + content));

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