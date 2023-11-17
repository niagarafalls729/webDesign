// 1번
// $(function(){
//     let index = -1; 
//     setInterval(function(){ 
//         $('.slider').eq(index).fadeOut();
//         $('.slider').eq(index+1).fadeIn();
//         index++;
//         if(index == 2 ){
//             index = -1;
//         } 
//     },1500)
// })

$(function(){
    let index = 0; 
    $('.sliderWrap').append($('.s1').clone(true));
    setInterval(function(){ 
       $('.slider').eq(index).animate({ marginLeft:'-1200px'})
       index++;
       if(index ==4){
        $('.slider').animate({ marginLeft:'0px'},0)
        index=0;
       }
    },1500)
})
