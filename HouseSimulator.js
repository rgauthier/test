
/****************************************************************
 * initHouseItemListeners
 *
 * Initializes the event listeners for the house simulation items
 * like lights, curtains and thermostats
 *
 ****************************************************************/
  function initHouseItemListeners() {

      $( document ).on( "lightingEvent", lightingHandler);
      $( document ).on( "curtainEvent", curtainHandler);
      $( document ).on( "temperatureSetEvent", temperatureHandler);
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
  function lightingHandler( event, targetDeviceId, state, requestWidgetId) {
      var lightBtn = $("#" + targetDeviceId);
     
      if(state == "on") {      
        lightBtn.removeClass( "lightOff" ).addClass( "lightOn" );
        lightBtn.val("Light (On)");
      }
      else {
        lightBtn.removeClass( "lightOn" ).addClass( "lightOff" );
        lightBtn.val("Light (Off)");
      }

      //var data = createJasonData(requestWidgetId, "light", state);
     // updateServer("postLight", data);

      $( document ).trigger( "confirmLightingEvent", [ requestWidgetId, state ] );
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
  function curtainHandler( event, targetDeviceId, state, requestWidgetId) {
      var curtainBtn = $("#" + targetDeviceId);
     
      if(state == "open") {      
        curtainBtn.removeClass( "curtainClosed" ).addClass( "curtainOpen" );
        curtainBtn.val("Curtains (Open)");
      }
      else {
        curtainBtn.removeClass( "curtainOpen" ).addClass( "curtainClosed" );
        curtainBtn.val("Curtains (Closed)");
      }

     // var data = createJasonData("1", "curtain", state);
     // updateServer("postCurtain", data);

      $( document ).trigger( "confirmCurtainEvent", [ requestWidgetId, state ] );
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
  function temperatureHandler( event, targetDeviceId, temperature ) {
        var thermostat = $("#" + targetDeviceId);
       thermostat.val(temperature); 

       //var data = createJasonData("1", "thermostat", temperature);
       //updateServer("postThermostat", data);

       $( document ).trigger( "confirmTemperatureEvent", [ requestWidgetId, temperature ] );
  }