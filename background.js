chrome.tabs.onUpdated.addListener(function injectScript(tabId, changeInfo) {
	if (changeInfo.status === 'complete') {
			chrome.scripting.executeScript({
					target: { tabId: tabId },
					files: ["./trello.js"]
			})
			chrome.scripting.insertCSS({
				target: { tabId: tabId },
				files: ["./trello.css"]
		})
	}
});
