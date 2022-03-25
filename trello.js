//trello.js. - This script is injected each time the trello URL is updated via the background.js file


//COMPACT CARD STYLING 
//This automatically applies the compact card styling when a card is loaded and adds a toggle link to swith back to normal card view. 

//Find a position for the compact card controller button
var controllerPosition = document.getElementsByClassName("window-header js-card-detail-header")[0];

//Create a div for the button to sit in
var sidebarControllerContainer = document.createElement("div");
sidebarControllerContainer.classList.add("window-header-inline-content");

if (!!document.getElementById("sidebarControllerButton")) {
  console.log("it's already on the page " + !!sidebarController);
} else {
  setupCompactCards();
};

function setupCompactCards () {

  //Add compact card CSS to the body element
  document.body.classList.add("trello-compact-cards");

  //Place the div on the page
  controllerPosition.append(sidebarControllerContainer);

  //Place the link in the div
  sidebarControllerContainer.innerHTML = '<a class="quiet" href="#" id="sidebarControllerButton">Switch to normal view</a>';

  //Create a variable for the link: this variable is not yet declared to force it to become a global variable. 
  //It's done this way to force the creation of the variable to happen after the above line of code is run. 
  sidebarController = document.getElementById("sidebarControllerButton");
  sidebarController.addEventListener("click", toggleCompactCards);
};

function toggleCompactCards() {
  if (document.body.classList.contains("trello-compact-cards")) {
    sidebarController.innerHTML = "Switch to compact view"
    document.body.classList.remove("trello-compact-cards");
  } else {
    sidebarController.innerHTML = "Switch to normal view"
    document.body.classList.add("trello-compact-cards");
  };
};

// END OF COMPACT CARD STYLING 


// BIG COMMENTS CHECKBOX 
// This looks for the value of the big comments checkbox which is stored in Chrome. 
chrome.storage.sync.get(['bigCommentsCheckboxStatus'], function(result) {
  if (result.bigCommentsCheckboxStatus) {
  document.body.classList.add("trello-big-comments");
  }
});

// DARK CARDS CHECKBOX 
chrome.storage.sync.get(['darkCardsCheckboxStatus'], function(result) {
  if (result.darkCardsCheckboxStatus) {
  document.body.classList.add("trello-dark-cards");
  }
});
