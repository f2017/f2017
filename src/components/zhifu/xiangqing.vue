<template>
    <div class="xiangqing">
        <div class="scroll">
            <h1 class="xqtitle">和合谷（学府店）外卖订单</h1>
            <h2 class="xqtitle2">
                <div class="name">
                    <span>订单详情</span>
                </div>
            </h2>
            <div class="xqdesc">
                <p class="xqtext">毛宁(女士) 150****6483
                    喜羊羊宾馆山西省太原市小店区平阳路大马村邮政口巷内10米
                    -
                    鸡丁套餐一  x1</p>
            </div>
        </div>
        <button class="x">
            <a href="#/zhifu">X</a>
        </button>
    </div>
</template>
<script>

</script>
<style scoped>
    .xiangqing{
        top: 0;
        background-color: rgba(0,0,0,.81);
        z-index: 10000;
        color: #fff;
        padding: 3.466667rem 0 3.266667rem;
        height: 100%;
        overflow-y: scroll;
        width: 100%;
    }
    .scroll{
        height: 100%;
        overflow-y: scroll;
        width: 100%;
    }
    .xqtitle{
        font-size: .4rem;
        font-weight: 400;
        text-align: center;
    }
    .xqtitle2{
        font-size: .373333rem;
        text-align: center;
        padding: 0 .533333rem;
        margin-top: 1.333333rem;
    }
    .name{
        position: relative;
    }
    .name:before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #666;
        margin: auto;
        width: 100%;
        height: 0;
        border-bottom: 1.5px solid #666;
    }
    .name>span{
        border-radius: .4rem;
        padding: .133333rem .2rem;
        font-weight: 400;
        position: relative;
        background-color: #2e2e2e;
        border: 1.5px solid #666;
    }
    .xqdesc{
        padding: .466667rem .533333rem .4rem;
        font-weight: 400;
        font-size: .346667rem;
    }
    .xqtext{
        white-space: pre-wrap;
    }
    button.x{
        display: block;
        border: 1.5px solid #505050;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin: 0 auto;
        font-size: .666667rem;
        font-weight: 100;
        background-color: rgba(0,0,0,0);
        padding: 0;
        margin-top: 2rem;
    }
    button.x>a{
        color: #fff;
    }

</style>