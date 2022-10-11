$(function () {
	// * Adding click handler
	// $('#btn-click').click(function (event) {
	// 	console.log(event);
	// ? event is an object that contains information about the event
	// 	alert('Button Clicked');
	// });
	// * 16th Challenge
	// $('.red-box').click(function (e) {
	// 	$('.red-box').fadeTo(1000, 0.5);
	// });
	// $('.red-box').click();
	// ? The above line will trigger the click event on the red box on page load
	////
	// * Adding Hover Handler
	// $('.green-box').hover(function () {
	// 	alert('Hovered');
	// });
	// ! using hover is not a good idea as it will trigger the event twice
	// * 17th Challenge
	// $('.green-box').hover(function () {
	// 	$(this).text('Hovered');
	// });
	////
	// * Adding Mouse Enter and Mouse Leave Handler
	// $('.blue-box').mouseenter(function () {
	// 	$(this).stop().fadeTo(500, 0.5);
	// 	// ? stop() is used to stop the animation
	// });
	// $('.blue-box').mouseleave(function () {
	// 	$(this).stop().fadeTo(500, 1);
	// });
	// * 18th Challenge
	// $('.blue-box').hover(
	// 	function () {
	// 		$(this).stop().fadeTo(500, 0.5);
	// 	},
	// 	function () {
	// 		$(this).stop().fadeTo(500, 1);
	// 	}
	// );
	// ? hover() is a combination of mouseenter() and mouseleave() like hover(mouseenter, mouseleave)
	////
	// * Adding the same handler for multiple events
	// $('html').on('click keydown', function () {
	// 	// ? on() is used to add the same handler for multiple events
	// 	$(this).stop().fadeTo(500, 0.5);
	// });
	// ? keydown is used to trigger the event when any key is pressed
	// * 19th Challenge
	var images = [
		'images/laptop-mobile_small.jpg',
		'images/laptop-on-table_small.jpg',
		'images/people-office-group-team_small.jpg',
	];
	// $('.gallery')
	// 	.find('img')
	// 	.on('click', function () {
	// 		var src = $(this).attr('src');
	// 		var i = images.indexOf(src);
	// 		i = (i + 1) % images.length;
	// 		$(this).fadeOut(function () {
	// 			$(this).attr('src', images[i]).fadeIn();
	// 		});
	// 	});
	////
	// * Modularizing Event Handlers (no more inline event handlers)
	// function logEvent() {
	// 	console.log('Event: ' + event.type);
	// } // ? this function can be anywhere in this file even
	// $('html').on('click keydown', logEvent);
	// * 20th Challenge
	// var image = $('.gallery').find('img');
	// image.on('click', changeImage);
	// function changeImage() {
	// 	var src = $(this).attr('src');
	// 	var i = images.indexOf(src);
	// 	i = (i + 1) % images.length;
	// 	$(this).fadeOut(function () {
	// 		$(this).attr('src', images[i]).fadeIn();
	// 	});
	// }
	////
	// * Adding new Events -> problem
	// $('p').on('click', function () {
	// 	$(this).slideUp();
	// }); // ? This will not work for newly added paragraphs
	// $('#content').append('<p>This is a dynamically added paragraph</p>');
	// // * Delegating Events -> solution
	// $('#content').on('click', 'p', function () {
	// 	$(this).slideUp();
	// 	// ! Here this refers to the paragraph that was clicked
	// });
	// ? p is the selector for the elements that we want to add the event handler to
	// To know more about on method syntax https://www.w3schools.com/jquery/event_on.asp
	// * 21st Challenge
	// $('body').on('mouseenter', 'li', function () {
	// 	$(this).css('color', 'red');
	// });
	////
	// * Passing Additional data to events
	$('#btn-click').click(
		{
			user: 'Nahid',
			domain: 'nahid.com',
		},
		function (e) {
			greetUser(e.data);
		}
	);
	function greetUser(userData) {
		username = userData.user || 'Anonymous';
		domain = userData.domain || 'example.com';
		alert('Welcome ' + username + ' from ' + domain);
	}
});
