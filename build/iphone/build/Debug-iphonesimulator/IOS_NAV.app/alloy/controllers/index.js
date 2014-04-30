function Controller() {
    function openBlueWindow() {
        var win3 = Alloy.createController("bluewin").getView();
        $.win1.openWindow(win3);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "Red Window",
        backgroundColor: "red"
    });
    $.__views.button = Ti.UI.createButton({
        title: "Open Blue Window",
        id: "button"
    });
    $.__views.win2.add($.__views.button);
    openBlueWindow ? $.__views.button.addEventListener("click", openBlueWindow) : __defers["$.__views.button!click!openBlueWindow"] = true;
    $.__views.win1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win2,
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win1.open();
    __defers["$.__views.button!click!openBlueWindow"] && $.__views.button.addEventListener("click", openBlueWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;