Ti.include("TiQuery.js");

var currentSearchWindow = Ti.UI.currentWindow;

var searchButtomTop = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.SEARCH
});

currentSearchWindow.setRightNavButton(searchButtomTop);
//currentSearchWindow.top = 0;

var devicesTable = creatingAwholeTableView();
devicesTable.searchHidden = true;
currentSearchWindow.add(devicesTable);

searchButtomTop.addEventListener("click", function(){
    if (devicesTable.searchHidden == true){
        devicesTable.searchHidden = false;
    }else{
        devicesTable.searchHidden = true;
    };
    
});
