;(function ( DeviceNS, undefined ) {
	/****************************************************************
	 * Device
	 *
	 * base class for all devices.
	 * 
	 ****************************************************************/
	 DeviceNS.Device = function(id, type, state) {
	    this.id = id;
	    this.type = type;
	    this.state = state;

	    this.controlId;
	 }
 })(window.DeviceNS = window.DeviceNS || {});