;(function ( CurtainDeviceNS, undefined ) {
	/****************************************************************
	 * CurtainDevice
	 *
	 * CurtainDevice class containing for thermostat related data
	 * and functions. Subclass of device
	 * 
	 ****************************************************************/
	 CurtainDeviceNS.CurtainDevice = function (id, type, state) {
	    extend(CurtainDeviceNS.CurtainDevice, DeviceNS.Device);

	    this.id = id;
	    this.type = type;
	    this.state = state;
	}

	//event to trigger curtain update
	CurtainDeviceNS.CurtainDevice.prototype.setDevice = function(controlId, device) {
	    var args = new Array(device, controlId);

	    $( document ).trigger( "curtainEvent", args );
	}
})(window.CurtainDeviceNS = window.CurtainDeviceNS || {});
