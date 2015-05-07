 function DeviceController (id, name) {
          this.id = id;
          this.name = name;
          this.rooms = [];

      Room.prototype.getByName = function(name) {
        var result  = this.rooms.filter(function(o){return o.name == name;} );
          return result? result[0] : null; // or undefined
      }

      Room.prototype.getById = function(id) {
        var result  = this.rooms.filter(function(o){return o.id == id;} );
          return result? result[0] : null; // or undefined
      }
 }

 function Room(id, name) {
    this.id = id;
    this.name = name;
    this.devices = [];

    Room.prototype.getByType = function(type) {
        var result  = this.devices.filter(function(o){return o.type == type;} );
          return result? result[0] : null; // or undefined
    }

    Room.prototype.getById = function(id) {
        var result  = this.devices.filter(function(o){return o.id == id;} );
          return result? result[0] : null; // or undefined
    }
 }

 function Device (id, type, state) {
    this.id = id;
    this.type = type;
    this.state = state;
 }