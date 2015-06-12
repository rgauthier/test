 $( document ).ready(function() {
    
    var houseController = null;

    HouseSimulatoMediator.register();
    ControlPadMediator.register();

	ApplicationInitializer.adjustMenu();

 });


/****************************************************************
 * ApplicationInitializer namespace
 *
 * Initialization function for the control pad UI
 *
 ****************************************************************/
;(function ( ApplicationInitializer, undefined ) {
    
    //URL for RESTful webservice
    ApplicationInitializer.destinationUrl = "http://localhost:8080/HouseAutomationService/rest/json/device/";

    /****************************************************************
	* adjustMenu
	*
	* Control Pad UI initialization code
	*
	****************************************************************/
    ApplicationInitializer.adjustMenu = function() {

    	$(".nav li a").each(function() {
			if ($(this).next().length > 0) {
				$(this).addClass("parent");
			};
		})

		$(".toggleMenu").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(".nav").toggle();
		});
			
		$(".nav li").unbind('mouseenter mouseleave');
		
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
		   if($("#powerBtn").hasClass("powerOn")) {	
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		   }
		});
		//}

		$('#wb_TextMenu2 a').click(function(e) {
		    if(!e.currentTarget.className.length){
			$(".nav").hide();
			var url = $(this).attr('href') + ' #page-wrap';
			$('#jqFrame').load(url);
			e.preventDefault();
	 	    }
		});
	}

    // check to evaluate whether 'namespace' exists in the
    // global namespace - if not, assign window.namespace an
    // object literal
})(window.ApplicationInitializer = window.ApplicationInitializer || {});
