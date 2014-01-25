//Landing Page


var landingView = Ti.UI.createWindow({
    title: "Featured",
    backgroundColor: "#fff",
    backgroundImage: "AppleEvent10222013.png",
    backgroundLeftCap: 0,
    backgroundTopCap: 0,
    barColor: "#fff"
});

var bradingLabel = Ti.UI.createLabel({
    text: "iDevice",
    color: "#333",
    textAlign: "center",
    font: {
        fontSize: 48, 
        fontFamily: "arial", 
    },
    bottom: 0,
    height: 40
    
});

landingView.add(bradingLabel);
landingView.open();