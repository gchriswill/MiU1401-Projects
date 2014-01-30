//Functions Library Framework
Ti.include("customClassesControls.js");


//Testing Include #2
function alerstMsg2(string){
    alert(string);
};

/* Custom Function Class: loadingTimer
 * 
 * Arguments Specified in the following order: 
 * 1-Target UI object view
 * 2-counter start value number
 * 3-counter increaser value number
 * 4- counter stop value number for the stop condition
 * 5-speed value number in miliseconds
 * 6- function call for next destination view  
 * 
 */
//Function sets a timer for opening the app home window on the landing page. Also, sets the loading indicator animation...

function loadingTimer(target, counterStartPoint, counterPlus, counterStopConditionValue, givenSpeed, nextDestination){ 
    var ActivityIndicatorStyler;
    
    var counter = counterStartPoint;
    
    var activityIndicator = Ti.UI.createActivityIndicator({
        color: "#333",
        font: {fontFamily: "arial", fontSize:26, fontWeight:"bold"},
        message: "Loading...",
        
        bottom: 48,
        height: "auto",
        width: "auto"
    });
    if (Ti.Platform.name == "iPhone OS"){
        Ti.UI.setBackgroundColor("#fff");
        
        activityIndicator.style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    }else{
        Ti.UI.setBackgroundColor("#000");
        activityIndicator.style = Ti.UI.ActivityIndicatorStyle.DARK ;
        //activityIndicator.width = "auto";
        
    };
    activityIndicator.show();
    
    landingView.add(activityIndicator);
    
    var timer = setInterval(function(){
            
        counter+=counterPlus;
        if (counter == counterStopConditionValue) {
            clearInterval(timer);
                    
            creatinCurveAnimation(landingView, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 0.0, 1000);
            
            var homePage = require("BehaviorControllers/viewControllerEngine");    
        };
    }, givenSpeed);
};

/* Custom Function Class: creatingAwholeTableView
 * 
 * Arguments Specified in the following order: 
 * 1-Specific Object from the JSON data JS file and used to modify the whole table view
 * 2-Row Has Child Attribute Value boolean
 * 3-Array with index passed for media
 * 4-Array with index passed for media
 *
 */
//Function creates a Table View for use as template in all the Tab's Windows...
function creatingAwholeTableView(objectLoop, rowHasChildAttribute, mediaAndDataArrayPassed, mediaAndDataArrayPassedTwo){
    
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search Items",
        showCancel:true,
        height:40,
        top:0,
    });
    
    var universalReadyTable = Ti.UI.createTableView({
        showVerticalScrollIndicator : true,
        search: searchBar,
        scrollsToTop : true,
        top: 0
    
    });
    
    var backgroundView = creatingImageView(mediaAndDataArrayPassed, 320, 190, 0, null, null, null);
    backgroundView.backgroundColor = "#fff";

    if (Ti.Platform.name == "iPhone OS"){
        if(mediaAndDataArrayPassedTwo !== " "){
        var universalHomeVideoView = creatingWebView(mediaAndDataArrayPassedTwo,false, false, false, false, 320, 190, 0, null, null, null);
        universalHomeVideoView.opacity = 0.02;
        
        var playButtonView = creatingImageView("../tabsVideoImages/playButton.png", 72, 72, null, null, null, null);
        
        playButtonView.backgroundColor = "#fff";
        playButtonView.borderRadius = 37.5;
        playButtonView.opacity = 0.5;
        
        backgroundView.add(playButtonView);
        backgroundView.add(universalHomeVideoView);
        };
    };
    
    var universalSections = [];
    var UniversalStableSection1  = Ti.UI.createTableViewSection({
        headerView : backgroundView,
        footerTitle : "Featured Products"
    });
    universalSections.push(UniversalStableSection1);
    
    for (var n in objectLoop){
            var UniversalStableSection2  = Ti.UI.createTableViewSection({
                
            });
            
            for (var i = 0, j = objectLoop[n].data.length; i < j; i++){
                
                var UniversalTableRows = Ti.UI.createTableViewRow({
                    title: objectLoop[n].data[i].title,
                    hasChild: rowHasChildAttribute,
                    
                    title       : objectLoop[n].data[i].title,
                    imageLogo   : objectLoop[n].data[i].imageLogo,
                    prices      : objectLoop[n].data[i].prices,
                    colors      : objectLoop[n].data[i].colors,
                    software    : objectLoop[n].data[i].software,
                    displaySize : objectLoop[n].data[i].displaySize,
                    dimensions  : objectLoop[n].data[i].dimensions,
                    weight      : objectLoop[n].data[i].weight,
                    ports       : objectLoop[n].data[i].ports,
                    networks    : objectLoop[n].data[i].networks,
                    storage     : objectLoop[n].data[i].storage,
                    inTheBox    : objectLoop[n].data[i].inTheBox,
                    ItemDescription : objectLoop[n].data[i].description
                    
                });
                UniversalStableSection2.add(UniversalTableRows);
            };
            universalSections.push(UniversalStableSection2);
    };//End
    
    universalReadyTable.setData(universalSections);
    
    return universalReadyTable;
};


