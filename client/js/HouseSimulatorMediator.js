;(function ( HouseSimulatoMediator, undefined ) {
  /****************************************************************
   * initHouseItemListeners
   *
   * Initializes the event listeners for the house simulation items
   * like lights, curtains and thermostats
   *
   ****************************************************************/
    HouseSimulatoMediator.register = function() {

        $( document ).on( "lightingEvent", lightingHandler);
        $( document ).on( "curtainEvent", curtainHandler);
        $( document ).on( "temperatureSetEvent", temperatureHandler);
        $( document ).on( "GetAllDevicesReturnedEvent", getAllDevicesReturned);
        $( document ).on( "DeviceOffEvent", turnOffPanel);

    }

  /****************************************************************
   * lightingHandler
   *
   * Lighting event listener.  Will turn the appropriate light 
   * on or off.  The appropriate light is determined by targetDeviceId
   *
   * a confirmation event is triggered for the requesting device.
   *
   ****************************************************************/
    function lightingHandler( event, device, requestWidgetId) {
        var lightBtn = $("#" + device.id);
       
        if(device.state == "on") {      
          lightBtn.removeClass( "lightOff" ).addClass( "lightOn" );
          lightBtn.val("Light (On)");
        }
        else {
          lightBtn.removeClass( "lightOn" ).addClass( "lightOff" );
          lightBtn.val("Light (Off)");
        }

       var data = JSON.stringify(device)
       updateDevice(data);

        $( document ).trigger( "confirmLightingEvent", [ requestWidgetId, device.state ] );
    }

  /****************************************************************
   * curtainHandler
   *
   * Curtain event listener.  Will open or close the appropriate 
   * curtain in the UI house simulator.  The appropriate light is 
   * determined by targetDeviceId.
   *
   * a confirmation event is triggered for the requesting device.
   *
   ****************************************************************/
    function curtainHandler( event, device, requestWidgetId) {
        var curtainBtn = $("#" + device.id);
       
        if(device.state == "open") {      
          curtainBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
          curtainBtn.val("Curtains (Open)");
          device.state = "open";
        }
        else {
          curtainBtn.removeClass( "curtainOpen" ).addClass( "curtainClosed" );
          curtainBtn.val("Curtains (Closed)");
          device.state = "closed";
        }

        //udpate the server with data set by remote control
        var data = JSON.stringify(device)
        updateDevice(data);

        $( document ).trigger( "confirmCurtainEvent", [ requestWidgetId, device.state ] );
    }

   
   /****************************************************************
   * temperatureHandler
   *
   * Curtain event listener.  Will open or close the appropriate 
   * curtain in the UI house simulator.  The appropriate light is 
   * determined by targetDeviceId.
   *
   * a confirmation event is triggered for the requesting device. 
   *
   ****************************************************************/
    function temperatureHandler( event, device, controlId ) {
          var thermostat = $("#" + device.id);
         thermostat.val(device.state); 

         //udpate the server with data set by remote control
         var data = JSON.stringify(device)
         updateDevice(data);

         $( document ).trigger( "confirmTemperatureEvent", [ controlId, device.state ] );
    }

    /****************************************************************
   * updateDevice
   *
   * Calls the DeviceAutomationService to update the device on the server
   * 
   ****************************************************************/
    function updateDevice(data) {

        DeviceAutomationService.updateDevice(ApplicationInitializer.destinationUrl, data);
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
            initLivingRoom(parsed.allRooms[0]);
            initKitchen(parsed.allRooms[1]);
        }

        //todo - add error handling to UI here
    }

    /****************************************************************
    * turnOffPanel
    *
    * Event listener for when the remote device is turned off.
    * When event is received, the house simulator will turn off
    * and will toggle to off
    *
    ****************************************************************/
    function turnOffPanel(event) {
        if ( $("#houseLightIndicator1").is( ".lightOn" ) ) {
           $("#houseLightIndicator1").removeClass( "lightOn" ).addClass( "lightOff" );
           $("#houseLightIndicator1").val("Light (Off)");
         }

        if ( $("#houseCurtainIndicator1").is( ".curtainOpen" ) ) {
           $("#houseCurtainIndicator1").removeClass( "curtainOpen" ).addClass( "curtainClosed" );
           $("#houseCurtainIndicator1").val("Curtains (Closed)");
         }

        if ( $("#houseLightIndicator2").is( ".lightOn" ) ) {
           $("#houseLightIndicator2").removeClass( "lightOn" ).addClass( "lightOff" );
           $("#houseLightIndicator2").val("Light (Off)");
         }

        if ( $("#houseCurtainIndicator2").is( ".curtainOpen" ) ) {
           $("#houseCurtainIndicator2").removeClass( "curtainOpen" ).addClass( "curtainClosed" );
           $("#houseCurtainIndicator2").val("Curtains (Closed)");
         }

         $("#Thermostat1").val("");
         $("#Thermostat2").val("");
    }

    /****************************************************************
    * initLivingRoom
    *
    * Initialization method for living room controls
    *
    ****************************************************************/
    function initLivingRoom(data) {
        if(data.light.state == "on") {
            $("#houseLightIndicator1").val("Light (On)");
            $("#houseLightIndicator1").removeClass( "lightOff" ).addClass( "lightOn" );
        } else {
             $("#houseLightIndicator1").val("Light (Off)");
        }

        if(data.curtain.state == "open") {
            $("#houseCurtainIndicator1").removeClass( "curtainClosed" ).addClass( "curtainOpen" );
            $("#houseCurtainIndicator1").val("Curtains (Open)");
        } else {
             $("#houseCurtainIndicator1").val("Curtains (Closed)");
        }

        $("#Thermostat1").val(data.thermostat.state);
    }

    /****************************************************************
    * initKitchen
    *
    * Initialization method for kitchen controls
    *
    ****************************************************************/
    function initKitchen(data) {
        if(data.light.state == "on") {
            $("#houseLightIndicator2").val("Light (On)");
            $("#houseLightIndicator2").removeClass( "lightOff" ).addClass( "lightOn" );
        } else {
            $("#houseLightIndicator2").val("Light (Off)");
        }

        if(data.curtain.state == "open") {
            $("#houseCurtainIndicator2").removeClass( "curtainClosed" ).addClass( "curtainOpen" );
            $("#houseCurtainIndicator2").val("Curtains (Open)");
        } else {
             $("#houseCurtainIndicator2").val("Curtains (Closed)");
        }

        $("#Thermostat2").val(data.thermostat.state);
    }

})(window.HouseSimulatoMediator = window.HouseSimulatoMediator || {});