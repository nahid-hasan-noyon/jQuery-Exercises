$(function () {
	// * Adding click handler
	$('#btn-click').click(function (event) {
		console.log(event);
		// event is an object that contains information about the event
		alert('Button Clicked');
	});
});
