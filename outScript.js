$(function(){
   let index = 0 ;
   $('.sliderWrap').append($('.slider').first().clone(true));

   setInterval(function(){
        index++;
        console.log("dddd")
        $('.sliderWrap').animate({marginTop:'-'+(index*300 )+'px'},400)
        if(index ==3 ){
            $('.sliderWrap').animate({marginTop:'0px'},0)
            index=0;
        }

   },3000)
})