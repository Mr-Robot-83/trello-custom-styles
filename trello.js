//trello.js. - This script is injected each time the trello URL is updated via the background.js file


//COMPACT CARD STYLING ----------
//This automatically applies the compact card styling when a card is loaded and adds a toggle link to swith back to normal card view. 

//find a position for the controller button
var controllerPosition = document.getElementsByClassName("window-header js-card-detail-header")[0];

//create a div for the button to sit in
var sidebarControllerContainer = document.createElement("div");
sidebarControllerContainer.classList.add("window-header-inline-content");

//place the div on the page
controllerPosition.append(sidebarControllerContainer);

//place the link in the div
sidebarControllerContainer.innerHTML = '<a class="quiet" href="#" id="sidebarController">Switch to normal view</a>';

//create a variable for the link
var sidebarController = document.getElementById("sidebarController");

//add compact card CSS
document.body.classList.add("trello-compact-cards");

//funtion to run on click
sidebarController.onclick = function () {
  if (document.body.classList.contains("trello-compact-cards")) {
    sidebarController.innerHTML = "Switch to compact view"
    document.body.classList.remove("trello-compact-cards");
  } else {
    sidebarController.innerHTML = "Switch to normal view"
    document.body.classList.add("trello-compact-cards");
  };
};
// END OF COMPACT CARD STYLING ----------

// BIG COMMENTS CHECKBOX ----------
// This looks for the value of the big comments checkbox which is stored in Chrome. If the box is checked, it will adds a css class to the body element to activate the styles on the appropriate page elements.

//look for bigCommentsCheckbox value and apply styles if checked
chrome.storage.sync.get(['bigCommentsCheckboxStatus'], function(result) {
  if (result.bigCommentsCheckboxStatus) {
  document.body.classList.add("trello-big-comments");
  }
});

// END OF COMMENTS CHECKBOX ----------


// DARK CARDS CHECKBOX ----------

//look for darkCardsCheckbox value and apply styles if checked
chrome.storage.sync.get(['darkCardsCheckboxStatus'], function(result) {
  if (result.darkCardsCheckboxStatus) {
  document.body.classList.add("trello-dark-cards");
  }
});

// END OF COMMENTS CHECKBOX ----------