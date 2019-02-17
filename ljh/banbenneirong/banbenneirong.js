$(window).on("scroll",function(){
    st=$(window).scrollTop();
    if(st>=780){
        $(".fixed-menu-box").show();
    }else {
        $(".fixed-menu-box").hide();
    }
});


$(".gift-tab-box .gift-tab").on("mouseover",function(){
    $(this).siblings(".act").removeClass("act");
        $(this).addClass("act");
        $(this).parents(".gift-show-box").find(".gift-img").hide();
        $(this).parents(".gift-show-box").find(".gift-img").eq($(this).index()).show();
});