
;(function ( ControlPadMediator, undefined ) {

         /****************************************************************
         * initControllerItemListeners
         *
         * add controller listeners for requested opperation confirmation 
         * events and click evnets for control pad
         * 
         ****************************************************************/
          ControlPadMediator.register = function() {

            $( document ).on( "confirmLightingEvent", confirmLighting);
            $( document ).on( "confirmCurtainEvent", confirmCurtain);
            $( document ).on( "GetAllDevicesReturnedEvent", getAllDevicesReturned);

            //create click event handlers for control Pad portion of UI
            $( "#LightControlBtn" ).click(function() {
               ControlPadMediator.toggleLight('LightControlBtn', 'livingRoom');
            });

            $( "#CurtainControlBtn" ).click(function() {
               ControlPadMediator.toggleCurtain('CurtainControlBtn', 'livingRoom');
            });

            $( "#downTempBtn" ).click(function() {
               ControlPadMediator.decreaseTemperature('tempSettingTxt','livingRoom');
            });

            $( "#upTempBtn" ).click(function() {
               ControlPadMediator.increaseTemperature('tempSettingTxt','livingRoom');
            });

            $( "#LightControlBtn2" ).click(function() {
                ControlPadMediator.toggleLight('LightControlBtn2', 'kitchen');
            });

            $( "#CurtainControlBtn2" ).click(function() {
               ControlPadMediator.toggleCurtain('CurtainControlBtn2', 'kitchen');
            });

            $( "#downTempBtn2" ).click(function() {
               ControlPadMediator.decreaseTemperature('tempSettingTxt2','kitchen');
            });

            $( "#upTempBtn2" ).click(function() {
               ControlPadMediator.increaseTemperature('tempSettingTxt2','kitchen');
            });

             $( "#powerBtn" ).click(function() {
               ControlPadMediator.togglePower();
            });

          }


        /****************************************************************
         * togglePower
         *
         * simulates turning the controller panel on and off.
         * 
         * 
         *
         ****************************************************************/
         ControlPadMediator.togglePower = function() {
            var powerBtn = $( "#powerBtn" );
 
             if ( powerBtn.is( ".powerOn" ) ) {
                 powerBtn.removeClass( "powerOn" ).addClass( "powerOff" );
                 $( "#powerBtn" ).val("Device Off");
                 $( "#LightControlBtn" ).attr('disabled','disabled');
                 $( "#CurtainControlBtn" ).attr('disabled','disabled');
                 $( "#downTempBtn" ).attr('disabled','disabled');
                 $( "#upTempBtn" ).attr('disabled','disabled');
                 $( document ).trigger( "DeviceOffEvent");
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

        /****************************************************************
         * toggleLight
         *
         * Called by the UI Controller widget to turn lights on and off.
         * It uses the Device controller to find a room and eventually a
         * device.  The device is used to send events to the device, in 
         * this case the UI simultion.
         *
         ****************************************************************/
          ControlPadMediator.toggleLight = function(lightId, roomId) {

            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(lightId);
                if(device != null) {
                    if(device.state == "on")
                        device.state = "off";
                    else
                        device.state = "on";

                    device.setDevice(lightId, device);
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
          ControlPadMediator.toggleCurtain = function (curtainId, roomId) {
            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(curtainId);

                if(device != null) {
                    if(device.state == "open")
                        device.state = "closed";
                    else
                        device.state = "open";

                    device.setDevice(curtainId, device);
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
         ControlPadMediator.increaseTemperature = function(thermoId, roomId) {
            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(thermoId);

                if(device != null) {
                    device.state++;
                    
                    $("#" + thermoId).val(device.state + " C");
                    device.setDevice(thermoId, device);
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
          ControlPadMediator.decreaseTemperature = function(thermoId, roomId) {
            var room = houseController.getRoomById(roomId)

            if(room != null) {
                var device = room.getDeviceByControlId(thermoId);

                if(device != null) {
                    device.state--;
                    
                    $("#" + thermoId).val(device.state + " C");
                    device.setDevice(thermoId, device);
                }
            }
            return true;
         }


         //PRIVATE FUNCTIONS

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
                   curtainCtrlBtn.text("Curtains (Closed)");
               } else {
                   curtainCtrlBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
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
                lightCtrlBtn.text("Light (Off)");
           } else {
               lightCtrlBtn.removeClass( "lightOff" ).addClass( "lightOn" );
               lightCtrlBtn.text("Light (On)");
            }
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
         	houseController = new DeviceControllerNS.DeviceController("A-1", "My House");

            DeviceAutomationService.getAllDevices(ApplicationInitializer.destinationUrl);

         }


         /****************************************************************
         * getAllDevicesReturned
         *
         * Event listener for list of devices returned from an Ajax call
         * to the server
         *
         ****************************************************************/
        function getAllDevicesReturned( event, sucess, data, response ) {
            if(sucess && data != null) {
                var parsed = JSON.parse(JSON.stringify(data));
                createLivingRoom(houseController, parsed.allRooms[0]);
                createKitchen(houseController, parsed.allRooms[1]);
            }

            //todo - add error handling to UI here
        }

        /****************************************************************
         * createLivingRoom
         *
         * create all devices for the living room
         *
         ****************************************************************/
        function createLivingRoom(houseController, data) {
            //create our first room.  In this case the living room  
            var room = new RoomNS.Room("livingRoom", "Living Room");
            houseController.rooms.push(room);
            
            //create a light device and give it the id of the target device in 
            //our house simulation
            var light = new LightNS.LightDevice(data.light.id, 
                            data.light.type, 
                            data.light.state);
            
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            light.controlId ="LightControlBtn";

            room.devices.push(light);
            
            //create a curtain device and give it the id of the target device in 
            //our house simulation
            var curtain = new CurtainDeviceNS.CurtainDevice(data.curtain.id, 
                            data.curtain.type, 
                            data.curtain.state);

            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            curtain.controlId = "CurtainControlBtn";

            //Trigger a curtain event that will set the state for the approprite UI Device
            curtain.setDevice = function(controlId, device) {
                var args = new Array(device, controlId);

                $( document ).trigger( "curtainEvent", args );
            }

            room.devices.push(curtain);
            
            //create a thermostat device and give it the id of the target device in 
            //our house simulation
            var thermostat = new ThermostatDeviceNS.ThermostatDevice(data.thermostat.id, 
                            data.thermostat.type, 
                            data.thermostat.state);

            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            thermostat.controlId = "tempSettingTxt";

            room.devices.push(thermostat);

            inializeHouseControlPad("#LightControlBtn","#CurtainControlBtn","#tempSettingTxt", data);
        }

        

        /****************************************************************
         * createKitchen
         *
         * create all devices for the kitchen
         *
         ****************************************************************/
        function createKitchen(houseController, data) {
            //create our second room.  In this case the living room  
            var room = new RoomNS.Room("kitchen", "Kitchen");
            houseController.rooms.push(room);
            
            //create a light device and give it the id of the target device in 
            //our house simulation
            var light = new LightNS.LightDevice(data.light.id, 
                            data.light.type, 
                            data.light.state);
            
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            light.controlId ="LightControlBtn2";
            //overide default light function
           
            room.devices.push(light);
            
            //create a curtain device and give it the id of the target device in 
            //our house simulation
            var curtain = new CurtainDeviceNS.CurtainDevice(data.curtain.id, 
                            data.curtain.type, 
                            data.curtain.state);

            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            curtain.controlId = "CurtainControlBtn2";
            
            room.devices.push(curtain);
            
            //create a thermostat device and give it the id of the target device in 
            //our house simulation
            var thermostat = new ThermostatDeviceNS.ThermostatDevice(data.thermostat.id, 
                            data.thermostat.type, 
                            data.thermostat.state);
            
            //this associated the device controller with the actual device being 
            //controlled.  used to associate button controls with the device
            thermostat.controlId = "tempSettingTxt2";

            room.devices.push(thermostat);

            inializeHouseControlPad("#LightControlBtn2","#CurtainControlBtn2","#tempSettingTxt2", data);
           
        }

        function inializeHouseControlPad(lightbtn, curtainBtn, thermostatTxt, room) {
            //initialize UI controller panel
            $(lightbtn).text("Light   (" + room.light.state + ")");
            if(room.light.state == "on")
               $(lightbtn).removeClass( "lightOff" ).addClass( "lightOn" );

            $(curtainBtn).text("Curtain   (" + room.curtain.state + ")");
            if(room.curtain.state == "open")
                $(curtainBtn).removeClass( "curtainClosed" ).addClass( "curtainOpen" );
           
            $(thermostatTxt).val(room.thermostat.state + " C");
        }

})(window.ControlPadMediator = window.ControlPadMediator || {});