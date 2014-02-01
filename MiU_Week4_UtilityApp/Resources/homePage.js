Ti.include("TiQuery.js");

var currentHomeWindow = Ti.UI.currentWindow;
currentHomeWindow.backgroundColor = "#dedede";
var mainHomeLable = creatingLabel("Find devices by model number, \n by model indetifier number,\n by specific \"model-type\" release date, \n or tap + to add a new device to the list.", "blue", "center", 16, "arial", null, "auto", 40, null, null, null);

var goButton = Titanium.UI.createButton({
    title: "Go",
    height: 30,
    width: 30,
    right: 10
    
});

var deviceTextField = Ti.UI.createTextField({
        height: 45,
        width: 240,
        hintText: "Enter Device Info",
        rightButton : goButton,
        rightButtonMode: 3,
        enableReturnKey: true,
        returnKeyType: Ti.UI.RETURNKEY_GO,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
        
});

var addButton = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.ADD
});



deviceTextField.addEventListener("return", function(){
    buttomExecuter();
});

goButton.addEventListener("click", function(){
    buttomExecuter();
});

function buttomExecuter(){
    var resultWin = creatingWindow("#fff", null, null, null, "#fff", null);
        resultWin.title = "Matches";
    var navWindowController = creatingNavWindow(resultWin);
    
    var closeWin = Titanium.UI.createButton({
        title: "Done",
        bottom: 20
    });
    
    closeWin.addEventListener("click", function(e){
        navWindowController.close({modal: true});
        
    });
    
    var valueText = deviceTextField.getValue();
    var newMatchesFoundTable = whileChase(valueText);
    newMatchesFoundTable.bottom = 80;
    
    newMatchesFoundTable.addEventListener("click", function(e){
        var deviceMessage = Ti.UI.createAlertDialog({
            message: e.source.yearMake + "\n " + e.source.title + " \n Model: " + e.source.ModelNumber + " \n Identifier: " + e.source.ModelIdentifier,
            ok: "Okay",
            title: "Your Device Type: "
            }).show();
      
    });
    
    
    
    
    
    
    resultWin.add(newMatchesFoundTable);
    resultWin.add(closeWin);
    navWindowController.open({modal: true});
    
};

currentHomeWindow.setRightNavButton(addButton);
currentHomeWindow.add(deviceTextField);
currentHomeWindow.add(mainHomeLable);


