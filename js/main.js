
// Jquery
$(".card").click(function() {
    $("p").animate({
      fontSize: $('p').css('font-size') == '16px' ? "25px" : '16px',
    });
})

// $('#question').css('color','red');

$('#submitQuestion').click(function(e){
  if($('#question').val().length<=3){
    e.preventDefault();
    $('#TextError').html("");
    $('#question').css('border','1px solid red');
    $('#email').css('border','1px solid red');
    $('#TextError').html("Le @mail ou la question ne convient pas ");
    $('#TextError').css('color','red','bold')
  }
  else{
    $('#TextError').html("");
    $('#question').css('border','1px solid green');
    alert('Votre message a été envoyé');

  }
});