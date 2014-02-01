Ti.include("TiQuery.js");

var currentSearchWindow = Ti.UI.currentWindow;

var devicesTable = creatingAwholeTableView();
devicesTable.searchHidden = true;

var searchButtomTop = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.SEARCH
});


searchButtomTop.addEventListener("click", function(){
    
    if (devicesTable.searchHidden == true){
        devicesTable.searchHidden = false;
    }else{
        devicesTable.searchHidden = true;
    };
});

devicesTable.addEventListener("click", function(e){
    
        var deviceMessage = Ti.UI.createAlertDialog({
            message: "Model-Type Release Date: \n" + e.source.yearMake  + "\n Model Number: \n" + e.source.ModelNumber + " \n Model Identifier:\n" + e.source.ModelIdentifier,
            ok: "Okay",
            title:  e.source.title
            }).show();
      
    
});
currentSearchWindow.setRightNavButton(searchButtomTop);
currentSearchWindow.add(devicesTable);