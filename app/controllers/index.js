function openBlueWindow(e) {
    var win3 = Alloy.createController('bluewin').getView();
    $.win1.openWindow(win3);
}

$.win1.open();