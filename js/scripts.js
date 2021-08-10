$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(4000)
  .next()
  .fadeIn(4000)
  .end()
  .appendTo('#slideshow');
}, 8000);
  $('.drop-menu').on('click', function() {    
	$(".drop-menu").toggleClass("select");
  });   
  $('.head-menu-button').on('click', function() {    
	$("body").toggleClass("view_menu");
  }); 
  $('.navi-close-button').on('click', function() {    
	$("body").removeClass("view_menu");	
  }); 

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.to-header').fadeIn();
        } else {
            $('.to-header').fadeOut();
        }
    });	 
    $('.to-header').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
 $('.cart-button').on('click', function() {
  	$(this).addClass('check');
	$(".fly-car-shop").toggleClass("visible");
  });
$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});
$(window).scroll(function(){
  var sticky = $('.fly-car-shop'),
      scroll = $(window).scrollTop();
  if (scroll <= 100) sticky.removeClass('visible');
 
});
  
  
  
  $('.prefix_quality-checker').on('click', function() {    
  	$(this).toggleClass('check');
  }); 

  $('.prefix_menu').on('click', function() {    
	$("body").toggleClass("view-navigation");
  });	
