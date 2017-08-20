<template>
    <div>
        <!--头部-->
        <header class="zhifuheader">
            <h1 class="zhifutitle">在线支付</h1>
        </header>
        <!--支付时间-->
        <div class="zhifutime">
            <p class="zftimeyu">
                支付剩余时间
            </p>
            <span class="zfdaojishi">00 : 12 : 08</span>
        </div>
        <section class="zfdianjia">
            <ul class="zfdjlist">
                <li class="zflistcon">
                    <span class="zfdjtext">和合谷（学府店）外卖订单</span>
                    <span class="xiangqing">
                        <a href="#/xiangqing">详情</a>
                    </span>
                    <span class="zhprice">¥ 23.00</span>
                </li>
            </ul>
            <section class="zhifufangshi">
                <div class="zffstitle">
                    <span>选择支付方式</span>
                </div>
                <ul class="zffsxuanze">
                    <li class="zfxzlist">
                        <div class="zhifubao">tu</div>
                        <div class="zhifuwz">
                            <p class="zfshow">支付宝</p>
                        </div>
                        <div class="duigou"></div>
                    </li>
                    <li class="zfxzlist">
                        <div class="zhifubao">tu</div>
                        <div class="zhifuwz">
                            <p class="zfshow">支付宝</p>
                        </div>
                        <div class="duigou"></div>
                    </li>
                    <li class="qtzffs">
                        <span class="zhifumore">其他支付方式</span>
                        <span></span>
                    </li>
                </ul>
            </section>
            <div class="queren">
                <div class="qrbtn">
                    <button class="anniu">确认支付 ¥23.00</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

</script>
<style scoped>
    body{
        background: #f5f5f5;
    }
    .zhifuheader{
        background-color: #3190e8;
        /*position: fixed;*/
        width: 100%;
        height: 1.28rem;
        line-height: 1.28rem;
        z-index: 9999;
    }
    .zhifutitle{
        text-align: center;
        font-size: .506667rem;
        color: #fff;
    }
    .zhifutime{
        background-color: #fff;
        color: #333;
        padding: .5rem;
        font-size: .72rem;
        line-height: .8rem;
        text-align: center;
    }
    .zftimeyu{
        font-size: .346667rem;
        color: #999;
    }
    .zfdaojishi{
        color: #333;
        font-size: .72rem;
        line-height: .8rem;
    }
    .zfdianjia{
        padding-bottom: 1.333333rem;
    }
    .zfdjlist{
        width: 100%;
        border-top: 1px solid #eee;
        border-bottom: 1.5px solid #eee;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
    }
    .zflistcon{
        /*flex-wrap: nowrap;*/
        padding: .3rem 0;
        font-size: .3rem;
        line-height: .426667rem;
        /*padding: 0 .4rem;*/
    }
    .zfdjtext{
        color: #333;
        display: inline-block;
        vertical-align: bottom;
        margin-right: .226667rem;
        max-width: 5.066667rem;
    }
    .xiangqing{
        display: inline-block;
        color: #999;
        padding-right: .4rem;
        vertical-align: bottom;
    }
    .zhprice{
        float: right;
        color: #ff6000;
    }
    .zffstitle{
        background-color: #f5f5f5;
        padding: .2rem .4rem .2rem;
        line-height: .32rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-size: .3rem;
        color: #999;
    }
    .zffsxuanze{
        background: #fff;
        padding: 0 0 0 .4rem;
    }
    .zfxzlist{
        position: relative;
        padding: .1rem .4rem .1rem 0;
        font-size: .453333rem;
        border-bottom: 1px solid #eee;

    }
    .zhifubao{
        display: inline-block;
        width: .96rem;
        height: .96rem;
        vertical-align: middle;
        background-repeat: no-repeat;
    }
    .zhifuwz{
        display: inline-block;
        vertical-align: middle;
        line-height: .4rem;
        margin-left: .1rem;

    }
    .zfshow{
        font-size: .35rem;
        color: #333;
    }
    .duigou{
        float: right;
        font-size: .3rem;
        margin-top: .3rem;
        overflow: hidden;
    }
    .duigou:after{
        content: "";
        display: block;
        width: .6rem;
        height: .6rem;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…AgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+) center center no-repeat;
        background-size: .533333rem .533333rem;
        position: absolute;
        right: .2rem;
        top: 50%;
        margin-top: -.266667rem;
    }
    .qtzffs{
        background-color: #fff;
        color: #666;
        font-size: .3rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
    }
    .zhifumore{
        margin-left: -.3rem;
    }
    .queren{
        float: left;
        width: 100%;
    }
    .qrbtn{
        margin: .05rem .2rem 0;
    }
    .anniu{
        font-size: .35rem;
        background-color: #4cd964;
        padding: .2rem;
        width: 100%;
        border-radius: .133333rem;
        color: #fff;
        border:0;
    }


</style>