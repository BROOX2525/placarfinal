/**
 * Created by Icaro on 08/03/2016.
 */

$(document).ready(function(){
    $("#window").hide();

    $("#openmodal").click(function(){
       $("#window").fadeIn();

    $(".bt-closemodal").click(function (){
        $("#window").fadeOut();

        });
    });
});

$(document).ready(function(){
    $("#window-cadastro").hide();
    $("#cadastro").click(function(){
        $("#window").fadeOut();
        $("#window-cadastro").fadeIn();
        $(".bt-closemodal").click(function (){
            $("#window-cadastro").fadeOut();

        });
    });
});


$(document).ready(function(){

    $("#menu-1").hover(function(){
        $("#lista-1").toggle();
        });

});

$(document).ready(function(){

    $("#item-ranking").hover(function(){
        $("#lista-2").toggle();
    });

});
