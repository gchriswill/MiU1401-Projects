
Ti.include("../BehaviorControllers/customClassesControls.js", "../BehaviorControllers/functionsControls.js","../jsonData.js");
var mediaAndDataArray = ["../tabsVideoImages/iPodTouch_Tab.png", " ", jsonDataObject.iPodObject];
var universalCurrentWindow = Ti.UI.currentWindow;

var universalHomeTableView = creatingAwholeTableView(mediaAndDataArray[2], true, mediaAndDataArray[0], mediaAndDataArray[1]);

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
        scrollsToTop : true,
        top: 90
    });
    var sourceHolder = [e.source.ItemDescription, e.source.colors, e.source.software, e.source.displaySize, e.source.dimensions, e.source.weight, e.source.ports, e.source.networks, e.source.storage, e.source.inTheBox];
    var universalTableViewData = [];
    var tableSection1  = Ti.UI.createTableViewSection({
               headerTitle: "Technical Specification"
    });
    for (var i = 0, j =sourceHolder.length; i<j; i++){
        
        if (i == 0){
            var universalLabelViewRow = creatingLabel("Overview: \n" + sourceHolder[i], "#333", "left", 16, "arial", null, "auto", 10, 10, 10, 10);
        }else{
            var universalLabelViewRow = creatingLabel(sourceHolder[i], "#333", "left", 14, "arial", null, "auto", 10, 10, 10, 10);
        };
        if (Ti.Platform.name !== "iPhone OS"){
        
            universalLabelViewRow.color = "#fff";
        
        };
        var UniversalTableRows = Ti.UI.createTableViewRow({
            touchEnabled: false,
            height: "auto",
            hasChild: false,
        });
        
        UniversalTableRows.add(universalLabelViewRow);
        tableSection1.add(UniversalTableRows);
        
    };
    universalTableViewData.push(tableSection1);
    universalTableView.setData(universalTableViewData);
    
    detailWindow.add(universalTableView);
    detailWindow.add(price);
    detailWindow.add(thumbnail);
    detailWindow.backgroundColor = "#fff";
     if (Ti.Platform.name !== "iPhone OS"){
        
        detailWindow.backgroundColor = "#000";
     };
    universalCurrentWindow.sincleTab.open(detailWindow, {animate: true});

});

universalCurrentWindow.add(universalHomeTableView);

