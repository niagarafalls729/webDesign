$(function(){
    $('.menu > ul >li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.menu > ul >li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    })

    
    let sliderIndex=0;
    $('.slider').eq(sliderIndex).fadeIn();
    setInterval(function(){
        // console.log("",sliderIndex)
        $('.slider').eq(sliderIndex).fadeIn();
        $('.slider').eq(sliderIndex-1).fadeOut();
        sliderIndex++;
        if(sliderIndex==3){
            sliderIndex=0;
        }
    },1500)

    $('.tabMenu > ul > li').click(function(){
        $('.tabMenu > ul > li').removeClass("active");
        $(this).addClass("active");
        // $('.tabContents').eq()
        if($(this).index() == 0){
            
            $('.tabContents2').hide();
            $('.tabContents1').show();
        }else{
            $('.tabContents1').hide();
            $('.tabContents2').show();
        }
    })
})