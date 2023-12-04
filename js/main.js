
$('.slide').slick({
    'dots' : true,
    'autoplay' : true,
    'autoplaySpeed' : 1800,
    'fade' : true,
    'prevArrow' : false,
    'nextArrow' : false,
});

$('.imgBox').slick({
    'dots' : false,
    'autoplay' : true,
    'autoplaySpeed' : 1800,
    'fade' : true,
    'prevArrow' : false,
    'nextArrow' : false,
});


$('.gnb li').mouseover(function(){

$(this).children('.sub').stop().slideDown();

}).mouseout(function(){

$(this).children('.sub').stop().slideUp();

});


$('.lang li').mouseover(function(){

$(this).children('.langSub').stop().slideDown();

}).mouseout(function(){

$(this).children('.langSub').stop().slideUp();

});

$('.srch').click(function(){
    console.log("aa")
    $('input').toggleClass('active');
    $('input').toggle();
});

$('.top').click(function(){
    $('html,body').stop().animate({'scrollTop':0},2000);
});

$('.snsBtn').click(function(){
    $('.btnMenu').parents().children().eq(0).stop().fadeToggle();
});



