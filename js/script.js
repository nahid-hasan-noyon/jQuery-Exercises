$(function () {
	// jQuery goes here...
	// Uncomment this line to fade out the red box on page load
	// * learning First
	// $('.red-box').fadeOut(2000);
	// * First Challenge
	// $('.green-box').fadeOut(2000);
	// $('.red-box').fadeIn(2000);
	// * Second Challenge
	// $('.red-box').fadeTo(2000, 0.5);
	// * Third Challenge
	// $('.red-box').fadeTo(2000, 0.2);
	// $('.green-box').fadeTo(2000, 0.5);
	// $('.blue-box').fadeTo(2000, 0.8);
	// * fadeToggle
	// $('.red-box').fadeToggle();
	// $('.red-box').fadeToggle(1000);
	// $('.red-box').fadeToggle();
	// ? if the box is not faded then it will fade and vice versa, on double toggle the box will appear to it's previous form.
	// * making things invisible
	// $('.green-box').fadeTo(2000, 0);
	// * hide or show item
	// $('.blue-box').show();
	// $('.green-box').hide();
	// $('.red-box').hide(3000);
	// * Toggle function
	// $('.blue-box').toggle();
	// * slideUp function
	// $('.blue-box').slideUp(5000);
	// * Fifth Challenge
	// $('.blue-box').slideUp(3000);
	// $('.blue-box').slideDown(2000);
	// * Sixth Challenge
	// $('p').hide();
	// $('p').slideDown(3000);
	// * slideToggle
	// $('.blue-box').slideToggle(3000);
	// * Moving element
	// $('.red-box').animate({
	// 	'margin-left': '100px',
	// });
	// $('.green-box').animate(
	// 	{
	// 		'margin-left': '100px',
	// 	},
	// 	2000
	// );
	// $('.blue-box').animate(
	// 	{
	// 		'margin-left': '100px',
	// 	},
	// 	2000,
	// 	'linear'
	// );
	// * Seventh Challenge
	// $('.blue-box').animate(
	// 	{
	// 		'margin-left': '100px',
	// 	},
	// 	1000,
	// 	'linear'
	// );
	// $('.blue-box').animate({ 'margin-left': '-=100px' }, 2000, 'linear');
	// * Custom animation
	// $('.blue-box').animate(
	// 	{
	// 		marginLeft: '200px',
	// 		opacity: 0,
	// 		height: '50px',
	// 		width: ' 50px',
	// 		marginTop: '25px',
	// 	},
	// 	2000
	// );
	// * Eighth Challenge
	// $('p').animate(
	// 	{
	// 		fontSize: '20px',
	// 	},
	// 	1000
	// );
	// * Delaying and chaining a task
	// $('.blue-box').fadeOut(1000);
	// $('.blue-box').delay(2000).fadeIn(2000);
	// * Timing animation using callback function
	// $('.red-box').fadeTo(1000, 0.5, function () {
	// 	$('.green-box').fadeTo(1000, 0.5, function () {
	// 		$('.blue-box').fadeTo(1000, 0.5);
	// 	});
	// });
	// * showing log in container
	$('.lightbox').delay(1000).fadeIn(1000);
});
