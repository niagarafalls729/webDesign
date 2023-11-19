$(function(){
    let btn = $('.tabMenu > .tabMenu_btn > ul>li');
    let tabContents = $('.tabMenu_contents > div');
    tabContents.hide().eq(0).show();

    btn.click(function(){
        const index = $(this).index(); 
        tabContents.hide().eq(index).show();
        $('.tabMenu_btn > ul > li').removeClass('activeMenu');
        $('.tabMenu_btn > ul > li').eq(index).addClass('activeMenu');
        
    })

})