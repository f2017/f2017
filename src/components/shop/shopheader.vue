<template>
    <!--头部开始-->
    <div class="hea">
        <div class="fanhui"><a href="/">&lt;</a></div>
        <div class="header-center" v-for="v in data">
            <img src="https://fuss10.elemecdn.com/e/5c/0323d9c3e8dbbd927cf163778b8fapng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" class="headertu">
            <div class="jianjie">
                <h3>{{v.name}}</h3>
                <p>蜂鸟专送 / 27分钟送达 / 配送费¥3</p>
                <div class="gonggao">
                    <span>公告：</span>
                    <span>欢迎光临，用餐高峰期请提前下单。</span>
                </div>
            </div>
        </div>
        <div class="youhui">
            <span class="span1">减</span>
            <span>满25减10，满40减18，满60减28</span>
            <div class="huodong">6个活动</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'shopheader',
        props:['data']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    .hea{
        width:100%;
        height: auto;
        padding: 10px 15px;
        background: #bcb5c4;
        overflow: hidden;
    }
    .fanhui{
        font-size:25px;
        line-height: 0.5rem;
        font-family: "宋体";
        font-weight: 300;
    }
    .fanhui>a{
        color: #fff;
    }
    .header-center{
        padding: 0.2rem 0 0;
        display: flex;
    }
    .headertu{
        width: 1.4rem;
        height: 1.3rem;
        margin-right: 0.17rem;
    }
    .jianjie h3{
        font-weight: 700;
        font-size: 0.35rem;
        color: #fff;
        line-height:  1.2em;;
    }
    .jianjie p{
        font-size: 0.12rem;
        color: #fff;
        line-height: .5rem;
    }
    .gonggao{
        font-size: 0.12rem;
        color: #fff;
        line-height: .5rem;
    }
    .youhui{
        margin-top: 0.1rem;
        width: 100%;
        font-size: 0.12rem;
        line-height: 0.2rem;
        color: #fff;
    }
    .span1{
        background-color: red;
    }
    .liebiao{
        display: flex;
        justify-content: space-around;
    }
    .huodong{
        float: right;
    }


</style>
