$(function(){
     
    $('.menu > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown()
    })
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp()
    })


    // let index=1;
    // $('.sliders').append($('.s1').clone(true))
    // setInterval(function(){
    //     console.log("index*-100",index*-100)
    //     $('.sliders').animate({marginLeft: index*-100+'%'})
    //     index++; 
    //     if(index == 4){ 
    //         index=0;
    //         $('.sliders').eq(index).animate({marginLeft:'0%'},0)
    //     }
    // },2000)
})