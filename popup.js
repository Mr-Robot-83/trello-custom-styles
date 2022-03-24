//set IDs for checkboxes
let bigCommentsCheckbox = document.getElementById('big-comments');
let darkCardsCheckbox = document.getElementById('dark-cards');


//get value of checkboxes from Chrome storage
chrome.storage.sync.get("bigCommentsCheckboxStatus", ({ bigCommentsCheckboxStatus }) => {
  bigCommentsCheckbox.checked = bigCommentsCheckboxStatus
});

chrome.storage.sync.get("darkCardsCheckboxStatus", ({ darkCardsCheckboxStatus }) => {
  darkCardsCheckbox.checked = darkCardsCheckboxStatus
});

bigCommentsCheckbox.addEventListener('change', () => {
  activateCheckbox(bigCommentsCheckbox,'trello-big-comments')
  if (bigCommentsCheckbox.checked) {
    chrome.storage.sync.set({ bigCommentsCheckboxStatus: true });
  } else {
    chrome.storage.sync.set({ bigCommentsCheckboxStatus: false });
  }
});

darkCardsCheckbox.addEventListener('change', () => {
  activateCheckbox(darkCardsCheckbox,'trello-dark-cards')
  if (darkCardsCheckbox.checked) {
    chrome.storage.sync.set({ darkCardsCheckboxStatus: true });
  } else {
    chrome.storage.sync.set({ darkCardsCheckboxStatus: false });
  }
});

async function activateCheckbox(checkboxName,cssClassName) {
  console.log(checkboxName)
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (checkboxName.checked) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: applyStyles,
      args: [cssClassName,true]
    });
    chrome.storage.sync.set({ checkboxStatus: true });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: applyStyles,
      args: [cssClassName,false]
    });
  }
};

function applyStyles (cssClassName,apply) {
  if (apply === true) {
  document.body.classList.add(cssClassName);
  } else {
  document.body.classList.remove(cssClassName);
  }
}