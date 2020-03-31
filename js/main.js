$(".card").click(function() {
    $("p").animate({
      fontSize: $('p').css('font-size') == '16px' ? "25px" : '16px',
      
    });
  })