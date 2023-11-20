$(function(){
   $('.menu > ul > li').mouseover(function(){
    $(this).find('.submenu > li').stop().slideDown();
   })
   $('.menu > ul > li').mouseout(function(){
    $(this).find('.submenu > li').stop().slideUp();
   })



   let index = 1;
   console.log("$('.sliderWrap').eq(0)",$('.slider').eq(1))
   $('.sliderWrap').append($('.s1').clone(true));
   setInterval(function(){ 
    $('.slider').eq(0).animate({marginTop:  (index*-400)+'px'})
    index++;
    if(index==4){
        index=0;
        $('.slider').animate({marginTop:  (0)+'px'},0)
    }
   },1800)
})