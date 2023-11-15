$(function(){
    console.log("스크립트시작.")
    $('.menu > ul > li').mouseover(function(){
        console.log("dd",$(this).find('.menu > ul > li > ul >li').slideDown())
        // $(this).find('ul').stop().slideDown();
        $(this).find('.submenu').stop().slideDown();
    })
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    })


    $('.menu2 > ul> li').mouseover(function(){
        $('.menu2 > ul> li >ul').stop().slideDown();
    })
    $('.menu2 > ul> li').mouseout(function(){
        $('.menu2 > ul> li >ul').stop().slideUp();
    })   
    
    


    $('.menu3 > ul > li').mouseover(function(){
        $('.menu3>ul>li>ul').stop().slideDown();
        $('.back').addClass('a');
    })
    $('.menu3 > ul > li').mouseout(function(){
        $('.menu3>ul>li>ul').stop().slideUp();
        $('.back').removeClass('a');
    })


    $('.menu4 > ul >li').mouseover(function(){
        $(this).find('ul').stop().slideDown()
    })
    $('.menu4 > ul >li').mouseout(function(){
        $(this).find('ul').stop().slideUp()
    })



    $('.menu5 > ul >li').mouseover(function(){
        $(this).find('ul').stop().slideDown();
    })
    $('.menu5 > ul >li').mouseout(function(){
        $(this).find('ul').stop().slideUp();
    })
}) 