$('#enviarcorreo').on('click', function() {
    alert("Correo enviado, pronto nos contactaremos contigo!");
});


$(document).ready(function(){
    $("#").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 10, function(){
   
    window.location.hash = hash;
    });
    }
    });
   });
   
   