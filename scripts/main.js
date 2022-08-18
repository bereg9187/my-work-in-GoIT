$(function () {
  $('#callback-button').click(function () {
    $('.modal').addClass('modal_active');
  });
 
  $('.close').click(function () {
    $('.modal').removeClass('modal_active');
  });
});
$(function () {
    $('#callback-button').click(function () {
        $('.what-we-do').addClass('invisible');
        $('.our-team').addClass('invisible');
        $('.regular-customers').addClass('invisible');
        $('footer').addClass('invisible');
    })
     $('.close').click(function () {
        $('.what-we-do').removeClass('invisible');
        $('.our-team').removeClass('invisible');
        $('.regular-customers').removeClass('invisible');
        $('footer').removeClass('invisible');
     })
});
   $(function () {
  $('.mobile-menu-button').click(function () {
    $('.mobile-menu').addClass('mobile-contant');
    $('body').addClass('mobile-fixed');
  });
 
    $('.close-menu').click(function () {
    $('.mobile-menu').removeClass('mobile-contant');
    $('body').removeClass('mobile-fixed');
  });
});
// $('.modal').mouseup(function (e) {
//    let modalContent = $(".modal__content");
//    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
//      $(this).removeClass('modal_active');
//    }
//  });
