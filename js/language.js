$(function() {
    $(".en").click(function() { 
        // HEADER
    $(".logo-big").text("Portifolio");

        // HOME
    $(".sub-heading").text("Developer and designer");
    $(".arrow-text").text("Scroll down");

        // FOTTER
    $(".footer-text ").text("Designed & Built by Kaio Bruno");

    // THANKS PAGE
    $(".title-thanks").text("Thank you");
    $(".thanks-text").text("Thank you for sending me an email, I will be responding soon");


    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass("change-en");


    });
});
$(function() {
    $(".br").click(function() { 


        // HEADER
    $(".logo-big").text("Portifólio");

        //FOTTER 
    $(".footer-text ").text("Projetado & Criado por Kaio Bruno");

    // THANKS PAGE
    $(".title-thanks").text("Obrigado");
    $(".thanks-text").text("Obrigado por me mandar um e-mail, Irei responder em breve.");

    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-br");
    
    });
});