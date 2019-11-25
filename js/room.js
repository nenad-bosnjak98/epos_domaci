(function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
      $(".soc_mreze").hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 860) {
                  $('.soc_mreze').fadeIn(900);
              } else {
                  $('.soc_mreze').fadeOut(200);
              }
          });
      });
  
  });
    }(jQuery));


  
   