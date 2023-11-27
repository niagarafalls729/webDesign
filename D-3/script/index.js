$(function(){
     $('.menu >ul >li').mouseover(function(){
        $('.menu >ul >li > ul > li').stop().fadeIn();
        $('.menuBack').stop().slideDown();
     })
     $('.menu >ul >li').mouseout(function(){
        $('.menu >ul >li > ul > li').stop().fadeOut();
        $('.menuBack').stop().slideUp();
     })

     let index = 0;
     setInterval(() => {
        $('.slider').eq(index++).fadeOut();   // 0 1 2
        $('.slider').eq(index).fadeIn();    // 1 2 3
       
        if(index == 3){
            index=0;
            $('.slider').eq(index).fadeIn();   // 0 1 2
        }
     }, 2000);


     $('#noti').click(function(){
        $('.gelCon').hide();
        $('.notiCon').show();

     })
     $('#gel').click(function(){
        $('.gelCon').show();
        $('.notiCon').hide();
     })
})