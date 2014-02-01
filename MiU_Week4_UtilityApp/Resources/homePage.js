Ti.include("TiQuery.js");

var currentHomeWindow = Ti.UI.currentWindow;

var mainHomeLable = creatingLabel("You had not registered any device yet, \n clik the + buttom to register a device...", "blue", "center", 16, "arial", null, "auto", null, null, null, null);

currentHomeWindow.add(mainHomeLable);
