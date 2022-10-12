$(function () {
	// * The Focus and Blur Events
	// var inputFields = $('input:text, input:password, textarea');
	// inputFields.focus(function () {
	// 	$(this).css('box-shadow', '0 0 5px #666');
	// });
	// inputFields.blur(function () {
	// 	$(this).css('box-shadow', 'none');
	// });
	// * 24th Challenge
	// $('#name').blur(function () {
	// 	var name = $(this).val();
	// 	console.log(name);
	// 	if (name.length < 4) {
	// 		$(this).css('box-shadow', '0 0 10px #811');
	// 	} else {
	// 		$(this).css('box-shadow', '0 0 5px #181');
	// 	}
	// });
	////
	// * The Change Event
	// $('#checkbox').change(function () {
	// 	var isChecked = $(this).is(':checked');  // or .prop('checked')
	// 	if (isChecked) {
	// 		$(this).css('box-shadow', '0 0 5px #181');
	// 	} else {
	// 		$(this).css('box-shadow', '0 0 5px #811');
	// 	}
	// });
	// * 25th Challenge
	// $('#selection').change(function () {
	// 	var selectedOption = $(this).find(':selected').text();
	// 	console.log(selectedOption);
	// });
	////
	// * Handling the submit event
	// $('#form').submit(function (event) {
	// 	var textarea = $('#address');
	// 	if (textarea.val().trim() == '') {
	// 		textarea.css('box-shadow', '0 0 10px #811');
	// 		event.preventDefault();
	// 	}
	// });
	// * mini project
	$('#form').submit(function (event) {
		var name = $('#name');
		var password = $('#password');
		var address = $('#address');
		var checked = $('#checkbox');
		validateNameField(name, event);
		validatePasswordField(password, event);
		validateAddressField(address, event);
		validateCheckboxField(checked, event);
	});
});

function validateNameField(name, event) {
	if (name.val().trim() == '' || name.val().length < 4) {
		$('#name-feedback').text('Name must be at least 4 characters long');
		name.css('box-shadow', '0 0 5px #811');
		event.preventDefault();
	} else {
		$('#name-feedback').text('');
		name.css('box-shadow', '0 0 5px #181');
	}
}

function validatePasswordField(password, event) {
	if (password.val().trim() == '' || password.val().length < 6) {
		$('#password-feedback').text(
			'Password must be at least 6 characters long'
		);
		password.css('box-shadow', '0 0 5px #811');
		event.preventDefault();
	} else {
		$('#password-feedback').text('');
		password.css('box-shadow', '0 0 5px #181');
	}
}

function validateAddressField(address, event) {
	if (address.val().trim() == '') {
		$('#address-feedback').text('Address cannot be empty');
		address.css('box-shadow', '0 0 5px #811');
		event.preventDefault();
	} else {
		$('#address-feedback').text('');
		address.css('box-shadow', '0 0 5px #181');
	}
}

function validateCheckboxField(checked, event) {
	if (!checked.is(':checked')) {
		$('#checkbox-feedback').text(
			'You must agree to the terms and conditions'
		);
		checked.css('box-shadow', '0 0 5px #811');
		event.preventDefault();
	} else {
		checked.css('box-shadow', '0 0 5px #181');
		$('#checkbox-feedback').text('');
	}
}
