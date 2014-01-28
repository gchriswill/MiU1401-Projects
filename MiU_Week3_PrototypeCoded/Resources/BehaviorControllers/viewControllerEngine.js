//Master View Controller 
var featuredHomeWindow = creatingWindow("#fff", null, 0, 0, "#fff", "tabPages/featuredHomePage.js");

var macPageWindow    = creatingWindow("#000", null, 0, 0, "#fff", "tabPages/macHomePage.js");


var iPhonePageWindow = creatingWindow("#000", null, 0, 0, "#fff", "tabPages/iPhoneHomePage.js");
var iPadPageWindow   = creatingWindow("#000", null, 0, 0, "#fff", "tabPages/iPadHomePage.js");
var iPodPageWindow   = creatingWindow("#000", null, 0, 0, "#fff", "tabPages/iPodHomePage.js");

var tabsMaster = Ti.UI.createTabGroup({});
tabsMaster.opacity = 0.0;
//macPageWindow.tabBar = tabsMaster;
//creatinCurveAnimation(navWindow, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1500);
creatinCurveAnimation(tabsMaster, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1500);

var homeTab   = creatingTab(featuredHomeWindow, "appIcons/home_icon.png", "Home");
var macTab    = creatingTab(macPageWindow, "appIcons/mac_icon.png", "Mac");
var iPhoneTab = creatingTab(iPhonePageWindow, "appIcons/iPhone_icon.png", "iPhone");
var iPadTab   = creatingTab(iPadPageWindow, "appIcons/iPad_icon.png", "iPad");
var iPodTab   = creatingTab(iPodPageWindow, "appIcons/iPod_icon.png", "iPod");

tabsMaster.addTab(homeTab);
tabsMaster.addTab(macTab);
tabsMaster.addTab(iPhoneTab);
tabsMaster.addTab(iPadTab);
tabsMaster.addTab(iPodTab);
macPageWindow.tabBar = tabsMaster;
iPhonePageWindow.tabBar = tabsMaster;
iPadPageWindow.tabBar = tabsMaster;
iPodPageWindow.tabBar = tabsMaster;






//iOS compatibility conditional

tabsMaster.open();
landingView.close();





