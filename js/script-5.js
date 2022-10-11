$(function () {
	// * Adding click handler
	$('#btn-click').click(function (event) {
		console.log(event);
		// event is an object that contains information about the event
		alert('Button Clicked');
	});
	// * 16th Challenge
	$('.red-box').click(function (e) {
		$('.red-box').fadeTo(1000, 0.5);
	});
	$('.red-box').click();
	// ? The above line will trigger the click event on the red box on page load
});
