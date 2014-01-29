
Ti.include("../BehaviorControllers/customClassesControls.js", "../BehaviorControllers/functionsControls.js","../jsonData.js");
var mediaAndDataArray = ["../tabsVideoImages/iPadmini_Tab.png", "http://www.youtube.com/embed/" + "qL0UlqpfuQc" + "?fs=1&autoplay=1", jsonDataObject.iPadObject];
var universalCurrentWindow = Ti.UI.currentWindow;

var backgroundView = creatingImageView(mediaAndDataArray[0], 320, 190, 0, null, null, null);
    backgroundView.backgroundColor = "#fff";

if (Ti.Platform.name == "iPhone OS"){
    var universalHomeVideoView = creatingWebView(mediaAndDataArray[1],false, false, false, false, 320, 190, 0, null, null, null);
    universalHomeVideoView.opacity = 0.02;
    universalHomeVideoView.zIndex = 3;

    var playButtonView = creatingImageView("../tabsVideoImages/playButton.png", 72, 72, null, null, null, null);
    
    playButtonView.backgroundColor = "#fff";
    playButtonView.borderRadius = 37.5;
    playButtonView.opacity = 0.5;
    universalCurrentWindow.add(universalHomeVideoView);
    backgroundView.add(playButtonView);
};

var universalHomeTableView = creatingAwholeTableView(mediaAndDataArray[2], true);

universalHomeTableView.addEventListener("click", function(e){
    
    var detailWindow = creatingWindow("#000", null, 10, 10, "#fff", null);
    detailWindow.title = e.source.title;
    
    var thumbnail = creatingImageView(e.source.imageLogo, 128, 75, 10, 10, null, null);
    thumbnail.backgroundLeftCap = "100%";
    thumbnail.backgroundTopCap = "100%";
    
    var price = creatingLabel(e.source.prices, "#333", "left", 16, "arial", Ti.UI.SIZE, 75, 10, null, 10, null);
   
         
    var universalTableView = Ti.UI.createTableView({
        scrollable : true,
        showVerticalScrollIndicator : true,
        top: 80
    });
    var sourceHolder = [e.source.ItemDescription, e.source.colors, e.source.software, e.source.displaySize, e.source.dimensions, e.source.weight, e.source.ports, e.source.networks, e.source.storage, e.source.inTheBox];
    var universalTableViewData = [];
    for (var i = 0, j =sourceHolder.length; i<j; i++){
        
        if (i == 0){
            var universalLabelViewRow = creatingLabel("Overview: \n" + sourceHolder[i], "#333", "left", 16, "arial", null, "auto", 10, 10, 10, 10);
        }else{
            var universalLabelViewRow = creatingLabel(sourceHolder[i], "#333", "left", 16, "arial", null, "auto", 10, 10, 10, 10);
        };
        
        var UniversalTableRows = Ti.UI.createTableViewRow({
            touchEnabled: false,
            height: "auto",
            hasChild: false,
        });
        
        UniversalTableRows.add(universalLabelViewRow);
        universalTableViewData.push(UniversalTableRows);
    };
    universalTableView.setData(universalTableViewData);
    
    detailWindow.add(universalTableView);
    detailWindow.add(price);
    detailWindow.add(thumbnail);
    detailWindow.backgroundColor = "#fff";
    
    universalCurrentWindow.sincleTab.open(detailWindow, {animate: true});

    if (Ti.Platform.name !== "iPhone OS"){
        
        detailWindow.backgroundColor = "#000";
        price.color       = "#fff";
        description.color = "#fff";
        Specs.color       = "#fff";
    };
});

universalCurrentWindow.add(universalHomeTableView);
universalCurrentWindow.add(backgroundView);


