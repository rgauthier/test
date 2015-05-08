![enter image description here](https://evrythng.com/wp-content/uploads/2014/06/home-automation-slide.jpg)

**Home Automation Device Controller JS Library**
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

    http://localhost:8080/HADC/menu.html

TODO - add image of application here and talk about it.

**Getting Started**
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

Implementation of device functions is implemented by overriding the device defaults. 


    SurveillanceDevice.prototype.cameraOn = function(controlId) {
	var args = new Array(this.id, "on", this.controlId);

	$( document ).trigger( "SurveillanceEvent", args );
}er code here


HADC also allows you to create rooms to help organize devices in logical group representing the space in which the devices you wish to control exist.

    var room = new Room("livingRoom", "Living Room");

Finally all devices and rooms are added to the main Device Controller:

    var houseController = new DeviceController("A-1", "My House");
    
    var room = new Room("livingRoom", "Living Room");
    houseController.rooms.push(room);
    room.devices.push(light);
    
> Written with [StackEdit](https://stackedit.io/).
