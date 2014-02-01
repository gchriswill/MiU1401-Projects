// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.include("TiQuery.js");

Titanium.UI.setBackgroundColor("#fff");

var landingWindow = creatingWindow("#fff", null, null, null, "#fff", null);
var landingView = creatingImageView("images/ThankYou.png", "auto", "auto", null, null, null, null);
var landingTimer = loadingTimer("homePage.js", 0, 1, 4, 1000, 0);
var thankYouLabel = creatingLabel("Dear instructor, \n for sharing all your knowledge \n I want to say: ", "#333", "center", 16, "arial", null, "auto", 20, null, null, null);

landingWindow.add(thankYouLabel);
landingWindow.add(landingView);
landingWindow.open();
