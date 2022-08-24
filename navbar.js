
// $(".default_option").click(function(){
//     $(".dropdown ul").addClass("active");
//   });

//   $(".dropdown ul li").click(function(){
//     var text = $(this).text();
//     $(".default_option").text(text);
//     $(".dropdown ul").removeClass("active");
//     $(".default_option").i("active")
//   });


$(document).ready(function () {
    $(".default_option").click(function () {
        $(".dropdown ul").addClass("active");
    });

    $(".dropdown ul li").click(function () {
        var text = $(this).text();
        $(".default_option").text(text);
        $(".dropdown ul").removeClass("active");
    });
});


$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
$('.feat-btn').click(function () {
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function () {
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});