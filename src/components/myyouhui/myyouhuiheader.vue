<template>
    <div>
        <!--头部开始-->
        <header class="header">
            <div class="arrow">
                <div class="arrow_left">
                    <a href="/"> < </a>
                </div>
            </div>
            <h1 class="my">我的优惠</h1>
            <a href="" class="hbduihuan">兑换红包</a>
        </header>
        <!--头部结束-->
        <nav class="youhuinav">
            <a href="" class="hongbaonum">
                <span class="hbnum">红包 0 个</span>
            </a>
            <a href="" class="hongbaonum">
                <span class="sjdjq">商家代金券 0 张</span>
            </a>
        </nav>
    </div>
</template>
<script>

</script>
<style>
    /*头*/
    .header{
        width: 100%;
        height:0.85rem;
        background: #FFD9B0;
        display: flex;
        justify-content:space-between;
    }
    .arrow{
        width: 0.87rem;
        height: 0.87rem;
    }
    .arrow_left{
        font-size: 0.55rem;
        font-family: "宋体";
        font-weight: 800;
        text-align: center;
        line-height: 0.87rem;
    }
    .arrow_left>a{
        color: #fff;

    }
    .my{
        font-weight: 300;
        font-size: 0.4rem;
        line-height: 0.87rem;
        color: #fff;
        font-family: "微软雅黑";
    }
    .hbduihuan{
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.9rem;
        width:1.5rem;
    }


</style>
<!--nav-->
<style>
    .youhuinav{
        color: #fff;
        font-size: .3rem;
        border-bottom: 1px solid #eee;
        display: flex;
        text-align: center;
        background: #FFD9B0;
    }

    .sjdjq{
        flex: 1;
        line-height: 1.066667rem;
        font-weight: 500;
        color: #fff;
        opacity: .69;
    }

    .hbnum:after{
        content: "";
        position: absolute;
        bottom: -.133333rem;
        left: 0;
        width: 100%;
        border-radius: 1.333333rem;
        border-bottom: .053333rem solid #fff;
    }
    .hbnum{
        position: relative;
        line-height: 0.7rem;
        font-weight: 500;
        color: #fff;
    }
    .hongbaonum{
        opacity: 1;
        flex: 1;
        line-height: 1rem;
        font-weight: 500;
    }

</style>