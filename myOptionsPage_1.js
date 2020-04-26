//region {variables and functions}
var storageKey = "APPEND_MATCHING_ONLY";
var items = {};
var saveButtonID = "save";
function logSuccess(task) {
	console.log("%s Successful!",task);
}
//end-region



//region {calls}
document.addEventListener("DOMContentLoaded",function(dcle) {
	var saveButton = document.getElementById(saveButtonID);
	saveButton.addEventListener("click",function(ce) {
		if(document.forms[0].highlight.value == "1") {
			items[storageKey] = true;
			chrome.storage.sync.set(
				items,
				function(){if(!chrome.runtime.lastError)logSuccess("Set-Storage");}
			);
		} else {
			items[storageKey] = false;
			chrome.storage.sync.set(
				items,
				function(){if(!chrome.runtime.lastError)logSuccess("Set-Storage");}
			);
		}
	});
});
//end-region