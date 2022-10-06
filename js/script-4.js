$(function () {
	// * Changing the css Property of an Element
	// $('.gallery').css('display', 'none');
	// ? changing property by giving the property name then the value
	// $('.gallery').hide();
	// ? alternative way to hide the element
	// $('.gallery').show();
	// ? Showing a hidden or display none element

	var redBox = $('.red-box');
	console.log(redBox.css('width'));
	// ? getting the width of the red box
	console.log(redBox.width());
	// ? alternative way to get the width of the red box
	// ! the width() method is not the same as the css() method because the css() method returns the width with units (px, em, etc) while the width() method returns the width without units, the width() method is a getter method while the css() method is a setter method
	redBox.css('background-color', '#AA7700');
	// ? changing the background color of the red box
	$('p').css('font-size', '18px');
	// ? changing the font size of all the paragraphs
	$('p').css('font-size', '+=2px');
	// ? increasing the font size of all the paragraphs by 2px
	var properties = $('p').css(['font-size', 'line-height', 'color']);
	// ? getting the font size, line height, and color of all the paragraphs
	console.log(properties);
	console.log(properties['font-size']);
	// ? getting the font size of all the paragraphs
	redBox.css('user-select', 'none');
	// ? disabling the user from selecting the text in the red box
	redBox.css('user-select', function () {
		return 'none';
	});
	////
	// * Adding, removing and changing CSS Classes
	$('a').addClass('fancy-link');
	// ? adding single class to an element
	$('p:first').addClass('large emphasize');
	// ? adding multiple class after space to an element.
});
