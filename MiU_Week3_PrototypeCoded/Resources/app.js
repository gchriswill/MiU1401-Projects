//Welcom to my source code. Built with a foundation of Objective-C classes's structures and a custom approach based on the Jekyll engine.
//Feel free to try re-engineer this app, if you can! LOL!


//Landing Page
Ti.include("BehaviorControllers/functionsControls.js");
var landingView      = creatingWindow("#fff", "AppleEvent10222013.png", 0, 0, "#fff", null);
var loadingIndicator = creatingImageView("mainAppImages/LoadingIndicator.png", "60px", "60px", null, null, null, 50);
var bradingLabel     = creatingLabel("iDevice", "#333", "center", 48, "arial", null, 40, null, null, null, 0);
loadingTimer(loadingIndicator, 0, 2.8125, 720, 7, 0);
landingView.add(loadingIndicator, bradingLabel);

//Android compatibility modifications
if (Ti.Platform.name !== "iPhone OS"){
    loadingIndicator.width  = "50px";
    loadingIndicator.height = "50px";
    loadingIndicator.bottom = 40;
    bradingLabel.font       = {
        fontSize: 36, 
        fontFamily: "arial", 
    };
    
    landingView.add(bradingLabel);    
};
landingView.open();



