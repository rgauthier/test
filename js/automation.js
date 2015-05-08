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
                   curtainCtrlBtn.val("Curtains (Closed)");
               } else {
                   curtainCtrlBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
                   curtainCtrlBtn.val("Curtains (Open)");
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
               lightCtrlBtn.val("Light (Off)");
           } else {
               lightCtrlBtn.removeClass( "lightOff" ).addClass( "lightOn" );
               lightCtrlBtn.val("Light (On)");
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
	          	
	            if($("#LightControlBtn").is( ".lightOff" )) {
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
          function toggleCurtain(curtainId) {
              var room = houseController.getRoomById(roomId)

          	if(room != null) {
          		var device = room.getDeviceByControlId(lightId);

              	if($("#CurtainControlBtn").is( ".curtainClosed" )) {
                 	device.closeCurtain(lightId);
              	} else {
              		device.openCurtain(lightId);
              	}
            }
              return true;
          }

        
        function increaseTemperature() {
            temperature++;
            $("#tempSettingTxt").val(temperature + " C");
            setTemperature();
         }

         function decreaseTemperature() {
            temperature--;
            $("#tempSettingTxt").val(temperature + " C");
            setTemperature();
         }

         function setTemperature() {
            $( document ).trigger( "temperatureSetEvent", temperature);
         }

        
          /****************************************************************
         * intializePanel
         *
         * 
         * 
         * 
         *
         ****************************************************************/

         function intializePanel() {
         	//create controller object with rooms and devices
         	houseController = new DeviceController("A-1", "My House");

         	//create our first room.  In this case the living room  
         	var room = new Room("livingRoom", "Living Room");
         	houseController.rooms.push(room);
         	
         	//create a light device and give it the id of the target device in 
         	//our house simulation
            var light = new LightDevice("houseLightIndicator1", "light", "off");
         	
         	//this associated the device controller with the actual device being 
         	//controlled.  used to associate button controls with the device
         	light.controlId ="LightControlBtn";
         	room.devices.push(light);
         	
         	//create a curtain device and give it the id of the target device in 
         	//our house simulation
         	var curtain = new CurtainDevice("houseCurtainIndicator1", "curtain", "off");

         	//this associated the device controller with the actual device being 
         	//controlled.  used to associate button controls with the device
         	curtain.controlId = "CurtainControlBtn";
         	room.devices.push(curtain);
         	
         	//create a thermostat device and give it the id of the target device in 
         	//our house simulation
         	var thermostat = new ThermostatDevice("Thermostat1", "thermostat", "off");
         	//this associated the device controller with the actual device being 
         	//controlled.  used to associate button controls with the device
         	thermostat.controlId = "tempSettingTxt";
         	//seet an initial temperature.
         	thermostat.temperature = "29";
         	room.devices.push(thermostat);

			
			//initialize UI controller panel
     		$("#LightControlBtn").val("Light   (" + light.state + ")");
            $("#CurtainControlBtn").val("Curtain   (" + curtain.state + ")");
            $("#tempSettingTxt").val(thermostat.temperature + " C");
            temperature = Number(thermostat.temperature);

            $("#LightControlBtn2").val("Light   (" + light.state + ")");
            $("#CurtainControlBtn2").val("Curtain   (" + curtain.state + ")");
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