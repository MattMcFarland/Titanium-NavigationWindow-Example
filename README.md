# Titanium NavigationWindow Example

*This is a working example based on the Titanium DOC found here:* http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.iOS.NavigationWindow)

## From the Docs: ##
> Titanium.Proxy > Titanium.UI.View > Titanium.UI.Window > Titanium.UI.iOS.NavigationWindow
> A Navigation Window implements a specialized view that manages the navigation of hierarchical content.
>
> The navigation window is created with the method Titanium.UI.iOS.createNavigationWindow.
>
> The window property must be set initially in the constructor when creating a navigation window to the root level window. All navigation windows must have at least one root window that cannot be removed.
>
> This class replaces the Titanium.UI.iPhone.NavigationGroup class. Please note that this object is a window and is supposed to be used as a top level container. This can not be added to other windows. 


Basically I copy pasted exactly what the Docs said, you can see the instructions here:

app/views/index.xml:
```xml
<Alloy>
    <NavigationWindow id="win1" platform="ios">
        <Window id="win2" title="Red Window" backgroundColor="red">
            <Button id="button" onClick="openBlueWindow">Open Blue Window</Button>
        </Window>
    </NavigationWindow>
</Alloy>
```

app/controllers/index.js:
```js
function openBlueWindow(e) {
    var win3 = Alloy.createController('bluewin').getView();
    $.win1.openWindow(win3);
}

$.win1.open();
```

app/views/bluewin.xml:
```xml
<Alloy>
    <Window id="win3" title="Blue Window" backgroundColor="blue">
        <Button onClick="closeWindow">Close Window</Button>
    </Window>
</Alloy>
```

app/controllers/bluewin.js:
```js
function closeWindow(){
    $.win3.close();
}
```

The rest of the files you find in this repo were automatically created with Titaniums wizard.

I hope this helps someone.

-Matt McFarland



----------------------------------
LEGAL

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2013 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.

