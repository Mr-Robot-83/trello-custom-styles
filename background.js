chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	console.log(changeInfo);
	if (changeInfo.status === 'complete') {
			chrome.scripting.executeScript({
					target: { tabId: tabId },
					files: ["./trello.js"]
			})
			console.log("Should have worked?");
	}
});