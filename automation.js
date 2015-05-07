          var houseController = null;
                  
         /****************************************************************
         * initControllerItemListeners
         *
         * 
         * 
         * 
         *
         ****************************************************************/
          function initControllerItemListeners() {

            $( document ).on( "confirmLightingEvent", confirmLighting);
            $( document ).on( "confirmCurtainEvent", confirmCurtain);
          }


        /****************************************************************
         * confirmCurtain
         *
         * 
         * 
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
         * 
         * 
         * 
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
         * 
         * 
         * 
         *
         ****************************************************************/
          function toggleLight(lightId) {
            var setting = "off";
            if($("#LightControlBtn").is( ".lightOff" )) {
               setting = "on";
            }
            var args = new Array("houseLightIndicator1", setting, lightId);
            $( document ).trigger( "lightingEvent", args );
          }

        /****************************************************************
         * toggleCurtain
         *
         * 
         * 
         * 
         *
         ****************************************************************/
          function toggleCurtain(curtainId) {
              var setting = "closed";
              if($("#CurtainControlBtn").is( ".curtainClosed" )) {
                 setting = "open";
              }
              var args = new Array("houseCurtainIndicator1", setting, curtainId);
              $( document ).trigger( "curtainEvent", args );
           }

        
        /****************************************************************
         * initHouseItemListeners
         *
         * 
         *
         ****************************************************************/
          function initHouseItemListeners() {

              $( document ).on( "lightingEvent", lightingHandler);
              $( document ).on( "curtainEvent", curtainHandler);
              $( document ).on( "temperatureSetEvent", temperatureHandler);
          }

        /****************************************************************
         * initHouseItemListeners
         *
         * 
         *
         ****************************************************************/
          function lightingHandler( event, arg1, arg2, arg3) {
              var lightBtn = $("#" + arg1);
             
              if(arg2 == "on") {      
                lightBtn.removeClass( "lightOff" ).addClass( "lightOn" );
                lightBtn.val("Light (On)");
              }
              else {
                lightBtn.removeClass( "lightOn" ).addClass( "lightOff" );
                lightBtn.val("Light (Off)");
              }

              var data = createJasonData(arg3, "light", arg2);
              updateServer("postLight", data);

              $( document ).trigger( "confirmLightingEvent", [ arg3, arg2 ] );
          }

        /****************************************************************
         * initHouseItemListeners
         *
         * 
         *
         ****************************************************************/
          function curtainHandler( event, arg1, arg2, arg3) {
              var curtainBtn = $("#" + arg1);
             
              if(arg2 == "open") {      
                curtainBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
                curtainBtn.val("Curtains (Open)");
              }
              else {
                curtainBtn.removeClass( "curtainOpen" ).addClass( "curtainClosed" );
                curtainBtn.val("Curtains (Closed)");
              }

              var data = createJasonData("1", "curtain", arg2);
              updateServer("postCurtain", data);

              $( document ).trigger( "confirmCurtainEvent", [ arg3, arg2 ] );
          }

          /****************************************************************
         * initHouseItemListeners
         *
         * 
         *
         ****************************************************************/
          function temperatureHandler( event, arg1 ) {
               $("#Editbox2").val(arg1); 

               var data = createJasonData("1", "thermostat", temperature);
               updateServer("postThermostat", data);
          }

          /****************************************************************
         * initHouseItemListeners
         *
         * 
         *
         ****************************************************************/
          function createJasonData(id, type, state) {
              var data = "{\"id\":\"" + id;
              data += "\",\"type\":\"" + type;
              data += "\",\"state\":\"" + state;
              data += "\"}";

              return data;
          }

          /****************************************************************
         * initHouseItemListeners
         *
         * 
         * 
         * 
         *
         ****************************************************************/

         function intializePanel() {
         	//create controller object with rooms and devices
         	houseController = new DeviceController("A-1", "My House");

         	var room = new Room("1", "Living Room");
         	houseController.rooms.push(room);
         	
         	var light = new Device("1", "light", "off");
         	room.devices.push(light);
         	var curtain = new Device("2", "curtain", "off");
         	room.devices.push(curtain);
         	var thermostat = new Device("3", "thermostat", "79");
         	room.devices.push(thermostat);

			var foundDevice = room.getByType("light");

			//initialize UI panel
     		$("#LightControlBtn").val("Light   (" + light.state + ")");
            $("#CurtainControlBtn").val("Curtain   (" + curtain.state + ")");
            $("#tempSettingTxt").val(thermostat.state + " C");
            temperature = Number(thermostat.state);

            $("#LightControlBtn2").val("Light   (" + light.state + ")");
            $("#CurtainControlBtn2").val("Curtain   (" + curtain.state + ")");
            $("#tempSettingTxt2").val(thermostat.state + " C");
            temperature = Number(thermostat.state);
         }

         function intializePanel_old() {
            jQuery.ajax({
               type: "GET",
               url: "http://localhost:8080/RESTfulExample/rest/json/device/getAllDevices",
               contentType: "application/json; charset=utf-8",
               dataType: "json",
               success: function (data, status, jqXHR) {
                   $("#LightControlBtn").val("Light   (" + data.light.state + ")");
                   $("#CurtainControlBtn").val("Curtain   (" + data.curtain.state + ")");
                   $("#tempSettingTxt").val(data.thermostat.state + " C");
                   temperature = Number(data.thermostat.state);
               },

               error: function (jqXHR, status) {
                   // error handler
               }
            });
         }

        
      
        /****************************************************************
         * initHouseItemListeners
         *
         * 
         * 
         * 
         *
         ****************************************************************/
          function updateServer(command, data) {

              var destinationUrl = "http://localhost:8080/RESTfulExample/rest/json/device/";

              destinationUrl += command;

              $.ajax({
                  url : destinationUrl,
                  type: "POST",
                  data : data,
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  success: function(data, textStatus, jqXHR)
                  {
                      //data - response from server
                  },
                  error: function (jqXHR, textStatus, errorThrown)
                  {
               
                  }
              });
          }

        
 
		

        /****************************************************************
         * initHouseItemListeners
         *
         * 
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
