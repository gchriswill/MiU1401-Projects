//Featured Page
Ti.include("../BehaviorControllers/customClassesControls.js", "../jsonData.js");
var currentWindowHome = Ti.UI.currentWindow;

var imagesSource           = ["../mainAppImages/promo_iphone5s.png", "../mainAppImages/promo_ipad_air.png", "../mainAppImages/promo_ipad_mini.png"];
var paginImagesArrayHolder = [];

for (var i = 0, j = imagesSource.length; i < j; i++){
        var paginImagesViews = creatingImageView(imagesSource[i], 320, 176, null, null, null, null);
        paginImagesArrayHolder.push(paginImagesViews);
};

var overviewText              = "We believe in empowering the customers with valuable information such as revevant data and technical specifications about Apple's products, is the best way for helping Apple's customers for choosing the right device that fit to their needs and get the most out of it. We are developers, designers and Apple certified consultants with ground-breaking knowledge and experience in All Things Apple, making us the people that users trust most...";
var pagingImagesViewContainer = creatingScrollableView(true, "silver", paginImagesArrayHolder, null, 176, 0, null, null, null);
var titleTextHomePage         = creatingLabel("Welcome", "#333", "center", 32, "arial", null, Titanium.UI.SIZE, 186, null, null, null);
var overviewTextHomePage      = creatingLabel(overviewText, "#333", "left", 16, "arial", null, Titanium.UI.SIZE, 228, 20, 20, null);

currentWindowHome.add(pagingImagesViewContainer, titleTextHomePage, overviewTextHomePage);

//Android compatibility modifications
if (Ti.Platform.name !== "iPhone OS"){ 
    
    currentWindowHome.add(titleTextHomePage);
    currentWindowHome.add(overviewTextHomePage);
    currentWindowHome.backgroundColor = "#000";
    titleTextHomePage.color           = "#fff";
    overviewTextHomePage.color        = "#fff";
    overviewTextHomePage.font         = {
        fontSize: 14, 
        fontFamily: "arial", 
    };
};
