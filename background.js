// background.js

chrome.runtime.onInstalled.addListener(() => {
  // default state goes here
  // this runs ONE TIME ONLY (unless the user reinstalls your extension)
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["trello.js"]
  })
});