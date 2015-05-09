 /****************************************************************
 * DeviceController
 *
 * DeviceController class is a software representation of the 
 * automation controller device.  It contains all rooms
 * and devices that can be associated with any web based controller
 * UI.
 * 
 ****************************************************************/
 function DeviceController (id, name) {
          this.id = id;
          this.name = name;
          this.rooms = [];

      DeviceController.prototype.getRoomByName = function(name) {
        var result  = this.rooms.filter(function(o){return o.name == name;} );
          return result? result[0] : null; // or undefined
      }

      DeviceController.prototype.getRoomById = function(id) {
        var result  = this.rooms.filter(function(o){return o.id == id;} );
          return result? result[0] : null; // or undefined
      }
 }

/****************************************************************
 * Room
 *
 * can contain 1 or more devices.  provides helper functions to 
 * find devicea
 * 
 ****************************************************************/
 function Room(id, name) {
    this.id = id;
    this.name = name;
    this.devices = [];

    Room.prototype.getDeviceByType = function(type) {
        var result  = this.devices.filter(function(o){return o.type == type;} );
          return result? result[0] : null; // or undefined
    }

    Room.prototype.getDeviceById = function(id) {
        var result  = this.devices.filter(function(o){return o.id == id;} );
          return result? result[0] : null; // or undefined
    }

    Room.prototype.getDeviceByControlId = function(id) {
        var result  = this.devices.filter(function(o){return o.controlId == id;} );
          return result? result[0] : null; // or undefined
    }
 }

/****************************************************************
 * Device
 *
 * base class for all devices.
 * 
 ****************************************************************/
 function Device (id, type, state) {
    this.id = id;
    this.type = type;
    this.state = state;

    this.controlId;
 }

/****************************************************************
 * LightDevice
 *
 * LightDevice class containing the lighting related data
 * and functions. Subclass of device
 * 
 ****************************************************************/
 function LightDevice(id, type, state) {
    LightDevice.prototype = new Device();
    LightDevice.prototype.constructor=LightDevice;
    this.id = id;
    this.type = type;
    this.state = state;

    //no-op function that must be over-ridden to provide the 
    //desired functionality for the devices in question
    LightDevice.prototype.turnOn = function(controlId) {;}
    LightDevice.prototype.turnOff = function(controlId) {;}
}

/****************************************************************
 * CurtainDevice
 *
 * CurtainDevice class containing for thermostat related data
 * and functions. Subclass of device
 * 
 ****************************************************************/
 function CurtainDevice(id, type, state) {
    CurtainDevice.prototype = new Device();
    CurtainDevice.prototype.constructor=CurtainDevice;

    this.id = id;
    this.type = type;
    this.state = state;

    //no-op function that must be over-ridden to provide the 
    //desired functionality for the devices in question
    CurtainDevice.prototype.openCurtain = function(controlId) {;}
    CurtainDevice.prototype.closeCurtain = function(controlId) {;}
}

/****************************************************************
 * ThermostatDevice
 *
 * Thermostats class containing for thermostat related data
 * and functions. Subclass of device
 * 
 ****************************************************************/
 function ThermostatDevice(id, type, state) {
    ThermostatDevice.prototype = new Device();
    ThermostatDevice.prototype.constructor=ThermostatDevice;

    this.id = id;
    this.type = type;
    this.state = state;
    this.temperature;

    //no-op function that must be over-ridden to provide the 
    //desired functionality for the devices in question
    ThermostatDevice.prototype.turnOn = function(controlId) {;}
    ThermostatDevice.prototype.turnOff = function(controlId) {;}
    ThermostatDevice.prototype.setTemperature = function(controlId, temprature){;}
    ThermostatDevice.prototype.increaseTemperature = function(controlId) {;}
    ThermostatDevice.prototype.decreaseTemperature = function(controlId) {;}
}