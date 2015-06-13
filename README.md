![enter image description here](![enter image description here](https://evrythng.com/wp-content/uploads/2014/06/home-automation-slide.jpg)

**Home Automation Device Controller**
-------------------------------------
You can create your own customized user interfaces and leverage the Home Automation Device Controller (HADC) libraries to interact with any house hold device.

**The HADC library comes with three default device types:**

 1. A lighting device for controlling lighting.
 2. A Curtain device form opening and closing curtains
 3. A Thermostat device for controlling house hold temperature on a room by room basis.

Installation
============
The HADC application is composed of a client and server component.  

The client component is an html based web application that demonstrate home automation features available.

The server component is a RESTful web services library that allows the calling client application to retrieve and persist various device values from the environment being automated.

Server component
----------------

The RESTful web service is build using Maven, Java 7 and run on the Tomcat 7 server.

If you do not have a copy of Tomcat 7, you may download if from the following location.

[Apache Tomcat 7](https://tomcat.apache.org/download-70.cgi)

To build the server go into the server/HouseAutomationService directory in a command window and run the maven build with the following command:

	
    mvn clean install

This will build the server and run the junit tests which should have no errors.  Once your build is complete, you can navigate to the target directory; *server/HouseAutomationService/target*; and retrieve the HouseAutomationService.war file.

Take this file and copy it into the Tomcat */webapps* directory
Client component

The client component is a web application that can be run in a browser.

**Supported Browsers:**
Google Chrome
Mozilla Firefox

To install the client application copy the client directory from the git repository and place it in the Tomcat */webapps* directory

Starting the Tomcat server
--------------------------
At this point you should have a client directories and a war file that you've added to your tomcat /webapps directory:

    /webapps/client
    /webapps/HouseAutomationService.war

Once this is confirmed, open a command prompt in the tomcat /bin directory and enter:

    Startup.bat

Once the server is started you can use the web application

Getting started
===============

Here is a short intro how to use the HADC sample application. 

Open a browser window and type in the following Url:

http://localhost:8080/client/index.html

This will bring up the sample HADC Web interface which is comprised of two panels side by side.  

The first panel is the **House Control Panel** and is located in the image of a mobile device as is one one the possible implementations of a controller.  

The second panel is the **House Emulation Panel** located on the right side of the browser.  It represents the devices being controlled by the control pad on the left.

**Initializing the application** is done in the House Control Pad by pressing the "Device Off" button.  The result of pressing this button is a call from the web application to our server to retrieve the list of available devices as well as their current states.  When the Button turn blue and and says Device On, both panel on the web page will have been initialized from the server and will be in Sync.

The **House Emulation Panel** will immediately display the values from the server.  To see the values in the **House Control Panel** you must expand the "living room" and "kitchen" menu items by clicking on them.  Once open, you can set the temperature, turn lights on and off, as well as open and close the curtains and see you changes reflected in the **House Emulation Panel**

These changes will be persisted to the Tomcat server; WHILE IT IS RUNNING.  The persistence of data will only last for the duration of the server instance.

Opening new browser sessions will pick up and initialize the web application with the last values set and recorded by the server.

**Have Fun!**

**Using the HADC libraries in your application**

The HADC libraries are JQuery and therefore require the inclusion of a JQuery library at the top of you application.  JQuery versions 1.9 and greater are required.
   

     <script src="https://code.jquery.com/jquery-1.10.2.js"></script>

The you must include the HADC library that is in the /js directory in this repository.

    <script src="js/DeviceController.js"></script>
   

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

 -	No error message reporting capability.
 -	Thermostats are not waiting for confirmation events to modify their temperature, they assume their operation was successful and changes the temperature.

**Future enhancements:**

- Dynamically create house control pad menu from device and room list.
-	Add icons to the house control pad menu.
-	Create automated testing using QUnit
-	Create a responsive web UI.

> Written with [StackEdit](https://stackedit.io/).