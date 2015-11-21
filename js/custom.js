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
    $('.mapshowcase').hide();
    $('.postershowcase').hide();
    $('.jarshowcase').hide();


    //Click to slide down bookla
    $('.bookla').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	$('.booklashowcase').slideDown('slow');
    });//end on click

    //Click to slide down calender
    $('.calender').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	$('.calendershowcase').slideDown('slow');
    });//end on click

    //Click to slide down repack
    $('.repack').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	$('.repackshowcase').slideDown('slow');
    });//end on click

    //Click to slide down winelist
    $('.winelist').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
    	$('.winelistshowcase').slideDown('slow');
    });//end on click

    //Click to slide down money
    $('.money').click(function(evt){
    	evt.preventDefault();
    	$('.theshowcase').fadeOut('fast');
        $('.moneyshowcase').slideDown('slow');
    });//end on click

    //Click to slide down money
    $('.map').click(function(evt){
        evt.preventDefault();
        $('.theshowcase').fadeOut('fast');
        $('.mapshowcase').slideDown('slow');
    });//end on click

    $('.poster').click(function(evt){
        evt.preventDefault();
        $('.theshowcase').fadeOut('fast');
        $('.postershowcase').slideDown('slow');
    });//end on click

    $('.jar').click(function(evt){
        evt.preventDefault();
        $('.theshowcase').fadeOut('fast');
        $('.jarshowcase').slideDown('slow');
    });//end on click

 }); //end ready
