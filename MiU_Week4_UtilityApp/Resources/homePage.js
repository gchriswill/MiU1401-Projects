Ti.include("TiQuery.js");

var currentHomeWindow = Ti.UI.currentWindow;
currentHomeWindow.backgroundColor = "#dedede";
//currentHomeWindow.zIndex = 1;
var mainHomeLable = creatingLabel("Find devices by model number, \n by model indetifier number,\n by specific \"model-type\" release date, \n or tap + to add a new device to the list.", "blue", "center", 16, "arial", null, "auto", 40, null, null, null);

var goButton = Titanium.UI.createButton({
    title: "Go",
    height: 30,
    width: 30,
    right: 10
    
});
var decoyView = Ti.UI.createView({
    zIndex: 1,
    width:"100%",
    height:"100%"
});

var deviceTextField = Ti.UI.createTextField({
        height: 45,
        width: 240,
        hintText: "Enter Device Info",
        value: "",
        rightButton : goButton,
        rightButtonMode: 3,
        enableReturnKey: true,
        returnKeyType: Ti.UI.RETURNKEY_GO,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        zIndex: 3
        
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

decoyView.addEventListener("click", function(e){
        deviceTextField.blur(); 
});
function buttomExecuter(){
    var resultWin = creatingWindow("#fff", null, null, null, "#fff", null);
        resultWin.title = "Matches";
    var navWindowController = creatingNavWindow(resultWin);
    
    var closeWin = Titanium.UI.createButton({
        title: "Go Back",
        bottom: 20,
        width: "auto",
        height: 50,
        font: {
            fontSize: 24, 
            fontFamily: "arial", 
        }
    });
    
    
    closeWin.addEventListener("click", function(e){
        navWindowController.close({modal: true});
        
    });
    
    var valueText = deviceTextField.getValue();
    
    if (valueText == "" || valueText == " " || valueText == null){
        alert("Please type you query and try again...");
    }else{
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
};
currentHomeWindow.add(decoyView);
currentHomeWindow.setRightNavButton(addButton);
currentHomeWindow.add(deviceTextField);
currentHomeWindow.add(mainHomeLable);



