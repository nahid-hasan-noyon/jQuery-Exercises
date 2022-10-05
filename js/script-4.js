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
	// ! the width() method is not the same as the css() method because the css() method returns the width with units (px, em, etc)
});
