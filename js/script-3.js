$(function () {
	// * CSS selector
	// // on element
	// $('p').css('background-color', 'rgba(180,180,30,0.8');
	// // on class
	// $('.red-box').css('background-color', 'rgba(180,180,30,0.8');
	// // on id
	// $('#list').css('background-color', 'rgba(180,180,30,0.8');
	// // specify by type of and element
	// $('input[type="text"]').css('background-color', 'rgba(180,180,30,0.8');
	// * css selector on multiple elements at once
	// $('h2, p, input, #list').css('background-color', 'rgba(180,180,30,0.8');
	// * css selector on child element
	// $('p:first').css('background-color', 'rgba(180,180,30,0.8');
	// * css selector on multiple child element at once
	// $('li:odd, input:text ').css('background-color', 'rgba(180,180,30,0.8');
	////
	// * Traversing with jQuery
	// $('#list').find('li').css('background-color', 'rgba(180,180,30,0.8');
	// ? find will access all the li inside list
	// $('#list').children('li').css('background-color', 'rgba(180,180,30,0.8');
	// ? children will select the direct descendant of list
	// $('#list').parent().css('background-color', 'rgba(180,180,30,0.8');
	// ? parent will select the direct ancestor of list
	// $('#list').parents('body').css('background-color', 'rgba(180,180,30,0.8');
	// ? parents will select the any or specific ancestor of list
	// $('#list').siblings('h2, p').css('background-color', 'rgba(180,180,30,0.8');
	// ? siblings are those who are in same level or indention with list
	// $('#list').siblings(':header').css('background-color', 'rgba(180,180,30,0.8');
	// ?  it is a special case
	// $('#list').prev().css('background-color', 'rgba(180,180,30,0.8');
	// ? prev will selcet the previous element
	// $('#list').next().css('background-color', 'rgba(180,180,30,0.8');
	// ? next will selcet the next element
	// * Ninth Challenge
	// $(':header').next().css('background-color', 'rgba(180,180,30,0.8');
	// $('form')
	// 	.find('input[type="password"]')
	// 	.css('background-color', 'rgba(180,180,30,0.8');
	////
	// * filtering with jQuery
	// $('#list')
	// 	.children('li')
	// 	.filter(':even')
	// 	.css('background-color', 'rgba(180,180,30,0.8');
	// ? list is finding its direct child and checking if it is even numbered
	// $('li')
	// 	.filter(function (index) {
	// 		return index % 3 === 1;
	// 	})
	// 	.css('background-color', 'rgba(180,180,30,0.8');
	// ? li checking its children's index in gives a reminder of 1 if divided by 3
	// $('li').first().css('background-color', 'rgba(180,180,30,0.8');
	// ? selects the first li in the page
	// $('li').last().css('background-color', 'rgba(180,180,30,0.8');
	// ? selects the last li in the page
	// *Selection an element directly
	// ? eq is used to locate the selected elements directly
	// $('li').eq(0).css('background-color', 'rgba(180,180,30,0.8');
	// $('li').eq(5).css('background-color', 'rgba(180,180,30,0.8');
	// $('li').eq(-2).css('background-color', 'rgba(180,180,30,0.8');
	$('li')
		.not(function (index) {
			console.log(index);
			return index % 3 === 1;
		})
		.css('background-color', 'rgba(180,180,30,0.8');
	// ? not is used to ignore a specific element to select.
});
