//set ID for checkboxOne
let checkboxOne = document.getElementById('big-comments');

//get value of checkboxOne from Chrome storage
chrome.storage.sync.get("checkboxOneStatus", ({ checkboxOneStatus }) => {
  checkboxOne.checked = checkboxOneStatus
});

//add listener that adds or removes custom styles if checkbox is checked or unchecked
checkboxOne.addEventListener('change', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (checkboxOne.checked) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: applyCustomStyles,
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeCustomStyles,
    });
  }
});

//functions to inject script when checkbox changes, and save the updated checkbox status to Chrome storage
function applyCustomStyles () {
  document.body.classList.add("trello-custom-styles");
  let checkboxOneStatus = true;
  chrome.storage.sync.set({ checkboxOneStatus });
}

function removeCustomStyles () {
  document.body.classList.remove("trello-custom-styles");
  console.log("Checkbox is not checked..")
  let checkboxOneStatus = false;
  chrome.storage.sync.set({ checkboxOneStatus });
}