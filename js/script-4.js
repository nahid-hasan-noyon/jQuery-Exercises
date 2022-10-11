$(function () {
	// * Changing the css Property of an Element
	// $('.gallery').css('display', 'none');
	// ? changing property by giving the property name then the value
	// $('.gallery').hide();
	// ? alternative way to hide the element
	// $('.gallery').show();
	// ? Showing a hidden or display none element
	// var redBox = $('.red-box');
	// console.log(redBox.css('width'));
	// ? getting the width of the red box
	// console.log(redBox.width());
	// ? alternative way to get the width of the red box
	// ! the width() method is not the same as the css() method because the css() method returns the width with units (px, em, etc) while the width() method returns the width without units, the width() method is a getter method while the css() method is a setter method
	// redBox.css('background-color', '#AA7700');
	// ? changing the background color of the red box
	// $('p').css('font-size', '18px');
	// ? changing the font size of all the paragraphs
	// $('p').css('font-size', '+=2px');
	// ? increasing the font size of all the paragraphs by 2px
	// var properties = $('p').css(['font-size', 'line-height', 'color']);
	// ? getting the font size, line height, and color of all the paragraphs
	// console.log(properties);
	// console.log(properties['font-size']);
	// ? getting the font size of all the paragraphs
	// redBox.css('user-select', 'none');
	// ? disabling the user from selecting the text in the red box
	// redBox.css('user-select', function () {
	// 	return 'none';
	// });
	////
	// * Adding, removing and changing CSS Classes
	// $('a').addClass('fancy-link');
	// ? adding single class to an element
	// $('p:first').addClass('large emphasize');
	// ? adding multiple class after space to an element.
	// $('li li').addClass(function (index) {
	// 	$(this).addClass('item-' + index);
	// 	//// see the class names on console log
	// });
	// $('div').addClass(function (index, currentClass) {
	// 	if (currentClass === 'addClass') {
	// 		return 'red-box';
	// 	}
	// });
	// ? changing the class name
	// $('div').removeClass('red-box');
	// ? removing the class name
	// $('.red-box').removeClass('red-box').addClass('blue-box');
	// ? removing and adding new class at the same time.
	// * 14th Challenge
	// $('.addClass').removeClass('addClass').addClass('green-box');
	////
	// * Changing the data of an Element
	var gallery = $('.gallery');
	var images = [
		'images/laptop-mobile_small.jpg',
		'images/laptop-on-table_small.jpg',
		'images/people-office-group-team_small.jpg',
	];
	gallery.data('availableImages', images); // ? adding array of data to the gallery element
	console.log(gallery.data('availableImages')); // ? viewing the data from the gallery element
	gallery.data('name', 'The Awesome Gallery'); // ? adding data to the gallery element
	console.log(gallery.data('name'));
	console.log(gallery.data()); // ? viewing all the data from the gallery element
	gallery.removeData('name'); // ? removing data from the gallery element
	console.log(gallery.data('name'));
	// ? viewing the data from the gallery element
	// output will be undefined because the data has been removed
	var firstPara = $('p:first');
	console.log(firstPara.data('para_data'));
	// ? getting the data from the first paragraph
	// ! name of the data attribute must be in lowercase.
});
