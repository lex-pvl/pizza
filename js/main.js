$(document).ready(function() {
	let burger = $('.header__burger');
	let menu = $('.menu');

	burger.on('click', function() {
		$(this).toggleClass('header__burger-active');
		menu.toggleClass('menu-active');
	});

	let categoryTitle = $('.category__title');
	categoryTitle.on('click', function(){
		$(this).next().slideToggle(500);
		$(this).find('.category__arrow i').toggleClass('arrow-rotate');
		$(this).parent().toggleClass('changebg');
	});

	let categoryListItem = $('.category-list__item a').text();

	console.log(categoryListItem);


});
