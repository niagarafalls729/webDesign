$(function(){

    $('.menu > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    })


    $('.menu2 > ul > li').mouseover(function(){
        $('.menu2 > ul > li >ul').stop().slideDown();
    })
    $('.menu2 > ul > li').mouseout(function(){
        $('.menu2 > ul > li >ul').stop().slideUp();
    })


    $('.menu3 > ul >li').mouseover(function(){
        $('.menu3> ul > li > ul').stop().slideDown()
        $('.back').stop().slideDown()
    })
    $('.menu3 > ul >li').mouseout(function(){
        $('.menu3> ul > li > ul').stop().slideUp()
        $('.back').stop().slideUp()
    })





    $('.menu4>ul>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.menu4>ul>li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    })


    $('.menu5 > ul >li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.menu5 > ul >li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    })



    $('.menu6>ul').mouseover(function(){
        $('.submenu > li').stop().fadeIn();
        $('.back2').addClass('go')
        
    })
    $('.menu6>ul').mouseout(function(){
        $('.submenu > li').stop().fadeOut();
        $('.back2').removeClass('go')
    })










})