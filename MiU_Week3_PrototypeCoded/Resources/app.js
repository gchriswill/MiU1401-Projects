//Welcom to my source code. Built with a foundation of Objective-C classes's structures and a custom approach based on the Jekyll engine.
//Feel free to try re-engineer this app, if you can! LOL!

// Classes Library is held is the customClassesControls.js file with information of the classes structure...

//Landing Page
Ti.include("BehaviorControllers/functionsControls.js");
var landingView      = creatingWindow("#fff", "AppleEvent10222013.png", 0, 0, "#fff", null);
var bradingLabel     = creatingLabel("iDevice", "#333", "center", 48, "arial", null, 40, null, null, null, 0);
loadingTimer(null, 0, 1, 3, 750, 0);
landingView.add(bradingLabel);

//Android compatibility modifications
if (Ti.Platform.name !== "iPhone OS"){
    
    bradingLabel.font       = {
        fontSize: 36, 
        fontFamily: "arial", 
    };
     
};  
landingView.open();

Ti.API.info("hello World");

