// 이건 s-1유형
// $(function(){
//     let index = 0;

//     setInterval(function(){

//         $('.slider').eq(index).fadeOut()
//         $('.slider').eq(index+1).fadeIn()
//         index++;

//         if(index==2){
//             index=0
//         }
//     },3000)
// })

$(function(){
    let index=1;

    $('.sliderWrap').append($('.slider').eq(0).clone(true))

    setInterval(function(){
        
        $('.sliderWrap').animate({marginLeft:'-'+index*1200+ 'px'},300)
        index++;
        if(index==4){
            index=1;
            $('.sliderWrap').animate({marginLeft:'0px'},0)
        }
    },3000)
})