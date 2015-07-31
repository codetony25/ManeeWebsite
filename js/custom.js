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

 	//Fade in images one by one
 	$('.main-content img').each(function(i) {
        $(this).delay((i++) * 500).fadeTo(1000, 1);
        $('.main-content h2').delay((i++) * 500).fadeTo(1000, 1);
    });

    //Hover to lighter opacity on portfolio contents
    $('.main-content img').hover(
        function(){
            $(this).css('opacity', 0.7);
        },
        function(){
            $(this).css('opacity', 1);
        }
        );//end hover

    //Open portfolio in new window
    $('a[href$=".pdf"').attr('target', '_blank');

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
    });//end on click

    //Click to slide down repack
    $('.repack').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.repackshowcase').is(':visible')) {
    		$('.repackshowcase').slideUp('slow');
    	} else {
    		$('.repackshowcase').slideDown('slow');
    	}
    });//end on click

    //Click to slide down winelist
    $('.winelist').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.winelistshowcase').is(':visible')) {
    		$('.winelistshowcase').slideUp('slow');
    	} else {
    		$('.winelistshowcase').slideDown('slow');
    	}
    });//end on click

    //Click to slide down money
    $('.money').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	if($('.moneyshowcase').is(':visible')) {
    		$('.moneyshowcase').slideUp('slow');
    	} else {
    		$('.moneyshowcase').slideDown('slow');
    	}
    });//end on click
 }); 
