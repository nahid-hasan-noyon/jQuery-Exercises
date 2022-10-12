$(function () {
	// * The Focus and Blur Events
	var inputFields = $('input:text, input:password, textarea');
	inputFields.focus(function () {
		$(this).css('box-shadow', '0 0 5px #666');
	});
	inputFields.blur(function () {
		$(this).css('box-shadow', 'none');
	});
});
