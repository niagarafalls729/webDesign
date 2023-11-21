$(function(){
   $('.menu > ul > li').mouseover(function(){
    $(this).find('.submenu > li').stop().slideDown()
   })
   $('.menu > ul > li').mouseout(function(){
    $(this).find('.submenu > li').stop().slideUp()
   })

   let index=1;
   $('.sliderInner').append($('.s1').clone(true))
   setInterval(function(){
   //   console.log("d",$('.slider').eq(0).animate() ) 
     $('.sliderInner').eq(0).animate({marginLeft: (index*-100)+'%'}) 
      index++;
      if(index == 4){
         index=0;
         $('.sliderInner').eq(0).animate({marginLeft: 0+'%'},0) 
      }
      
   },1500)
    
})