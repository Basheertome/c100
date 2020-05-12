$(document).ready(function() {
	$('.menu').click(function(event) {
		$('.masthead').toggleClass('active');
	});

	$('.masthead .search').click(function(event) {
		$('#search').focus();
	});

	$('.footer .search').click(function(event) {
		if (!$('.masthead').hasClass('active')) {
			$('.masthead').toggleClass('active');
		}
		$('#search').focus();
	});

	$.inlineFootnotes();
});
