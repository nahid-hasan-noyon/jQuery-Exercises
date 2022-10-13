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
	// var flickerAPI =
	// 	'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	// $.getJSON(flickerAPI, {
	// 	tags: 'cat',
	// 	tagmode: 'any',
	// 	format: 'json',
	// })
	// 	.done(function (data) {
	// 		$.each(data.items, function (index, item) {
	// 			$('<img>').attr('src', item.media.m).appendTo('#flickrImages');
	// 			if (index == 4) {
	// 				return false;
	// 			}
	// 		});
	// 	})
	// 	.fail(function (jqXHR, textStatus, errorThrown) {
	// 		alert('Error: ' + errorThrown);
	// 	});
	////
	// * Retrieving pokemon data from the pokeAPI
	var pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';
	$.getJSON(pokeAPI)
		.done(function (data) {
			// console.log(data);
			$.each(data.results, function (index) {
				var pokeName =
					this.name.charAt(0).toUpperCase() + this.name.slice(1);
				$('<li>')
					.text('Pokemon no.' + ++index + ' ' + pokeName)
					.appendTo('#pokemonContainer');
			});
		})
		.always(function () {
			console.log('Request completed');
		});
});
