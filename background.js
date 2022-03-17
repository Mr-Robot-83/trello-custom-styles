//listen for trello card page load
chrome.tabs.onUpdated.addListener(
  callback: function,
)

//find a position for the controller button
let position = document.getElementsByClassName("window-header js-card-detail-header")[0];

//create a div for the button to sit in
let sidebarControllerContainer = document.createElement("div");
sidebarControllerContainer.classList.add("window-header-inline-content");

//place the div on the page
position.append(sidebarControllerContainer);

//place the link in the div
sidebarControllerContainer.innerHTML = '<a class="quiet" href="#" id="sidebarController">Hide Sidebar</a>';

//create a variable for the link
let sidebarController = document.getElementById("sidebarController");

//funtion to run on click
sidebarController.onclick = function () {
  let windowSidebar = document.getElementsByClassName("window-sidebar")[0];
  let window = document.getElementsByClassName("window")[0];

  if (windowSidebar.style.display === "none") {
    windowSidebar.style.display = "";
    window.style.width = "";
    sidebarController.innerHTML = "Hide Sidebar"
  } else {
    windowSidebar.style.display = "none";
    window.style.width = "600px";
    sidebarController.innerHTML = "Show Sidebar"
  }
};