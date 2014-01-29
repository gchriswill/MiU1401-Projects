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
    
    if (Ti.Platform.name == "iPhone OS"){
        Ti.UI.setBackgroundColor("#fff");
    }else{
        Ti.UI.setBackgroundColor("#000");
    };
    var counter = counterStartPoint;
    var speeder = givenSpeed;
    
    var timer = setInterval(function(){
            
        counter+=counterPlus;
            
        var matrix = Ti.UI.create2DMatrix();
        matrix     = matrix.rotate(counter);
            
        var anime = Ti.UI.createAnimation({
            transform : matrix,
            duration : speeder,
            autoreverse : false,
            repeat : 0
        });
            
        loadingIndicator.animate(anime);
        if (counter == counterStopConditionValue) {
            clearInterval(timer);
                    
            creatinCurveAnimation(landingView, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 0.0, 1000);
            
            var homePage = require("BehaviorControllers/viewControllerEngine");    
        };
    }, speeder);
};

/* Custom Function Class: creatingAwholeTableView
 * 
 * Arguments Specified in the following order: 
 * 1-Specific Object from the JSON data JS file and used to modify the whole table view
 *
 */
//Function creates a Table View for use as template in all the Tab's Windows...
function creatingAwholeTableView(objectLoop, rowHasChildAttribute){
    
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search Items",
        showCancel:true,
        height:43,
        top:0,
    });
    
    
    var universalReadyTable = Ti.UI.createTableView({
        showVerticalScrollIndicator : true,
        search: searchBar, 
        top: 190
    
    });
    
    var universalSections = [];
    for (var n in objectLoop){
            var UniversalStableSection  = Ti.UI.createTableViewSection({
            
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
                UniversalStableSection.add(UniversalTableRows);
            };
            universalSections.push(UniversalStableSection);
    };//End
    
    universalReadyTable.setData(universalSections);
    return universalReadyTable;
};











