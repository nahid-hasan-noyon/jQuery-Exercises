$(function () {
	// * The Focus and Blur Events
	var inputFields = $('input:text, input:password, textarea');
	inputFields.focus(function () {
		$(this).css('box-shadow', '0 0 5px #666');
	});
	inputFields.blur(function () {
		$(this).css('box-shadow', 'none');
	});
	// * 24th Challenge
	$('#name').blur(function () {
		var name = $(this).val();
		console.log(name);
		if (name.length < 4) {
			$(this).css('box-shadow', '0 0 10px #811');
		} else {
			$(this).css('box-shadow', '0 0 5px #181');
		}
	});
});
