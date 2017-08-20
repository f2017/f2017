<template>
    <div class="myheader">
        <!--头部开始-->
        <header class="header">
            <div class="arrow">
                <div class="arrow_left"><</div>
            </div>
            <h1 class="my">我的</h1>
        </header>
        <!--头部结束-->
        <!--账户信息开始-->
        <section>
            <div class="profile">
                    <span class="profile_img">
                        <img src="" alt="">
                    </span>
                    <div class="profile_center">
                        <p class="num">3801b7af3</p>
                        <p class="pho">
                            <span class="icon"></span>
                            <span>150****6483</span>
                        </p>
                    </div>
                <div class="arrow_right"><span> > </span>  </div>
            </div>
        </section>
        <!--账户信息结束 -->
    </div>
</template>
<script>

</script>
<style>
    /*头*/
    .header{
        position: relative;
        width: 100%;
        height:0.85rem;
        background: #FFD9B0;
        display: flex;
    }
    .arrow{
        width: 0.87rem;
        height: 0.87rem;
        flex-direction: row;
    }
    .arrow_left{
        font-size: 0.55rem;
        color: #fff;
        font-family: "宋体";
        font-weight: 800;
        text-align: center;
        line-height: 0.87rem;
    }
    .my{
        position: absolute;
        top:0;
        left:50%;
        font-weight: 300;
        font-size: 0.5rem;
        line-height: 0.87rem;
        color: #fff;
        transform: translateX(-50%);
        font-family: "新宋体";
    }


    /*账户信息*/
    .profile{
        padding: 0.4rem 0.4rem;
        display: flex;
        background: #FFD9B0;
        position: relative;
    }
    .profile_img{
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        border-radius: 50%;
        background: #fff;
    }
    .profile_center{
        padding: 0.2rem 0;
        margin-left: 0.36rem;
    }
    .num{
        font-size: 0.47rem;
        margin-bottom: 0.2rem;
        font-weight: 400;
        color: #fff;
    }
    .pho{
        font-size: 0.31rem;
        color: #fff;
    }
    .arrow_right{
        position: absolute;
        font-family: "宋体";
        color: #fff;
        font-size: 0.4rem;
        font-weight: bold;
        right: 0.35rem;
        bottom:1.1rem

    }
</style>