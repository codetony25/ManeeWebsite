 $(function(){

 	//Toggle menu
 	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }); //end of click

 	//Jump to top after click on link
 	$('.main-content a').click(function(){
 		window.scrollTo(0, 0);
 	});

 	//Fixed showcasedesc to disappear on scroll
 	

    //Hide all showcases
    $('.booklashowcase').hide();
    $('.calendershowcase').hide();
    $('.moneyshowcase').hide();
    $('.repackshowcase').hide();
    $('.winelistshowcase').hide();

    //Click to slide down bookla
    $('.bookla').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.booklashowcase').is(':visible')) {
    		$('.booklashowcase').slideUp('slow');
    	} else {
    		$('.booklashowcase').slideDown('slow');
    	}
    });//end on click

    //Click to slide down calender
    $('.calender').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.calendershowcase').is(':visible')) {
    		$('.calendershowcase').slideUp('slow');
    	} else {
    		$('.calendershowcase').slideDown('slow');
    	}
    });

    //Click to slide down repack
    $('.repack').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.repackshowcase').is(':visible')) {
    		$('.repackshowcase').slideUp('slow');
    	} else {
    		$('.repackshowcase').slideDown('slow');
    	}
    });

    //Click to slide down winelist
    $('.winelist').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.winelistshowcase').is(':visible')) {
    		$('.winelistshowcase').slideUp('slow');
    	} else {
    		$('.winelistshowcase').slideDown('slow');
    	}
    });

    //Click to slide down money
    $('.money').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.moneyshowcase').is(':visible')) {
    		$('.moneyshowcase').slideUp('slow');
    	} else {
    		$('.moneyshowcase').slideDown('slow');
    	}
    });
 }); 
