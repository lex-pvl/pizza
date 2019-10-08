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

	let categoryListItem = $('.category-list__item a');
	let catIndex = 1;

	categoryListItem.each(function(){
		$(this).attr('data-key', catIndex);
		catIndex++;

		$(this).on('click', function(){
			menu.removeClass('menu-active');
			$('.header__burger').removeClass('header__burger-active');
		})
	});

	$('.get_content').click(function(e) {
		e.preventDefault();
	    var pageName = $(this).data('page');
	    // ajax-запрос
	    $.ajax({
	        url: pageName,
	        cache: false,
	        success: function(html){
	            $(".content").html(html);
	        }
	    });
	});

});
