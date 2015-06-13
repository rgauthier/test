;(function ( RoomNS, undefined ) {
	/****************************************************************
	 * Room
	 *
	 * can contain 1 or more devices.  provides helper functions to 
	 * find devicea
	 * 
	 ****************************************************************/
	 RoomNS.Room = function(id, name) {
	    this.id = id;
	    this.name = name;
	    this.devices = [];
	 }

	RoomNS.Room.prototype.getDeviceByType = function(type) {
	    var result  = this.devices.filter(function(o){return o.type == type;} );
	      return result? result[0] : null; // or undefined
	}

	RoomNS.Room.prototype.getDeviceById = function(id) {
	    var result  = this.devices.filter(function(o){return o.id == id;} );
	      return result? result[0] : null; // or undefined
	}

	RoomNS.Room.prototype.getDeviceByControlId = function(id) {
	    var result  = this.devices.filter(function(o){return o.controlId == id;} );
	      return result? result[0] : null; // or undefined
	}
})(window.RoomNS = window.RoomNS || {});