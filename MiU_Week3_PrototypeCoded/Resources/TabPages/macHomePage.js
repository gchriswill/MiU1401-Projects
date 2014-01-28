
Ti.include("../BehaviorControllers/customClassesControls.js", "../BehaviorControllers/functionsControls.js","../jsonData.js");
var currentWindowMac = Ti.UI.currentWindow;

var backgroundView = creatingImageView("../tabsVideoImages/macPro_Tab.png", 320, 190, 0, null, null, null);
    backgroundView.backgroundColor = "#fff";

if (Ti.Platform.name == "iPhone OS"){
    var macHomeVideoView = creatingWebView( "http://www.youtube.com/embed/" + "IbWOQWw1wkM" + "?fs=1&autoplay=1",false, false, false, false, 320, 190, 0, null, null, null);
    macHomeVideoView.opacity = 0.02;
    macHomeVideoView.zIndex = 3;

    var playButtonView = creatingImageView("../tabsVideoImages/playButton.png", 72, 72, null, null, null, null);
    playButtonView.backgroundColor = "#fff";
    playButtonView.borderRadius = 37.5;
    playButtonView.opacity = 0.5;
    currentWindowMac.add(macHomeVideoView);
    backgroundView.add(playButtonView);
};

var macTableView = creatingAwholeTableView(jsonDataObject.macObject);

macTableView.addEventListener("click", function(e){
    
    var detailWindow = creatingWindow("#000", null, 10, 10, "#fff", null);
    detailWindow.title = e.source.title;
    
    var thumbnail = creatingImageView(e.source.imageLogo, 128, 75, 10, 10, null, null);
    thumbnail.backgroundLeftCap = "100%";
    thumbnail.backgroundTopCap = "100%";
    
    var price = creatingLabel(e.source.prices, "#333", "left", 16, "arial", Ti.UI.SIZE, 75, 10, null, 10, null);
    
    var scrollView = Ti.UI.createScrollView({
        contentWidth: "100%",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        top: 90
    });
    var description = creatingLabel(e.source.ItemDescription, "#333", "left", 16, "arial", null, 150, 10, 10, 10, null);
    var Specs = creatingLabel("\n" + e.source.colors + "\n \n" + e.source.software + "\n \n" + e.source.displaySize + "\n \n" + e.source.dimensions + "\n \n" + e.source.weight + "\n \n" + e.source.ports + "\n \n" + e.source.networks + "\n \n" + e.source.storage + "\n \n" + e.source.inTheBox, "#333", "left", 14, "arial", null, null, 150, 10, 10, null);
    
    scrollView.add(Specs);
    scrollView.add(description);
    
    detailWindow.add(scrollView);
    detailWindow.add(price);
    detailWindow.add(thumbnail);
    if (Ti.Platform.name == "iPhone OS"){
        detailWindow.backgroundColor = "#fff";
        var navWindow = creatingNavWindow(currentWindowMac.tabBar);
        
        navWindow.open();
        navWindow.openWindow(detailWindow, {animate: true});
    }else{
        price.color       = "#fff";
        description.color = "#fff";
        Specs.color       = "#fff";
        detailWindow.open();
    }
});

currentWindowMac.add(macTableView);
currentWindowMac.add(backgroundView);


