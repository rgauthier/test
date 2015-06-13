![enter image description here](https://evrythng.com/wp-content/uploads/2014/06/home-automation-slide.jpg)

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

**Tomcat 7.0 requires Java SE 6 or later. Read the RELEASE-NOTES and the RUNNING.txt file in the distribution for more details.**

To build the server go into the server/HouseAutomationService directory in a command window and run the maven build with the following command:

	
    mvn clean install

This will build the server and run the junit tests which should have no errors.  Once your build is complete, you can navigate to the target directory; *server/HouseAutomationService/target*; and retrieve the HouseAutomationService.war file.

Take this file and copy it into the Tomcat */webapps* directory
client component

Client Packaging Details
------------------------

**client/**
**Index.html** - *The application view.  It contains two panels to control and display the results of remote manipulation.*

**client/js**
**ApplicationInitializer.js** – *triggers application initialization. Triggers initialization in ControlPadMediator and HouseSimulatorMediator.*

**ControlPadMediator.js**– *link between house simulator portion of the view and the DeviceAutomationService.  Communicates with the controlPadMediator via events*

**HouseSimulatorMediator.js** – *link between house simulator portion of the view and the DeviceAutomationService.  Communicates with the controlPadMediator via events.*

**DeviceAutomationService.js** - *Communicates with the server via REST web service calls*

**DeviceController.js** – *top level object in device hierarchy.  Contains rooms and devices*

**Room.js** – *class that stores devices*

**Device.js** – *supper class from which all devices are derived*

**CurtainDevice.js** – *represents a set of curtains in the house simulation*

**LightDevice.js** - *represents a Light in the house simulation*

**ThermostatDevice.js** - *represents a thermostat in the house simulation*.

**Utils.js** – *contains a utility function for inheritance.*

**client/css**
**ControlPad.css** -  *css for the menu interaction portion of the control pad*

**HouseAutomation.css** -  *Genearl css style for entire application.*


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

    startup.bat (on windows)
    startup.sh (on Mac and Unix)

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

*

*Using the HADC libraries in your application*
-----------------------------------------------

The HADC libraries are JQuery and therefore require the inclusion of a JQuery library at the top of you application.  JQuery versions 1.9 and greater are required.
   

     <script src="https://code.jquery.com/jquery-1.10.2.js"></script>

The you must include the HADC libraries that is in the /js directory in this repository.

       <script src="js/Utils.js"></script>
       <script src="js/Device.js"></script>
       <script src="js/LightDevice.js"></script>
       <script src="js/CurtainDevice.js"></script>
       <script src="js/ThermostatDevice.js"></script>
       <script src="js/Room.js"></script>
       <script src="js/DeviceController.js"></script>

   

**Getting Started with the code**
New custom devices may be used simply by sub-classing the Device object.  For example, lets say we wanted to create a surveillance Device, we would write something similar to this:

  

     SurveillanceDeviceNS.SurveillanceDevice= function (id, type, state) {
    	     extend(ThermostatDeviceNS.ThermostatDevice, DeviceNS.Device);
    	    this.id = id;
    	    this.type = type;
    	    this.state = state;
    	}

This example uses the "extend" util helper functions to aid in the creation of a subclass.  In this example we've taken the liberty of creating a  "SurveillanceDeviceNS" namespace wrapping the class.

creation of  a function would be as follows.  Notice the event definition.  Event are how the application talks to the house simulator in the application.

    SurveillanceDeviceNS.SurveillanceDeviceNS.prototype.setDevice = function(controlId, device) {
    	    var args = new Array(device, controlId);
    	    	    $( document ).trigger( "SurveillanceEvent", args );
    	}

   

HADC also allows you to create rooms to help organize devices in logical group representing the space in which the devices you wish to control exist.

    var room = new RoomNS.Room("livingRoom", "Living Room");

Finally all devices and rooms are added to the main Device Controller:

    var houseController = new DeviceControllerNS.DeviceController("A-1", "My House");
    
    var room = new RoomNS.Room("livingRoom", "Living Room");
    houseController.rooms.push(room);
    room.devices.push(light);

  
   **Know issues:**

 -	No real error message reporting capability on the client or server.  This would be considered a next step given extra alloted time.
 -	Thermostats are not waiting for confirmation events to modify their temperature, they assume their operation was successful and changes the temperature.

**Future enhancements:**

- Dynamically create house control pad menu from device and room list.
-	Create automated testing using QUnit
-	Create a responsive web UI.

> Written with [StackEdit](https://stackedit.io/).