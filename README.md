![enter image description here](![enter image description here](https://evrythng.com/wp-content/uploads/2014/06/home-automation-slide.jpg)

**Home Automation Device Controller**
-------------------------------------
You can create your own customized user interfaces and leverage the Home Automation Device Controller (HADC) libraries to interact with any house hold device.

**The HADC library comes with three default device types:**

 1. A lighting device for controlling lighting.
 2. A Curtain device form opening and closing curtains
 3. A Thermostat device for controlling house hold temperature on a room by room basis.

**Using the HADC libraries in your application**

The HADC libraries are JQuery and therefore require the inclusion of a JQuery library at the top of you application.  JQuery versions 1.9 and greater are required.
   

     <script src="https://code.jquery.com/jquery-1.10.2.js"></script>

The you must include the HADC library that is in the /js directory in this repository.

    <script src="js/DeviceController.js"></script>
    
**Sample application**
HADC provides you with a sample application to get you started.  It comes with a 2 room controller and a two room house device simulator UI that both run in the same browser.  The sample is in the root of the GitHub directory with this readme.  To use this sample, simply download the contents of this repository to your local file system or web server.

If you install the sample application in your web server under the HADC directory then you would enter the following URL to view the application

    http://localhost:8080/HADC/index.html

**When the page renders**
You will see a smart phone with a menu displayed on it.  Just below the the red stack menu you will see an orange button with "Device Off" on it.  

**You must press the"Device Off"** button to turn on the UI and be able to click on the red panel with the room names.  Only when the button is green and displaying "Device On" will you be able to use the stack menu.

**Device Operation**
Lights and curtains will appear blue on the House Control Panel (on phone) when they are not active.  Pressing.

The thermostat can be operated by pressing the up of the down button.

**Seeing the results of device operation**
On the right hand side of the web page is the "House Emulation Panel" which will show commands received by the House Control Pad.

Light and curtains on the Control Panel will not toggle on of off  until they receive a confirmation event from the House Emulation Panel.  The thermostat does not wait for the same confirmation on the control panel.  It just changes its temperature depending on user input.  Confirmation events can be setup for any device.

**Getting Started with the code**
New custom devices may be used simply by sub-classing the Device object.

    function SurveillanceDevice(id, type, state) {
    SurveillanceDevice.prototype = new Device();
    SurveillanceDevice.prototype.constructor=SurveillanceDevice;

    this.id = id;
    this.type = type;
    this.state = state;

    //no-op function that must be over-ridden to provide the 
    //desired functionality for the devices in question
    SurveillanceDevice.prototype.cameraOn = function(controlId) {;}
    SurveillanceDevice.prototype.cameraOff = function(controlId) {;}
}

Implementation of device functions is implemented by overriding the device defaults.  see automation.js/createKitchen for an example.


    myObject.cameraOn = function(controlId) {
	var args = new Array(this.id, "on", this.controlId);

	$( document ).trigger( "SurveillanceEvent", args );
}


HADC also allows you to create rooms to help organize devices in logical group representing the space in which the devices you wish to control exist.

    var room = new Room("livingRoom", "Living Room");

Finally all devices and rooms are added to the main Device Controller:

    var houseController = new DeviceController("A-1", "My House");
    
    var room = new Room("livingRoom", "Living Room");
    houseController.rooms.push(room);
    room.devices.push(light);

  
   **Know issues:**

 - Turning House control pad “off” then “on” again changes the device temperatures back to the default.  They should take their values from the house emulation devices.
 - House emulation light and curtain indicators move on the screen when toggling lights and curtains.
 -	No error message reporting capability.
 -	Thermostats are not waiting for confirmation events to modify their temperature, they assume their operation was successful and changes the temperature.

**Future enhancements:**

- Dynamically create house control pad menu from device and room list.
-	Add icons to the house control pad menu.
-	Refactoring of code to simplify and reduce duplication.
-	Create automated testing using QUnit
-	Evaluate JavaScript with lint and clean up code.
-	Create a responsive web UI.
-	Use web friendly graphics (jpeg instead of .png) with a smaller footprint for improved performance.
-	Some UI changes like stacked menu panel color changes would be more efficient if they were CSS instead of java script

> Written with [StackEdit](https://stackedit.io/).