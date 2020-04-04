$(document).ready(function(){
    $(".zeterreimage").on("click", function(){
        alert('Never gonna give you up!');
    });
    $(".zeterreimage").on("mouseenter", function(){
        $(this).addClass('hovered');
    });
    $(".zeterreimage").on("mouseleave", function(){
        $(this).removeClass('hovered');
    });
    $(".ffrimage").on("click", function(){
        alert('Never gonna let you down!');
    });
    $(".ffrimage").on("mouseenter", function(){
        $(this).addClass('hovered');
    });
    $(".ffrimage").on("mouseleave", function(){
        $(this).removeClass('hovered');
    });
    $(".gruppoimage").on("click", function(){
        alert('Never gonna run around and desert you!');
    });
    $(".gruppoimage").on("mouseenter", function(){
        $(this).addClass('hovered');
    });
    $(".gruppoimage").on("mouseleave", function(){
        $(this).removeClass('hovered');
    });
});