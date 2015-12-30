// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true,
    pushState : true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
    domCache: true
});


//页面显示回调,显示前调用
myApp.onPageInit('service', function (page) {
    console.log('Services page initialized');
});

myApp.onPageInit('about', function (page) {
    console.log('One more callback for About page');
});


