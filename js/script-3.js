$(function () {
	// * Adding new element to the DOM
	$('ul ul').append('<li>This is append method</li>');
	// ? adding an li inside of an ul which inside of another ul
	$('<li>This is append method</li>').appendTo('ul ul');
	// ? alternative of append
});
