//定义模块，   第一个数组里传入的是本模块所依赖的
define(["parabola","jquery","jquery-cookie"],function(parabola,$){
   

//*********封装头部导航相关事件函数
// 导航内容加载
 function nav_download(){
    $.ajax({
        type:"get",
        url:"../json/nav.json",
        success:function(arr){
            // 只拿返回的数组中前三个数据就可以
            for(var i = 0;i < 3;i++){
                $(`<div class="li_content clear">
                        <ul class="li_box clear">
                        </ul>
                    </div>`).appendTo($(".nav_box").find(".nav_item").eq(i));
                for(var j = 0; j < arr[i].content.length; j++){
                    $(`<li class="item">
                        <a href="">
                            <img src="${arr[i].content[j].img}" alt="">
                        </a>
                        <span class="i_msg">${arr[i].content[j].msg}</span>
                    </li>`).appendTo($(".nav_box").find(".nav_item").eq(i).find(".li_box"));
                }

            }
            navFunc();
            fixedFun();
        },
        error:function(msg){
            console.log(msg);
        }
    })
}

//先定义鼠标移入移出事件
function navFunc(){
    //给nav添加鼠标移入事件
    $(".nav_box").on("mouseenter",".nav_item",function(){
        //展示列表淡入页面
        $(this).find(".li_content").stop().fadeIn(600);
        //定义鼠标移入商品时 文字效果
        $(this).find(".item").hover(function(){
            $(this).find(".i_msg").css({"text-decoration":"underline","color":"#000"})
        },function(){
            $(this).find(".i_msg").css({"text-decoration":"none","color":"#000"})
        })
        //遮幕效果呈现
        if($(this).index() < 3){
            var h_mask = $(document.body).height();
            $(".mask").css({"display":"block","height":h_mask});
        }
        if($(this).index()>=3){
                $(".mask").css("display","none");
        }
    })


    //给nav添加鼠标移出事件
    $(".nav_box").on("mouseleave",".nav_item",function(){
        $(".li_content").stop().fadeOut(600);
    })
    //删除遮幕效果
    $(".nav_box").on("mouseleave",function(){
        $(".mask").css("display","none");
    })  

} 

//定义页面滚动时，导航栏fixed定位   
function fixedFun(){
    $(document).scroll(function(){
        var h = $(document).scrollTop();
        var w = $(window).width()
        if(h < 190){
            $(".head").css({
                "height":130,
                "position":"static",
               
             });
             $(".head_top").css({
                 "height":80,
                 "line-height":80,
             })
             $(".head_top_content li").css({
                "margin-top":0
             });
             $(".logo").css("height",80);
             $(".nav_box").css("height",50);
             $(".nav_item").css({
                 "height":50,
                 "background":"url('../images/zt_03.png') no-repeat center 35px"
                });
             $(".ni_a").css({
                "height":50,
                "font-size":18,
            });
            $(".nav_item").eq(0).css({
                "background":"url('../images/zt_03.png') no-repeat center 35px",
            })
            $(".nav_item").eq(3).css({
                "background":"url('../images/zt_03.png') no-repeat center 35px",
                "margin-top":0
            })
            $(".nav_item").eq(4).css({
                "margin-top":0,
                "background":"url('../images/zt_03.png') no-repeat center 35px",
            })
        }else{
            $(".head").css({
                "height":80,
                "width":w,
                "position":"fixed",
                "top":0,
                "left":0,
                "z-index":10,
             });
             $(".head_top").css({
                 "height":50,
                 "line-height":50,
             })
             $(".head_top_content li").css({
                "margin-top":-15
             });
             $(".logo").css("height",50);
             $(".nav_box").css({
                 "height":30,
             });
             $(".nav_item").css({
                 "height":30,
                 "background":"url('../images/zt_03.png') no-repeat 90px center"
                });
             $(".ni_a").css({
                "height":30,
                "font-size":14,
            });
            $(".nav_item").eq(0).css({
                "background":"url('../images/zt_03.png') no-repeat 80px center",
            })
            $(".nav_item").eq(3).css({
                "background":"url('../images/zt_03.png') no-repeat 100px center",
                "margin-top":-15
            })
            $(".nav_item").eq(4).css({
                "margin-top":-15,
                "background":"url('../images/zt_03.png') no-repeat 92px center",
            })
        }

    })
   
}

 //**********侧边栏事件 







 
     
       //返回模块中的方法接口
        return {
            // banner_operation:banner_operation,
           nav_download:nav_download
        }
    })