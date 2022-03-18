//hide sidebar
var windowSidebarPanel = document.getElementsByClassName("window-sidebar")[0];
windowSidebarPanel.style.display = "none";

//shoten window
var windowFrame = document.getElementsByClassName("window")[0];
windowFrame.style.width = "600px";

//remove last update
var lastUpdate = document.getElementsByClassName("card-detail-item js-card-detail-age")[0];
lastUpdate.style.display = "none";

//find a position for the controller button
var position = document.getElementsByClassName("window-header js-card-detail-header")[0];

//create a div for the button to sit in
var sidebarControllerContainer = document.createElement("div");
sidebarControllerContainer.classList.add("window-header-inline-content");

//place the div on the page
position.append(sidebarControllerContainer);

//place the link in the div
sidebarControllerContainer.innerHTML = '<a class="quiet" href="#" id="sidebarController">Show Sidebar</a>';

//create a variable for the link
var sidebarController = document.getElementById("sidebarController");

//funtion to run on click
sidebarController.onclick = function () {
  if (windowSidebarPanel.style.display === "none") {
    windowSidebarPanel.style.display = "";
    windowFrame.style.width = "";
    lastUpdate.style.display = "";
    sidebarController.innerHTML = "Hide Sidebar"
  } else {
    windowSidebarPanel.style.display = "none";
    windowFrame.style.width = "600px";
    sidebarController.innerHTML = "Show Sidebar"
    lastUpdate.style.display = "none";
  };
};
