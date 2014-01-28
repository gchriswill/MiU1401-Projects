
Ti.include("../BehaviorControllers/customClassesControls.js", "../BehaviorControllers/functionsControls.js","../jsonData.js");
var currentWindowMac = Ti.UI.currentWindow;

var backgroundView = creatingImageView("../tabsVideoImages/iPodTouch_Tab.png", 320, 190, 0, null, null, null);
    backgroundView.backgroundColor = "#fff";

var macTableView = creatingAwholeTableView(jsonDataObject.iPodObject);

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
currentWindowMac.add(backgroundView);//alert("You are in the iPod Page");