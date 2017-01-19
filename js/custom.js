$(window).load(function(){
	$('#loader').delay( 500 ).fadeIn(500).hide(0);
	// $('#left').delay( 500 ).toggle( "slide", { direction: "left" }, 600 ).show(0);
	// $('#right1').delay( 1000 ).toggle( "slide", { direction: "top" }, 600 ).fadeIn(500).show(0);
	// $('#right2').delay( 1500 ).toggle( "slide", { direction: "top" }, 600 ).fadeIn(500).show(0);
	// $('#right3').delay( 2000 ).toggle( "slide", { direction: "top" }, 600 ).fadeIn(500).show(0);
	// $('#foot').delay( 2500 ).toggle( "slide", { direction: "top" }, 600 ).fadeIn(500).show(0);
	
	$('#left').delay( 500 ).show("slide", { direction: "left" }, 600);
	$('#right1').delay( 1000 ).show("slide", { direction: "up" }, 600);
	$('#right2').delay( 1500 ).show("slide", { direction: "top" }, 600);
	$('#right3').delay( 2000 ).show("slide", { direction: "left" }, 600);
	$('#foot').delay( 2500 ).show("slide", { direction: "down" }, 600);
});
