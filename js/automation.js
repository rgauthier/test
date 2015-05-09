         /****************************************************************
         * initControllerItemListeners
         *
         * add controller listeners for requested opperation confirmation 
         * events
         * 
         ****************************************************************/
          function initControllerItemListeners() {

            $( document ).on( "confirmLightingEvent", confirmLighting);
            $( document ).on( "confirmCurtainEvent", confirmCurtain);
          }


        /****************************************************************
         * confirmCurtain
         *
         * confirmCurtain sets the pressed button on the deveice controller
         * panel to the state confirmed by the device its associated with
         * 
         *
         ****************************************************************/
          function confirmCurtain( event, arg1, arg2 ) {
               var curtainCtrlBtn = $("#" + arg1);
               if ( curtainCtrlBtn.is( ".curtainOpen" ) ) {
                   curtainCtrlBtn.removeClass( "curtainOpen" ).addClass( "curtainClosed" );
                   curtainCtrlBtn.css("background","blue");
                   curtainCtrlBtn.text("Curtains (Closed)");
               } else {
                   curtainCtrlBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
                   curtainCtrlBtn.css("background","green");
                   curtainCtrlBtn.text("Curtains (Open)");
               }
           }

        /****************************************************************
         * confirmLighting
         *
         * confirmLighting sets the pressed button on the deveice controller
         * panel to the state confirmed by the device its associated with
         *
         ****************************************************************/
        function confirmLighting ( event, arg1, arg2 ) {
           var lightCtrlBtn = $("#" + arg1);
           if ( lightCtrlBtn.is( ".lightOn" ) ) {
               lightCtrlBtn.removeClass( "lightOn" ).addClass( "lightOff" );
                lightCtrlBtn.css("background","blue");
               lightCtrlBtn.text("Light (Off)");
           } else {
               lightCtrlBtn.removeClass( "lightOff" ).addClass( "lightOn" );
               lightCtrlBtn.text("Light (On)");
               lightCtrlBtn.css("background","green");
            }
        }

        /****************************************************************
         * toggleLight
         *
         * Called by the UI Controller widget to turn lights on and off.
         * It uses the Device controller to find a room and eventually a
         * device.  The device is used to send events to the device, in 
         * this case the UI simultion.
         *
         ****************************************************************/
          function toggleLight(lightId, roomId) {

          	var room = houseController.getRoomById(roomId)

          	if(room != null) {
          		var device = room.getDeviceByControlId(lightId);
	          	
	            if($("#" + lightId).is(".lightOff" )) {
	              device.turnOn(lightId);
	            } else {
	              device.turnOff(lightId);
	            }
            }
            
            return true;
          }

        /****************************************************************
         * toggleCurtain
         *
         * Called by the UI Controller widget to open and close curtains.
         * It uses the Device controller to find a room and eventually a
         * device.  The device is used to send events to the device, in 
         * this case the UI simultion.
         *
         ****************************************************************/
          function toggleCurtain(curtainId, roomId) {
            var room = houseController.getRoomById(roomId)

          	if(room != null) {
          		var device = room.getDeviceByControlId(curtainId);

                if(device != null) {
                  	if($("#" + curtainId).is(".curtainClosed" )) {
                     	device.closeCurtain(curtainId);
                  	} else {
                  		device.openCurtain(curtainId);
                  	}
                  }
            }
              return true;
          }

        /****************************************************************
         * increaseTemperature
         *
         * Increase the temperature in the given room
         *
         ****************************************************************/
        function increaseTemperature(thermoId, roomId) {
            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(thermoId);

                if(device != null) {
                    device.temperature ++;
                    
                    $("#" + thermoId).val(device.temperature + " C");
                    device.increaseTemperature(thermoId, device.temperature);
                }
            }
            return true;
         }

        /****************************************************************
         * decreaseTemperature
         *
         * decrease the temperature in the given room
         *
         ****************************************************************/
         function decreaseTemperature(thermoId, roomId) {
            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(thermoId);

                if(device != null) {
                    device.temperature--;
                    
                    $("#" + thermoId).val(device.temperature + " C");
                    device.decreaseTemperature(thermoId, device.temperature);increaseTemperature
                }
            }
            return true;
         }


        
          /****************************************************************
         * intializePanel
         *
         * Create the Device controller instance and populate it with
         * the existing rooms and devices to be controlled
         *
         ****************************************************************/

         function intializePanel() {
         	//create controller object with rooms and devices
         	houseController = new DeviceController("A-1", "My House");

            createLivingRoom(houseController);
            createKitchen(houseController);
         
         }


        /****************************************************************
         * createLivingRoom
         *
         * create all devices for the living room
         *
         ****************************************************************/
        function createLivingRoom(houseController) {
            //create our first room.  In this case the living room  
            var room = new Room("livingRoom", "Living Room");
            houseController.rooms.push(room);
            
            //create a light device and give it the id of the target device in 
            //our house simulation
            var light = new LightDevice("houseLightIndicator1", "light", "off");
            
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            light.controlId ="LightControlBtn";

            //overide default light function
            light.turnOn = function(controlId) {
                var args = new Array(this.id, "on", this.controlId);

                $( document ).trigger( "lightingEvent", args );
            }
            
            light.turnOff = function(controlId) {
                var args = new Array(this.id, "off", this.controlId);

                $( document ).trigger( "lightingEvent", args );
            }

            room.devices.push(light);
            
            //create a curtain device and give it the id of the target device in 
            //our house simulation
            var curtain = new CurtainDevice("houseCurtainIndicator1", "curtain", "off");

            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            curtain.controlId = "CurtainControlBtn";
            //Trigger a curtain event of type open for the approprite UI Device
            curtain.openCurtain = function(controlId) {
                var args = new Array(this.id, "open", this.controlId);

                $( document ).trigger( "curtainEvent", args );
            }

            //Trigger a curtain event of type close for the approprite UI Device
            curtain.closeCurtain = function(controlId) {
             var args = new Array(this.id, "closed", this.controlId);

                $( document ).trigger( "curtainEvent", args );
            }
            room.devices.push(curtain);
            
            //create a thermostat device and give it the id of the target device in 
            //our house simulation
            var thermostat = new ThermostatDevice("Thermostat1", "thermostat", "off");
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            thermostat.controlId = "tempSettingTxt";
            //seet an initial temperature.
            thermostat.temperature = "29";
            thermostat.increaseTemperature = function() {
                var args = new Array(this.id, this.temperature, this.controlId);
                
                $( document ).trigger( "temperatureSetEvent", args );
            }

            thermostat.decreaseTemperature = function() {
                var args = new Array(this.id, this.temperature, this.controlId);
             
                $( document ).trigger( "temperatureSetEvent", args );
            }

            room.devices.push(thermostat);

            //initialize UI controller panel
            $("#LightControlBtn").val("Light   (" + light.state + ")");
            $("#LightControlBtn").css("background","blue");
            $("#CurtainControlBtn").val("Curtain   (" + curtain.state + ")");
            $("#CurtainControlBtn").css("background","blue");
            $("#tempSettingTxt").val(thermostat.temperature + " C");
            temperature = Number(thermostat.temperature);
        }

        /****************************************************************
         * createKitchen
         *
         * create all devices for the kitchen
         *
         ****************************************************************/
        function createKitchen(houseController) {
            //create our second room.  In this case the living room  
            var room = new Room("kitchen", "Kitchen");
            houseController.rooms.push(room);
            
            //create a light device and give it the id of the target device in 
            //our house simulation
            var light = new LightDevice("houseLightIndicator2", "light", "off");
            
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            light.controlId ="LightControlBtn2";
            //overide default light function
            light.turnOn = function(controlId) {
                var args = new Array(this.id, "on", this.controlId);

                $( document ).trigger( "lightingEvent", args );
            }

            light.turnOff = function(controlId) {
                var args = new Array(this.id, "off", this.controlId);

                $( document ).trigger( "lightingEvent", args );
            }

            room.devices.push(light);
            
            //create a curtain device and give it the id of the target device in 
            //our house simulation
            var curtain = new CurtainDevice("houseCurtainIndicator2", "curtain", "off");

            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            curtain.controlId = "CurtainControlBtn2";
            curtain.openCurtain = function(controlId) {
                var args = new Array(this.id, "open", this.controlId);

                $( document ).trigger( "curtainEvent", args );
            }

            //Trigger a curtain event of type close for the approprite UI Device
            curtain.closeCurtain = function(controlId) {
             var args = new Array(this.id, "closed", this.controlId);

                $( document ).trigger( "curtainEvent", args );
            }
            room.devices.push(curtain);
            
            //create a thermostat device and give it the id of the target device in 
            //our house simulation
            var thermostat = new ThermostatDevice("Thermostat2", "thermostat", "off");
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            thermostat.controlId = "tempSettingTxt2";
            //seet an initial temperature.
            thermostat.temperature = "13";
            thermostat.increaseTemperature = function() {
                var args = new Array(this.id, this.temperature, this.controlId);
                this.temperature++;
                $( document ).trigger( "temperatureSetEvent", args );
            }

            thermostat.decreaseTemperature = function() {
                var args = new Array(this.id, this.temperature, this.controlId);
                this.temperature--;
                $( document ).trigger( "temperatureSetEvent", args );
            }
            room.devices.push(thermostat);

            $("#LightControlBtn2").val("Light   (" + light.state + ")");
            $("#LightControlBtn2").css("background","blue");
            $("#CurtainControlBtn2").val("Curtain   (" + curtain.state + ")");
            $("#CurtainControlBtn2").css("background","blue");
            $("#tempSettingTxt2").val(thermostat.temperature + " C");
            
            temperature = Number(thermostat.temperature);
        }
         
        /****************************************************************
         * togglePower
         *
         * simulates turning the controller panel on and off.
         * 
         * 
         *
         ****************************************************************/
         function togglePower() {
            var powerBtn = $( "#powerBtn" );
 
             if ( powerBtn.is( ".powerOn" ) ) {
                 powerBtn.removeClass( "powerOn" ).addClass( "powerOff" );
                 $( "#powerBtn" ).val("Device Off");
                 $( "#LightControlBtn" ).attr('disabled','disabled');
                 $( "#CurtainControlBtn" ).attr('disabled','disabled');
                 $( "#downTempBtn" ).attr('disabled','disabled');
                 $( "#upTempBtn" ).attr('disabled','disabled');
             } else {
                 powerBtn.removeClass( "powerOff" ).addClass( "powerOn" );
                 $( "#powerBtn" ).val("Device On");
                 $( "#LightControlBtn" ).removeAttr('disabled');
                 $( "#CurtainControlBtn" ).removeAttr('disabled');
                 $( "#downTempBtn" ).removeAttr('disabled');
                 $( "#upTempBtn" ).removeAttr('disabled');
                 $( "#downTempBtn2" ).removeAttr('disabled');
                 $( "#upTempBtn2" ).removeAttr('disabled');
                 intializePanel();
             }
         } 