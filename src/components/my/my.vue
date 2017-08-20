<template>
    <div class="mycon">
        <div class="yhjf">
            <a href="#/myyouhui" class="myyh">
                <p class="myyhp1">
                    <span class="myyouhuinum">0</span>
                    <span class="myge">个</span>
                </p>
                <p class="myyhfont">优惠</p>
            </a>
            <a href="" class="myyh">
                <p class="myyhp1">
                    <span class="myyouhuinum jif">0</span>
                    <span class="myge">分</span>
                </p>
                <p class="myyhfont">积分</p>
            </a>
        </div>

        <div class="mydingdan">
            <a href="#" class="dingdan1">
                <div class="ddicon">
                    <span>*</span>
                </div>

                <div class="mydd">
                    我的订单
                    <span class="ddjiantou"> > </span>
                </div>
            </a>
            <a href="#" class="dingdan1">
                <div class="ddicon">
                    <span>*</span>
                </div>

                <div class="mydd">
                    积分商城
                    <span class="ddjiantou"> > </span>
                </div>
            </a>
            <a href="#" class="dingdan1">
                <div class="ddicon">
                    <span>*</span>
                </div>

                <div class="mydd">
                    会员卡
                    <span class="ddjiantou"> > </span>
                </div>
            </a>
        </div>

        <div class="mydingdan">
            <a href="#" class="dingdan1">
                <div class="ddicon">
                    <span>*</span>
                </div>

                <div class="mydd">
                    服务中心
                    <span class="ddjiantou"> > </span>
                </div>
            </a>
            <a href="#" class="dingdan1">
                <div class="ddicon">
                    <span>*</span>
                </div>

                <div class="mydd">
                    下载APP
                    <span class="ddjiantou"> > </span>
                </div>
            </a>
        </div>
    </div>
</template>
<script>

</script>
<style>
    html{
        width: 100%;
        height: 100%;
        background: #F5F5F5;
    }
    .yhjf{
        display: table;
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
    .myyh{
        display: table-cell;
        width: 33.3333%;
        text-align: center;
    }
    .myyhp1{
        height:1rem;
     }

    .myyh:not(:last-child){
        border-right: 1px solid #ddd;
    }
    .myyouhuinum{
        font-size: .5rem;
        font-weight: 700;
        color: rgb(255, 95, 62);
    }
    .myyhfont{
        margin-top: .133333rem;
        font-size: .25rem;
        font-weight: 500;
        color: #666;
    }
    .myge{
        font-size: .25rem;
    }
    .jif{
        color: rgb(106, 194, 11);
    }
    .dingdan1{
        font-size: 0.4rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 0.5rem;
    }
    .mydingdan{
        margin-top: .266667rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: .453333rem;
        line-height: .453333rem;
        background: #fff;
    }
    .ddicon{
        margin-right: 0.3rem;
    }
    .mydd{
        color: #444444;
        font-size: 0.37rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: .25rem .15rem .25rem 0;
    }
    .dingdan1:not(:last-child) .mydd{
        border-bottom: 1px solid #ddd;
    }
    .ddjiantou{
        font-family: '宋体';
        right: 0.3rem;
        font-weight: 600;
        color: #ccc;
        font-size: 0.3rem;

    }



</style>