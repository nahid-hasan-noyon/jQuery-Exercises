$(function () {
	// * Fetch the file from the server
	// $('#code').load('text.txt');
	// * Fetch the file from the server with a callback function
	// $('#code').load('js/script.js', function (response, status) {
	// 	if (status == 'error') {
	// 		alert('Error: ' + response);
	// 	}
	// });
	// ? unavailable file will give an error
	// $('#code').load('text.txt', function (response, status) {
	// 	if (status == 'error') {
	// 		alert('Error: ' + response);
	// 	}
	// });
	////
	// * Retrieve Flicker images from Flicker API
	var flickerAPI =
		'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	$.getJSON(flickerAPI, {
		tags: 'cat',
		tagmode: 'any',
		format: 'json',
	})
		.done(function (data) {
			$.each(data.items, function (index, item) {
				$('<img>').attr('src', item.media.m).appendTo('#flickrImages');
				if (index == 4) {
					return false;
				}
			});
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			alert('Error: ' + errorThrown);
		});
});
