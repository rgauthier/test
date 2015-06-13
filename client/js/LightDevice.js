;(function ( LightNS, undefined ) {
	/****************************************************************
	 * LightDevice
	 *
	 * LightDevice class containing the lighting related data
	 * and functions. Subclass of device
	 * 
	 ****************************************************************/
	 LightNS.LightDevice = function (id, type, state) {
	    extend(LightNS.LightDevice, DeviceNS.Device);
	    this.id = id;
	    this.type = type;
	    this.state = state;

	 }

	LightNS.LightDevice.prototype.setDevice = function(controlId, device) {
	    var args = new Array(device, controlId);

	    $( document ).trigger( "lightingEvent", args );
	}
})(window.LightNS = window.LightNS || {});