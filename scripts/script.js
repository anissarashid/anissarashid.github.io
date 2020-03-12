$(document).ready(function() {
	var black = false;
	var purple = false;
	var white = true;
	$('.center-con').click(function() {
		if (white & !black & !purple) {
			$('body').css('background', '#323232');
			$('p').css('color', '#f46b42');
			$('.name').css('color', '#f46b42');
			$('.contact, .title_thumb').css('color', '#f46b42');
			$('.sidebar_item, .description_txt').css('color', '#f7f7f7');
			black = true;
			white = false;
			purple = false;
		} 
		else if (black & !white & !purple) {
			$('body').css('background', '#b0acc1');
			$('p').css('color','#fce8c7');
			$('.name').css('color','#fce8c7');
			$('.contact').css('color','#fce8c7');
			$('.title_thumb').css('color','#fce8c7');
			$('sidebar_item, .description_txt').css('color', '#f7f7f7');
			black = false;
			purple = true;
			white = false;
		}

		else {
			$('body').css('background', '#F5F5F5');
			$('p, .name, .contact, .title_thumb').css('color','black');
			$('.sidebar_item, .description_txt').css('color', 'black');
			black = false;
			purple = false;
			white = true;
		}
	});
});