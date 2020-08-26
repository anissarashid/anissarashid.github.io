$(document).ready(function() {
	var black = false;
	var purple = false;
	var white = true;
	$('.center-con').click(function() {
		if (white & !black & !purple) {
			$('body').css('background', '#323232');
			$('p').css('color', '#f46b42');
			$('.side, .contact, .contactt, .title_thumb, #newtitle, .dTitle, .boldwrd').css('color', '#f46b42');
			$('.sidebar_item, .description_txt, .description_txt_1').css('color', '#f7f7f7');
			black = true;
			white = false;
			purple = false;
		} 
		else if (black & !white & !purple) {
			$('body').css('background', '#b0acc1');
			$('p').css('color','#fce8c7');
			$('.side, .contact, .contactt, .title_thumb, #newtitle, .dTitle, .boldwrd').css('color','#fce8c7');
			$('.sidebar_item, .description_txt, .description_txt_1').css('color', '#f7f7f7');
			black = false;
			purple = true;
			white = false;
		}

		else {
			$('body').css('background', '#f7f6ed');
			$('p').css('color','black');
			$('.side, .contact, .contactt, .title_thumb, .dTitle, .boldwrd').css('color','black');
			$('.sidebar_item, .description_txt, .description_txt_1').css('color', 'black');
			$('.txtover, #newtitle').css('color','#b51414');
			black = false;
			purple = false;
			white = true;
		}
	});

	var col1hov = false;

	$('.side').hover(function() {
		$('.col2').css('opacity', '1');
		col1hov = true;
	}, function() {
		$('.col2').css('opacity','1')
	
	});


	$('.col2').hover(function() {
		if (col1hov) {
			$('.col2').css('opacity', '1');
			col1hov = false;
		}
		else {
			$('.col2').css('opacity','0')
		}
	}, function() {
		$('.col2').css('opacity','0')
	});


	});




$(window).scroll(function() {

    if ( $(window).scrollTop() >= 20 ) {
        $('.dTitle').css('color', '#dbd0d0').fadeIn('slow');

        

    
    } else {
        $('.dTitle').attr('style', '');

    }
});

AOS.init({
    	offset: 30, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        
    });









