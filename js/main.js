$(function(){
    
	$('.services-list__item').on('click', function(){
        $('.services-list__title').removeClass('active');
        $('.services-list__paragraf').addClass('disable').addClass('fade');
        $('.shadow').addClass('disable');        
        $(this).find('.services-list__title').addClass('active');
        $(this).find('.services-list__paragraf').removeClass('disable');
        $(this).find('.shadow').removeClass('disable');
    });
    // реализация кнопки еще.., показывает один блок за клик
    $('.reviews-btn').on('click', function(){
        $('.reviews-item__wrapper:hidden').slice(0,1).fadeIn();
        if ($(".reviews-item__wrapper:hidden").length < 1) $(this).fadeOut();
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name',
     });

     $('.phone').inputmask({"mask": ["+7(999) 999-9999","+7(999) 999-9999",], keepStatic: true});

     new WOW().init();
});