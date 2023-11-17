$(function(){

    $('.menu > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    })  
    $('.menu2 > ul > li').mouseover(function(){
        $('.menu2 > ul > li > ul').stop().slideDown()
    })
    $('.menu2 > ul > li').mouseout(function(){
        $('.menu2 > ul > li > ul').stop().slideUp()
    }) 
    $('.menu3>ul>li').mouseover(function(){
        $('.submenu3').stop().slideDown();
        $('.back').addClass('go');
    })
    $('.menu3>ul>li').mouseout(function(){
        $('.submenu3').stop().slideUp();
        $('.back').removeClass('go');
    }) 
    $('.menu4>ul>li').mouseover(function(){
        $(this).find('ul').stop().slideDown();
    })
    $('.menu4>ul>li').mouseout(function(){
        $(this).find('ul').stop().slideUp();
    }) 
    $('.menu5 > ul > li').mouseover(function(){
        $(this).find('ul').stop().slideDown();
    })
    $('.menu5 > ul > li').mouseout(function(){
        $(this).find('ul').stop().slideUp();
    }) 
    $('.menu6 > ul > li').mouseover(function(){
        $('.menu6 > ul >li>ul>li').stop().fadeIn();
        $('.back2').addClass('go');
    })
    $('.menu6 > ul >li').mouseout(function(){
        $('.menu6 > ul >li>ul>li').stop().fadeOut();
        $('.back2').removeClass('go');
    })


































})