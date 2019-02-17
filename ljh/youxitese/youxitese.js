!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});



$(function(){

    var i=0;

    var $btn = $('.section-btn li'),
        $bullet=$('.home-page-pagination .swiper-pagination-bullet'),

        $wrap = $('.section-wrap'),

        $arrow = $('.arrow');



    /*当前页面赋值*/

    function up(){
        i++;
        if(i>=$btn.length-1){
            i=$btn.length-1;
        }
    }

    function down(){
        i--;
        if(i<0){
            i=0;
        }
    }



    /*页面滑动*/

    function run(){

        $btn.eq(i).addClass('on').siblings().removeClass('on');

        $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');

    };



    /*右侧按钮点击*/

    $btn.each(function(index) {

        $(this).click(function(){

            i=index;

            run();

        })

    });

    $bullet.each(function(index) {

        $(this).click(function(){

            i=index+1;

            run();

        })

    });



    /*翻页按钮点击*/

    $arrow.one('click',go);

    function go(){

        up();run();

        setTimeout(function(){$arrow.one('click',go)},1000)

    };



    /*响应鼠标*/

    $wrap.one('mousewheel',mouse_);

    function mouse_(event){

        if(event.deltaY<0) {up()}

        else{down()}

        run();

        setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)

    };



    /*响应键盘上下键*/

    $(document).one('keydown',k);

    function k(event){

        var e=event||window.event;

        var key=e.keyCode||e.which||e.charCode;

        switch(key)	{

            case 38: down();run();

                break;

            case 40: up();run();

                break;

        };

        setTimeout(function(){$(document).one('keydown',k)},1000);

    }

});


$(".home-page-pagination .swiper-pagination-bullet").on("mouseenter", function () {
    $(".home-page-pagination .swiper-pagination-bullet-active").removeClass("swiper-pagination-bullet-active");
    $(this).addClass("swiper-pagination-bullet-active");
});
$(".audio").click(function(){
    if(!$(".music").get(0).paused){
        $(".audio").addClass("audio_pause").removeClass("audio_play");
        $(".music").get(0).pause();
    }else{
        $(".audio").addClass("audio_play").removeClass("audio_pause");
        $(".music").get(0).play();
    }
});

$(".top-nav-li").mouseover(function(){
    $(this).css("transform","scale(1.2)").siblings().css("transform","scale(1)");
    $(this).find("span").css("display","block");
});
$(".top-nav-li").mouseout(function(){
    $(this).css("transform","scale(1)")
    $(this).find("span").css("display","none");
});

$(".world-box .world-box-gird").mouseover(function(){
    $(this).css("transform","scale(1.1)");
    if(!$(this).hasClass("page_active")){
        var i=$(this).index()+1;
        $(".page2-bg-role-box").css("background-image","url(images/role-big-bg-"+i+".jpg)");
        $(this).addClass("page_active").siblings(".page_active").removeClass("page_active");
    }
});
$(".img-pos-abs").mouseout(function(){
    $(this).parent().parent().parent().css("transform","scale(1)");
});
$(".school-slide").mouseover(function(){
    var i=$(this).index();
    $(".page3-bg-role-box").get(0).style.backgroundImage="url(images/"+i+".jpg)";
    $(".logo-status").removeClass("status-active");
    $(".logo-status").eq(i).addClass("status-active");
});
$(".page3-button-next").on("click",function(){
   $(".swiper-wrapper").get(0).style.transform="translate3d(-1044px,0px,0px)";
    $(".page3-button-prev").removeClass("swiper-button-disabled");
    $(".page3-button-next").addClass("swiper-button-disabled");
    $(".swiper-scrollbar-drag").get(0).style.transform="translate3d(307.059px,0px,0px)";
});
$(".page3-button-prev").on("click",function(){
    $(".swiper-wrapper").get(0).style.transform="translate3d(0px,0px,0px)";
    $(".page3-button-next").removeClass("swiper-button-disabled");
    $(".page3-button-prev").addClass("swiper-button-disabled");
    $(".swiper-scrollbar-drag").get(0).style.transform="translate3d(0px,0px,0px)";
});

$(".page6-homepage-nav-li").mouseover(function(){
    var i=$(this).index();
   $(".page6-homepage-box").get(0).style.backgroundImage="url(images/bg-"+i+".jpg";
});


var scs=$(".social-circle-bullet");
var pres=$(".pagination-bullet-mask");
var pags=$(".game-content-top-control>.swiper-pagination-bullet");
var slids=$(".s");
scs.each(function(i){
    $(this).on("click",function(){
        var swi=$(".swiper-wrapper");
        if(i==0){
            swi.css("transform","translate3d(0px, 0px, 0px)")
        }else{
            swi.css("transform","translate3d(-1366px, 0px, 0px)")
        }
        for(var j=0;j<scs.length;j++){
            if(j==i){
                $(this).attr("class","social-circle-bullet social-circle-bullet-active");
            }else{
                scs.eq(j).attr("class","social-circle-bullet");
            }
        }
    })
});
pres.each(function(i){
    $(this).on("mouseover",function(){
        for(var j=0;j<4;j++){
            if(j==i) {
                $(".s").eq(i).css("opacity", "1").siblings().css("opacity", "0");
                $(".s").eq(i).css("transition-duration", "800ms").siblings().css("transition-duration", "0s");
                $(".pagination-bullet-mask").css("opacity", "1");
                $(".pagination-bullet-mask").eq(i).css("opacity","0");
            }
        }
    });

});

$('.role-habitus-box').mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $('.role-habitus-box').attr("style","transform:translateY(0)");
    $(this).attr("style","transform:translateY(-20px)");
    var i=$(this).index();
    $(".page4-four-role-bg").get(0).style.backgroundImage="url(images/role-"+i+".jpg)";
});

$(".swiper-tab-bullet").on('click',function(){
   $(this).addClass("swiper-tab-bullet-active").siblings().removeClass("swiper-tab-bullet-active");
    var i=$(this).index();
    console.log(i);
    if(i==0){
        $(".section-4 .swiper-wrapper").css("transform","translate3d(0px, 0px, 0px)");
    }else if(i==1){
        $(".section-4 .swiper-wrapper").css("transform","translate3d(-1280px, 0px, 0px)");
    }
});