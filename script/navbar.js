
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


function myfunction(){
    window.location.href="ordercart.html"
}
// document.querySelector("button").addEventListener("click", myfunction()){
//     console.log(window.location.href);
//     window.location.href = "ordercart.html";
// };
