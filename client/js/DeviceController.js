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
 }

 DeviceController.prototype.getRoomByName = function(name) {
    var result  = this.rooms.filter(function(o){return o.name == name;} );
      return result? result[0] : null; // or undefined
  }

  DeviceController.prototype.getRoomById = function(id) {
    var result  = this.rooms.filter(function(o){return o.id == id;} );
      return result? result[0] : null; // or undefined
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
 }

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

//helper function to extend a base class
function extend(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
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
    extend(LightDevice, Device);
    this.id = id;
    this.type = type;
    this.state = state;

 }

LightDevice.prototype.setDevice = function(controlId, device) {
    var args = new Array(device, controlId);

    $( document ).trigger( "lightingEvent", args );
}

/****************************************************************
 * CurtainDevice
 *
 * CurtainDevice class containing for thermostat related data
 * and functions. Subclass of device
 * 
 ****************************************************************/
 function CurtainDevice(id, type, state) {
    extend(CurtainDevice, Device);

    this.id = id;
    this.type = type;
    this.state = state;
}

//event to trigger curtain update
CurtainDevice.prototype.setDevice = function(controlId, device) {
    var args = new Array(device, controlId);

    $( document ).trigger( "curtainEvent", args );
}


/****************************************************************
 * ThermostatDevice
 *
 * Thermostats class containing for thermostat related data
 * and functions. Subclass of device
 * 
 ****************************************************************/
 function ThermostatDevice(id, type, state) {
     extend(ThermostatDevice, Device);

    this.id = id;
    this.type = type;
    this.state = state;
}

ThermostatDevice.prototype.setDevice = function(controlId, device) {
    var args = new Array(device, controlId);
    
    $( document ).trigger( "temperatureSetEvent", args );
}
