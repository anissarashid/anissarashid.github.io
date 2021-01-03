$(document).ready(function() {
	var black = false;
	var purple = false;
	var white = true;
	$('.center-con').click(function() {
		if (white & !black & !purple) {
			$('body, .bottommenu, .bottommenu1, #bothmenu').css('background', '#323232');
			$('p').css('color', '#f46b42');
			$('.sidebar_item, .side, .contact, .contactt, .title_thumb, #newtitle, .dTitle, .boldwrd, .dTitle').css('color', '#f46b42');
			$('.description_txt, .description_txt_1').css('color', '#f7f7f7');
			black = true;
			white = false;
			purple = false;
		} 
		else if (black & !white & !purple) {
			$('body, .bottommenu, .bottommenu1, #bothmenu').css('background', '#b0acc1');
			$('p').css('color','#fce8c7');
			$('.sidebar_item, .side, .contact, .contactt, .title_thumb, #newtitle, .dTitle, .boldwrd').css('color','#fce8c7');
			$('.description_txt, .description_txt_1').css('color', '#f7f7f7');
			black = false;
			purple = true;
			white = false;
		}

		else {
			$('body, .bottommenu, .bottommenu1, #bothmenu').css('background', '#fafafa');
			$('p').css('color','black');
			$('.sidebar_item, .side, .contact, .contactt, .title_thumb, .dTitle, .boldwrd').css('color','#1200db');
			$('.description_txt, .description_txt_1').css('color', 'black');
			$('.txtover, #newtitle').css('color','#1200db');
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


	var workcol = false;
	$('#work.contact').hover(function() {
		$('.bottom')
	} )

	var holdWidth = $(window).width();
    var holdHeight = $(window).height();
    var holdAverageSize = (holdWidth + holdHeight) / 2;
    
    $(window).on('resize', function () {
    	var currWidth = $(window).width();
    	var el = document.getElementById('logo');
		var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
		var fontSize = parseFloat(style); 
	
        newAverageSize = ($(window).width() + $(window).height()) / 2;
        newPercentage = ((newAverageSize / holdAverageSize)*1.5 * 100) + "%";
        if (currWidth > 1250) {
        	newPercentage = 160 + "%";
        } 
        
        $("#logo").css("font-size", newPercentage)
       
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


$('.name').hover(function() {
        $('#logo').css('opacity', '0');
        $('#logo2').css('opacity', '1');
    }, function() {
        $('#logo2').css('opacity', '0');
        $('#logo').css('opacity', '1');
});

$(document).ready(function () {
    var holdWidth = $(window).width();
    var holdHeight = $(window).height();
    var holdAverageSize = (holdWidth + holdHeight) / 2;
    $(window).on('resize', function () {
        newAverageSize = ($(window).width() + $(window).height()) / 2;
        newPercentage = ((newAverageSize / holdAverageSize) * 100) + "%";
        $("#logo").css("font-size", newPercentage)
        console.log(newPercentage);
    });
});








