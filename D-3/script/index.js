$(function(){
    $('.menu > ul > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    })
    $('.menu > ul > li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    })

   
    $('.sliders').append($('.s1').clone(true));

    let index=1;

    setInterval(function(){
        console.log("index",index,index*-100)
        $('.sliders').animate({marginLeft: (index*-100) +'%'})
        index++;
        if(index ==4){
            index=0;
            $('.sliders').animate({marginLeft:'0%'},0)
        }
    },2000)

    $('#popup').click(function(){
        $('.pop').show(); 
    })
    
    $('.popContents > button').click(function(){
        $('.pop').hide(); 
    })
})