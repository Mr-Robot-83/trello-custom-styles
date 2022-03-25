
let compactCardsCheckboxStatus = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ compactCardsCheckboxStatus });
});

let bigCommentsCheckboxStatus = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ bigCommentsCheckboxStatus });
});

let darkCardsCheckboxStatus = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkCardsCheckboxStatus });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
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