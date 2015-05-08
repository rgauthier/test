
var ww = document.body.clientWidth;

$(document).ready(function() {
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

	adjustMenu();

})

var adjustMenu = function() {
			
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});

		$('#wb_TextMenu2 a').click(function(e) {
		    if(!e.currentTarget.className.length){
			$(".nav").hide();
			var url = $(this).attr('href') + ' #page-wrap';
			$('#jqFrame').load(url);
			e.preventDefault();
	 	    }
		});
		$("#gillianMenu").css("margin-left","0px");

}

