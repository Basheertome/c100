$(document).ready(function() {
	$('.menu').click(function(event) {
		event.preventDefault();
		$('.masthead').toggleClass('active');
	});
});
