$(function () {
	// * Adding new element to the DOM
	// $('ul ul').append('<li>This is append method</li>');
	// ? adding an li inside the end of an ul which inside of another ul
	// $('<li>This is appendTo method</li>').appendTo('ul ul');
	// ? alternative of append
	$('ul ul').prepend('<li>This is prepend method</li>');
	// ? adding an li inside the first of an ul which is inside of another ul
	$('<li>This is prependTo method</li>').prependTo('ul ul');
});
