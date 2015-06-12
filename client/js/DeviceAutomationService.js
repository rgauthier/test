/****************************************************************
 * DeviceAutomationService namespace
 *
 * service that communicates with REST webservices
 *
 ****************************************************************/
;(function ( DeviceAutomationService, undefined ) {

		 /****************************************************************
		 * getAllDevices
		 *
		 * returns a list of all devices to be automated
		 *
		 * return a list of all devices to be automated or null.
		 *
		 ****************************************************************/
         DeviceAutomationService.getAllDevices = function(destinationUrl) {
 
 			try {
	            jQuery.ajax({
	               type: "GET",
	               url: destinationUrl + "getAllDevices",
	               contentType: "application/json; charset=utf-8",
	               dataType: "json",
	               success: function (data, status, jqXHR) {
	                   var args = new Array(true, data, status);
	                	$( document ).trigger( "GetAllDevicesReturnedEvent", args );
	               },

	               error: function (jqXHR, status) {
	                   var args = new Array(false, data, status);
	                   $( document ).trigger( "GetAllDevicesReturnedEvent", args );
	               }
	            });
	        } catch(err) {
	        	var args = new Array(false, null, err.message);
	            $( document ).trigger( "GetAllDevicesReturnedEvent", args );
	        }


         }

		 /****************************************************************
		 * updateDevice
		 *
		 * update the passed in device  on the server
		 *
		 * returns true of successful, false otherwise
		 *
		 ****************************************************************/
		DeviceAutomationService.updateDevice = function(destinationUrl, device) {

			try {
			      $.ajax({
			          url : destinationUrl + "updateDevice",
			          type: "POST",
			          data : device,
			          contentType: "application/json; charset=utf-8",
			          success: function(data, textStatus, jqXHR)
			          {
			                var args = new Array(true, data, textStatus);
	                		$( document ).trigger( "UpdateDeviceReturnedEvent", args );
			          },
			          error: function (jqXHR, textStatus, errorThrown)
			          {
			       		  var args = new Array(false, textStatus, errorThrown);
	                	$( document ).trigger( "UpdateDeviceReturnedEvent", args );
			          }
			      });
			}catch(err) {
	        	var args = new Array(false, null, err.message);
	            $( document ).trigger( "UpdateDeviceReturnedEvent", args );
	        }
		  }

	 // check to evaluate whether 'namespace' exists in the
    // global namespace - if not, assign window.namespace an
    // object literal
})(window.DeviceAutomationService = window.DeviceAutomationService || {});