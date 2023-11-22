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



    
})