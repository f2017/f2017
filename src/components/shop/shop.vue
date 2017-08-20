<template>
    <div class="shop">
        <!--商品标题-->
        <div class="shop_nav">
            <div class="shopnav">
                <span class="shop_nav_sp">商品</span>
            </div>
            <div class="shopnav">
                <span class="sv">评价</span>
            </div>
            <div class="shopnav">
                <span class="sv">店铺</span>
            </div>
        </div>
        <!--商品列表-->
        <!--<div class="shop_list">-->
            <!--<ul class="zhonglei">-->
                <!--<li class="youhui"  v-for="v in datas">-->
                    <!--<span class="rexiao">{{v.name}}</span>-->
                <!--</li>-->
            <!--</ul>-->

            <!--<section class="shop_con">-->
                <!--<div class="scroll">-->
                    <!--<dl v-for="(v,i) in shopcons">-->
                        <!--<dt class="dt">-->
                            <!--<div class="category-title">-->
                                <!--<strong class="category-name">{{i}}</strong>-->
                                 <!--<span class="category-description">大家喜欢吃，才叫真好吃。</span>-->
                            <!--</div>-->
                            <!--<div class="category-more">-->
                                <!--<span class="icon">...</span>-->
                                <!--<p class="popup">-->
                                    <!--<span>{{i}}</span>-->
                                    <!--<span>大家喜欢吃，才叫真好吃。</span>-->
                                <!--</p>-->
                            <!--</div>-->
                        <!--</dt>-->
                        <!--<dd class="dd" v-for="k in v">-->
                            <!--<span class="foodimg" >-->
                                <!--<img src="" alt="">-->
                            <!--</span>-->
                            <!--<section class="foodinfo">-->
                                <!--<header class="foodtitle">-->
                                    <!--<span>{{k.name}}</span>-->
                                <!--</header>-->
                                <!--<p class="fooddesc">{{k.desc}}</p>-->
                                <!--<p class="foodsales">-->
                                    <!--<span>月售380份</span>-->
                                    <!--<span>好评率97%</span>-->
                                <!--</p>-->
                                <!--<strong class="foodprice">-->
                                    <!--<span>{{k.price}}</span>-->
                                <!--</strong>-->
                                <!--<div class="tianjia_button">-->
                                    <!--<span>+</span>-->
                                <!--</div>-->
                            <!--</section>-->
                        <!--</dd>-->
                    <!--</dl>-->
                <!--</div>-->
            <!--</section>-->
        <!--</div>-->

        <!--评价-->
        <div class="pingjialist">
            <!--<section class="zonghepj">-->
                <!--<div class="zhpjleft">-->
                    <!--<strong class="zhplnum">4.9</strong>-->
                    <!--<div>综合评价</div>-->
                    <!--<p class="zhpjduibi">高于周边商家21.3%</p>-->
                <!--</div>-->
                <!--<div class="zhpjright">-->
                    <!--<div class="fuwutd">-->
                        <!--<span>服务态度</span>-->
                        <!--<span class="pjduibi">-->
                            <!--<div class="pjxing">-->
                                <!--<div class="pjxx">*****</div>-->
                            <!--</div>-->
                            <!--<span class="xxpj">5.0</span>-->
                        <!--</span>-->
                    <!--</div>-->
                    <!--<div class="fuwutd">-->
                        <!--<span>菜品评价</span>-->
                        <!--<span class="pjduibi">-->
                            <!--<div class="pjxing">-->
                                <!--<div class="pjxx">*****</div>-->
                            <!--</div>-->
                            <!--<span class="xxpj">4.9</span>-->
                        <!--</span>-->
                    <!--</div>-->
                    <!--<div class="fuwutd">-->
                        <!--<span>送达时间</span>-->
                        <!--<span class="pjduibi">-->
                            <!--<span class="pjtime">33分钟</span>-->
                        <!--</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="pjcon">-->
                <!--<div class="pjfenlei">-->
                    <!--<ul>-->
                        <!--<li class="pjcengci quanbu">-->
                            <!--全部(173)-->
                        <!--</li>-->
                        <!--<li class="pjcengc">-->
                            <!--满意(170)-->
                        <!--</li>-->
                        <!--<li class="pjcengci bumanyi">-->
                            <!--不满意(3)-->
                        <!--</li>-->
                        <!--<li class="pjcengc">-->
                            <!--有图(12)-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<ul class="pjlist">-->
                    <!--<li class="pjlistcon">-->
                    <!--<div class="yhcon">-->
                        <!--<small class="smalltime">2017-08-17</small>-->
                        <!--<img src="touxoang.jpg" alt="" class="touxiang">-->
                        <!--<div class="pjlistcontent">-->
                            <!--<h3 class="nimingyh">匿名用户</h3>-->
                            <!--<div class="yhstart">*****</div>-->
                            <!--<ul class="yhimg">-->
                                <!--<li>-->
                                    <!--<img src="https://fuss10.elemecdn.com/a/bf/4ecb0fc7e0514bc81eb48091a394ejpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">-->
                                <!--</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                        <!--<div>-->
                            <!--<ul class="yhrennum">-->
                                <!--<li>双人套餐</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
                    <!--<li class="pjlistcon">-->
                        <!--<div class="yhcon">-->
                            <!--<small class="smalltime">2017-08-17</small>-->
                            <!--<img src="touxoang.jpg" alt="" class="touxiang">-->
                            <!--<div class="pjlistcontent">-->
                                <!--<h3 class="nimingyh">匿名用户</h3>-->
                                <!--<div class="yhstart">*****</div>-->
                                <!--<ul class="yhimg">-->
                                    <!--<li>-->
                                        <!--<img src="https://fuss10.elemecdn.com/a/bf/4ecb0fc7e0514bc81eb48091a394ejpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">-->
                                    <!--</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                            <!--<div>-->
                                <!--<ul class="yhrennum">-->
                                    <!--<li>双人套餐</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->
                    <!--<li class="pjlistcon">-->
                        <!--<div class="yhcon">-->
                            <!--<small class="smalltime">2017-08-17</small>-->
                            <!--<img src="touxoang.jpg" alt="" class="touxiang">-->
                            <!--<div class="pjlistcontent">-->
                                <!--<h3 class="nimingyh">匿名用户</h3>-->
                                <!--<div class="yhstart">*****</div>-->
                                <!--<ul class="yhimg">-->
                                    <!--<li>-->
                                        <!--<img src="https://fuss10.elemecdn.com/a/bf/4ecb0fc7e0514bc81eb48091a394ejpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">-->
                                    <!--</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                            <!--<div>-->
                                <!--<ul class="yhrennum">-->
                                    <!--<li>双人套餐</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->
                    <!--<li class="pjlistcon">-->
                        <!--<div class="yhcon">-->
                            <!--<small class="smalltime">2017-08-17</small>-->
                            <!--<img src="touxoang.jpg" alt="" class="touxiang">-->
                            <!--<div class="pjlistcontent">-->
                                <!--<h3 class="nimingyh">匿名用户</h3>-->
                                <!--<div class="yhstart">*****</div>-->
                                <!--<ul class="yhimg">-->
                                    <!--<li>-->
                                        <!--<img src="https://fuss10.elemecdn.com/a/bf/4ecb0fc7e0514bc81eb48091a394ejpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/" alt="">-->
                                    <!--</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                            <!--<div>-->
                                <!--<ul class="yhrennum">-->
                                    <!--<li>双人套餐</li>-->
                                <!--</ul>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</section>-->


            <!--店铺-->
            <section class="dianpuhuodong">
                <h3 class="huodongtitle">活动与属性</h3>
                <div>
                    <div class="dphdlist">
                        <i class="dpjian">减</i>
                        <span class="dpyh">
                            <span>
                                满15减12，满35减17，满50减23
                            </span>
                        </span>
                    </div>
                    <div class="dphdlist">
                        <i class="dpjian">V</i>
                        <span class="dpyh">
                            <span>
                                【VIP钻石】6折品牌日套餐
                            </span>
                        </span>
                    </div>
                    <div class="dphdlist">
                        <i class="dpjian">V</i>
                        <span class="dpyh">
                            <span>
                                【Vip荣耀】5.5折特价套餐
                            </span>
                        </span>
                    </div>
                    <div class="dphdlist">
                        <i class="dpjian">V</i>
                        <span class="dpyh">
                            <span>
                                【Vip王者】5折特惠
                            </span>
                        </span>
                    </div>

                    <div class="dphdlist">
                        <i class="dpjian dpshou">首</i>
                        <span class="dpyh">
                            <span>
                                新用户下单立减17.0元(不与其它活动同享)
                            </span>
                        </span>
                    </div>
                    <div class="dphdlist">
                        <i class="dpjian dpbao">保</i>
                        <span class="dpyh">
                            <span>
                                已加入“外卖保”计划，食品安全有保障
                            </span>
                        </span>
                    </div>
                </div>
            </section>
            <section class="dpshijing">
                <h3 class="huodongtitle">商家实景</h3>
                <a href="">
                    <img src="https://fuss10.elemecdn.com/d/1a/061175fc2705c9e56b9f8bc01ef7djpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
                    <span class="menmian">门面(1)张</span>
                </a>
                <a href="">
                    <img src="https://fuss10.elemecdn.com/a/2f/d1f65d4ea38bbb16b901f9de380dejpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
                    <span class="menmian">大堂(1)张</span>
                </a>
            </section>
            <section class="shangjiaxinxi">
                <h3 class="huodongtitle">商家信息</h3>
                <ul class="dpdizhi">
                    <li>地址：太原市小店区平阳路平阳景苑9号楼底商1005号</li>
                    <li>营业时间：09:00-20:30</li>
                </ul>
            </section>
        </div>


    </div>
</template>
<script>
    export default {
        name: 'shop',
        props:['datas','shopcons']
    }
</script>
<!--商品-->
<style scoped>
    .shop_nav{
        line-height: 0.7rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background-color: #fff;
        box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.06);
        margin-bottom: -1px;
    }
    .shopnav{
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        font-size: .28rem;
        color: #666;
        border-bottom: 1px solid #ddd;
        width: 33.33%;
    }
    .shop_nav_sp{
        line-height: 0.4rem;
        font-weight: 700;
        position: relative;
        flex: 1;
        text-align: center;
        font-size: 0.3rem;;
        color: #3190e8;
    }
    .shop_nav_sp:after{
        content: "";
        position: absolute;
        bottom: -.15rem;
        left: 0;
        right: 0;
        height: .05rem;
        background-color: #2395ff;
    }
    .sv{
        color: #666;
    }
    .shop_list{
        height: 490px;
        /*padding-bottom: 1.2rem;*/
        background-color: #fff;
        overflow: hidden;
    }
    .zhonglei{
        overflow:auto;
        width: 23%;
        height: 100%;
        background-color: #f8f8f8;
        padding: 0;
        list-style: none;
        flex: none;
        margin: 0;
        float: left;
    }
    .youhui{
        text-align: center;
        background: #F8F8F8;
        position: relative;
        padding:  .466667rem .2rem;
        border-bottom: 0.01rem solid #ededed;
        font-size: .25rem;
        color: #666;
        border-right-color: #fff;
        font-weight: bolder;
    }
    .shop_con{
        float: left;
        height: 100%;
        width: 77%;

    }
    .shop_con .scroll{
        height: 100%;
        overflow-y: auto;
    }
    .dd{
        box-shadow: 0.4rem 1px 0 0 #ddd;
        position: relative;
        background-color: #fff;
        margin: 0;
        padding: .2rem .166667rem;
        margin-bottom: 1px;
        display: flex;
        min-height: 2.5rem;
    }
    .foodimg{
        margin-right: 4%;
        flex: 2;
        vertical-align: top;
    }
    .foodimg img{
        width: 100%;
        border-radius: .023333rem;
    }
    .foodinfo{
        flex: 8;
        padding-bottom: .366667rem;
    }
    .foodtitle{
        font-size: .3rem;
        font-weight: 700;
        line-height: 1.1;
        /*overflow: hidden;*/
        -webkit-box-pack: justify;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .fooddesc{
        box-sizing: inherit;
        display: flex;
        margin: .1rem 0;
        font-size: .25rem;
        color: #999;
    }
    .foodsales{
        display: flex;
        margin: .15rem 0;
        color: #666;
        font-size: .25rem;
        line-height: 1;
    }
    .foodprice{
        display: flex;
        font-weight: 700;
        font-size: .4rem;
        line-height: .4rem;
        color: #f60;
    }
    .tianjia_button{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        position: absolute;
        right: 0.25rem;
        bottom: 0.25rem;
        text-align: center;
        background: pink;
        color: #fff;
        font-size: 0.4rem;
        font-weight: 700;
        /*vertical-align: 0.6rem;*/
    }
    .tianjia_button>span{
        display: block;
        line-height: 0.35rem;
    }
    .dt{
        position: relative;
        padding: .2rem .8rem .2rem .266667rem;
        background-color: #f1f1f1;
    }
    .category-title{
        display: flex;
        align-items: flex-end;
        overflow: hidden;
    }

    .category-name{
        margin-right: .125rem;
        font-weight: 700;
        font-size: .3rem;
        color: #666;
        flex: none;
    }
    .category-description{
        display: flex;
        flex: 1;
        color: #999;
        font-size: .266667rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .category-more .icon{
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        width: 0.9rem;
        z-index: 2;
        font-size: 0.4rem;
        color: #ccc ;
    }
    .category-more .popup{
        position: absolute;
        background-color: #39373a;
        opacity: .97;
        transform: scale(1);
        transform-origin: top right;
        width: 63%;
        right: .233333rem;
        z-index: 3;
        color: #eee;
        font-size: .62rem;
        border-radius: .206667rem;
        padding: .2rem .266667rem;
        transition: all .3s ease;
        cursor: pointer;
        display: none;
    }


</style>
<!--评价style-->
<style>
    .pingjialist{
        height: 10rem;
        background-color: #eee;
        overflow-y: auto;
    }
    .zonghepj{
        background-color: #fff;
        margin-bottom: .266667rem;
        padding: .3rem;
        font-size: .36rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #666;
    }
    .zhpjleft{
        padding-right: .4rem;
        border-right: 1px solid #ddd;
        text-align: center;
        line-height: 1.5;
    }
    .zhpjright{
        flex: 1;
        font-size: .3rem;
        line-height: 1;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
    }
    .zhplnum{
        font-size: .7rem;
        line-height: 1;
        font-weight: 400;
        color: #f60;
        display: block;
    }
    .zhpjduibi{
        font-size: .2rem;
        color: #999;
    }
    .fuwutd{
        width: 80%;
        margin: .133333rem 0;
    }
    .pjduibi{
        padding-left: .266667rem;
    }
    .pjxing{
        position: relative;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
    }
    .pjxx{
        display: flex;
    }
    .xxpj{
        color: #f60;
        padding-left: .266667rem;
    }
    .pjtime{
        font-size: .266667rem;
        color: #999;
    }

    .pjcon{
        background-color: #fff;
        padding: .2rem .3rem 0;
        font-size: .3rem;
    }
    .pjfenlei{
        padding-bottom: .2rem;
        border-bottom: 1px solid #ddd;
    }
    .quanbu{
        color: #fff;
        background-color: #3190e8;
    }
    .pjfenlei>ul>li{
        display: inline-block;
        padding: .12rem;
        margin: .06rem .1rem;
        border-radius: .133333rem;
    }
    .pjcengc{
        display: inline-block;
        padding: .2rem;
        margin: .066667rem .133333rem;
        border-radius: .133333rem;
        color: #6d7885;
        background-color: #ebf5ff;
    }
    .bumanyi{
        color: #aaa;
        background-color: #f5f5f5;
    }
    .pjlist{
        margin: 0;
        padding: 0;
    }
    .pjlistcon{
        padding: .4rem 0;
        border-bottom: .013333rem solid #ddd;
    }
    .yhcon{
        position: relative;
        padding-left: 1.2rem;
    }
    .smalltime{
        position: absolute;
        top: .133333rem;
        right: 0;
        font-size: .245rem;
        color: #999;
    }
    .touxiang{
        position: absolute;
        top: 0;
        left: 0;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
    }
    .pjlistcontent{
        font-size: .346667rem;
    }
    .nimingyh{
        font-size: .27rem;
        margin-top: 0;
        margin-bottom: .1rem;
        color: #666;
    }
    .yhstart{
        position: relative;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
    }
    .yhimg>li>img{
        width: 1.6rem;
        height: 1.6rem;
        max-width: 100%;
    }
    .yhrennum>li{
        display: inline-block;
        font-size: .2rem;
        color: #999;
        border: 1px solid #ddd;
        padding: .05rem .2rem;
        margin: .07rem;
        border-radius: .08rem;
        max-width: 1.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }





</style>
<!--店铺-->
<style>
    .dianpuhuodong{
        margin-bottom: .266667rem;
        padding: 0 .4rem .4rem;
        font-size: .346667rem;
        background-color: #fff;
        color: #666;
    }
    .huodongtitle{
        margin: 0 -.4rem;
        padding: .213333rem .4rem;
        border-bottom: 1px solid #eee;
        color: #333;
        font-weight: 400;
        font-size: .35rem;
        line-height: .4rem;
    }
    .dphdlist{
        margin-top: 0.4rem;
        line-height: .426667rem;
        display: flex;
        font-size: .23rem;
    }
    .dpjian{
        margin-right: .133333rem;
        font-size: .2rem;
        font-style: normal;
        line-height: 1;
        height: .32rem;
        width: .32rem;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
        border-radius: .04rem;
        margin-top: .066667rem;
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        border-color: rgb(240, 115, 115);
    }
    .dpshou{
        background-color: rgb(112, 188, 70);
        color: rgb(255, 255, 255);
        border-color: rgb(112, 188, 70);
    }
    .dpbao{
        background-color: rgb(153, 153, 153);
        color: rgb(255, 255, 255);
        border-color: rgb(153, 153, 153);
    }
    .dpshijing{
        margin-bottom: .266667rem;
        padding: 0 .4rem .4rem;
        font-size: .27rem;
        background-color: #fff;
        color: #666;
        overflow: hidden;
    }
    .dpshijing>a{
        position: relative;
        float: left;
        overflow: hidden;
        margin-top: .32rem;
        margin-right: .186667rem;
        width: 1.85rem;
        height: 1.85rem;
    }
    .dpshijing>a>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .menmian{
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        height: .48rem;
        line-height: .48rem;
        color: #eee;
        background-color: rgba(0,0,0,.6);
    }
    .shangjiaxinxi{
        margin-bottom: .266667rem;
        padding: 0 .4rem .4rem;
        font-size: .27rem;
        background-color: #fff;
        color: #666;
    }
    .dpdizhi>li{
        display: flex;
        padding: .4rem .133333rem .4rem 0;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-right: -.4rem;
    }
    .dpdizhi>li:last-child{
        padding-bottom: 0;
        border-top: 1px solid #ddd;
    }

</style>