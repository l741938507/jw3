
function mouseOver(){
    $(".cz1").show();
}
function mouseOut(){
    $(".cz1").hide();
}
function mouseOver1(){
    $(".cz1").show();
}
function mouseOut1(){
    $(".cz1").hide();
}
function mouseOver3(){
    $(".cz2").show();
}
function mouseOut3(){
    $(".cz2").hide();
}
function mouseOver4(){
    $(".cz2").show();
}
function mouseOut4(){
    $(".cz2").hide();
}
var lis=document.getElementsByClassName("way");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        this.className+=" active";
    };
    lis[i].onmouseout=function(){
        this.className="way";
        lis[1].className="way active";
    }
}

var xoyos=$(".xoyo-radio");
var res=$(".n");
var y=$(".y");
var t=$(".t");
console.log(y.length);console.log(t.length);

var r;
var f;
xoyos.each(function(i){
    $(this).on("click",function(){
        if(i<3){
            for(var j=0;j<3;j++){
                if(j==i){
                    r=i;
                    console.log(r);
                    xoyos.eq(i).attr("class","xoyo-radio active");
                    res.eq(i).show();
                }else{
                    xoyos.eq(j).attr("class","xoyo-radio");
                    res.eq(j).hide();
                }
            }
        }else{
            for(var j=3;j<xoyos.length;j++){
                if(j==i){
                    f=i;
                    console.log(f);
                    var yi=y[i-3].innerHTML;
                    var ti=t[i-3].innerHTML;
                    console.log(yi);
                    $(".jq").html(yi);
                    $(".yj").html(ti);
                    $(".ze").show();
                    xoyos.eq(i).attr("class","xoyo-radio active");
                }else{
                    xoyos.eq(j).attr("class","xoyo-radio");
                }
            }
        }

    });
    $(this).on("mouseover",function(){
        xoyos.eq(i).attr("class","xoyo-radio active");
    });
    $(this).on("mouseout",function(){
        xoyos.eq(i).attr("class","xoyo-radio");
        xoyos.eq(r).attr("class","xoyo-radio active");
        xoyos.eq(f).attr("class","xoyo-radio active");
    })
})
//for(var i=0;i<xoyos.length;i++){
//        xoyos[i].onmouseover=function(){
//            this.className+=" active";
//
//        }
//    xoyos[i].onmouseout=function(){
//
//            this.className="xoyo-radio";
//            xoyos[0].className="xoyo-radio active";
//
//    }
//
//}

























