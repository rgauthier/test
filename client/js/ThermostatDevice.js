;(function ( ThermostatDeviceNS, undefined ) {
	/****************************************************************
	 * ThermostatDevice
	 *
	 * Thermostats class containing for thermostat related data
	 * and functions. Subclass of device
	 * 
	 ****************************************************************/
	 ThermostatDeviceNS.ThermostatDevice = function (id, type, state) {
	     extend(ThermostatDeviceNS.ThermostatDevice, DeviceNS.Device);

	    this.id = id;
	    this.type = type;
	    this.state = state;
	}

	ThermostatDeviceNS.ThermostatDevice.prototype.setDevice = function(controlId, device) {
	    var args = new Array(device, controlId);
	    
	    $( document ).trigger( "temperatureSetEvent", args );
	}
})(window.ThermostatDeviceNS = window.ThermostatDeviceNS || {});
