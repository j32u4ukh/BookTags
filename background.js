chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.create({url: "index.html"});
});



// TODO: addListener 當使用者對書籤做修改，要記錄書籤的變化，以追蹤 tag 的依附對象
