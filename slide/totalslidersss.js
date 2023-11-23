$(function(){
 
    let index_one = 0 

    console.log($('.slider').eq(index_one))
    setInterval(function(){
        $('.slider').eq(index_one).fadeOut();
        $('.slider').eq(index_one+1).fadeIn();
        index_one++;
        if(index_one == 3 ) {
            index_one = 0;
            $('.slider').eq(index_one).fadeIn();
        }
    },3000)



    console.log("z",$('.sliderWrap2 > .slider').eq(0))
    

    let index_two = 1;
    $('.sliderWrap2').append($('.sliderWrap2 > .s1').clone(true));
 
    setInterval(function(){
        $('.sliderWrap2 ').animate({marginLeft: index_two*-100+'%'})
        index_two++;
        if(index_two==4){
            index_two=1;
            $('.sliderWrap2').animate({marginLeft: '0%'},0)
        }
    },3000)


    // let index_three = 1 ;
    // $('.sliderWrap3').append($('.sliderWrap3 > .s1').clone(true));
    // setInterval(function(){
    //      $('.sliderWrap3 > .slider').eq(index_three-1).animate({marginTop: '-300'+'px'})
    //      index_three++;
    //      if(index_three==4){
    //         $('.sliderWrap3 > .slider').animate({marginTop: '0px'})
    //         index_three=1;
    //      }
    // },3000)
})