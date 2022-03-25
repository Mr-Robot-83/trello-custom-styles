//Set IDs for checkboxes
let bigCommentsCheckbox = document.getElementById('big-comments');
let darkCardsCheckbox = document.getElementById('dark-cards');


//Get value of checkboxes from Chrome storage and apply to checkboxes
//This will ensure the values remain when the popup is closed and reopened
//Should also sync in all the user's browsers!
chrome.storage.sync.get('bigCommentsCheckboxStatus', function(result) {
  darkCardsCheckbox.checked = result.bigCommentsCheckboxStatus;
  console.log(`Value of ${bigCommentsCheckbox.id} currently is ${result.darkCardsCheckboxStatus}`);
});

chrome.storage.sync.get('darkCardsCheckboxStatus', function(result) {
  darkCardsCheckbox.checked = result.darkCardsCheckboxStatus;
  console.log(`Value of ${darkCardsCheckbox.id} currently is ${result.darkCardsCheckboxStatus}`);
});

//Evemt listeners for each check box. If else statement updates Google storage with the check box status.
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