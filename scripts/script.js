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
});


$(window).scroll(function() {

    //After scrolling 100px from the top...
    if ( $(window).scrollTop() >= 300 ) {
        $('.dTitle').css('color', '#dbd0d0');
        

    //Otherwise remove inline styles and thereby revert to original stying
    } else {
        $('.dTitle').attr('style', '');

    }
});









