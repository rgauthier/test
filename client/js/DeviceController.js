 ;(function ( DeviceControllerNS, undefined ) {
   /****************************************************************
   * DeviceController
   *
   * DeviceController class is a software representation of the 
   * automation controller device.  It contains all rooms
   * and devices that can be associated with any web based controller
   * UI.
   * 
   ****************************************************************/
   DeviceControllerNS.DeviceController = function(id, name) {
            this.id = id;
            this.name = name;
            this.rooms = [];
   }

   DeviceControllerNS.DeviceController.prototype.getRoomByName = function(name) {
      var result  = this.rooms.filter(function(o){return o.name == name;} );
        return result? result[0] : null; // or undefined
    }

    DeviceControllerNS.DeviceController.prototype.getRoomById = function(id) {
      var result  = this.rooms.filter(function(o){return o.id == id;} );
        return result? result[0] : null; // or undefined
    }
})(window.DeviceControllerNS = window.DeviceControllerNS || {});