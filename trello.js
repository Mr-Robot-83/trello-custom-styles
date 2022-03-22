//hide sidebar
// var windowSidebarPanel = document.getElementsByClassName("window-sidebar")[0];
// windowSidebarPanel.style.display = "none";

// //reduce window width
// var windowFrame = document.getElementsByClassName("window")[0];
// windowFrame.style.width = "600px";

// //remove "last update" text from window
// var lastUpdate = document.getElementsByClassName("card-detail-item js-card-detail-age")[0];
// lastUpdate.style.display = "none";

// //remove edit button from description tab
// var editDescriptionButton = document.getElementsByClassName("nch-button ml-4 hide-on-edit js-show-with-desc js-edit-desc js-edit-desc-button")[0];
// editDescriptionButton.style.display = "none";

//find a position for the controller button
var position = document.getElementsByClassName("window-header js-card-detail-header")[0];

//create a div for the button to sit in
var sidebarControllerContainer = document.createElement("div");
sidebarControllerContainer.classList.add("window-header-inline-content");

//place the div on the page
position.append(sidebarControllerContainer);

//place the link in the div
sidebarControllerContainer.innerHTML = '<a class="quiet" href="#" id="sidebarController">Switch to normal view</a></div>';

//create a variable for the link
var sidebarController = document.getElementById("sidebarController");

//add custom CSS!
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

