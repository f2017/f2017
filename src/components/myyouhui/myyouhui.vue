<template>
    <div>
        <div class="tuijian">
            <section class="tjyj">
                <a href="" class="tuijiantj">
                    <h3 class="tjtext">推荐有奖</h3>
                    <p class="xianjintext">5元现金拿不停</p>
                    <img src="" alt="" class="xianjinimg">
                </a>
                <a href="" class="tuijiantj">
                    <h3 class="tjtext">免费霸王餐</h3>
                    <p class="xianjintext">领20元红包</p>
                    <img src="" alt="" class="xianjinimg">
                </a>
            </section>
        </div>
        <section class="like">
            <h3 class="liketitle">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAACCgoKXl5eCgoKBgYGFhYWMjIyBgYGCgoKCgoKIiIiCgoKCgoKEhISHh4eKioqCgoKBgYGDg4OCgoKDg4OFhYWCgoKCgoKCgoKCgoKCgoKCgoKDg4ODg4OCgoKEhISBgYGCgoKCgoKBgYGDg4OBgYGo6ngVAAAAJXRSTlMArAf48ygN7uDDGtNsNRgT6edlUj4hybyckEmpdXBZV9uwkoZ7SjvxjQAAASdJREFUOMuV0tmSgjAQheETgoCALIqKuC//+7/iVBhGRiVVM98NqSKkD93RH83umzo+y4mW28TWm/tMo2KPs3XrVc1gX2iwiHFCd8KBUbwY3oeA6fr9KRDn66Do9u6TfkeUQNXoWxQyT9VrKkgiSTeIx0BpMwav4CaVIaw0aQVhqRw28thALgNLeSzBKIGZt32QKIZIHhHEshDIIwDrSqzlsXYltnCWx8nN5wFXeVzh4ZKy0KQF/R8ayILJiBkYlyR0zwkGwvXQL3b6sOPZ4xbI9eYItD/F5sDqY5LMn9HKDOzppQMWslJPxQU4vp5/KfRLmrmkwVDS5cvSt8HNYbiOab+MPtpigKqTugowU607WKBtAXvQpKamVzfyKA2AKeWXW5vrf74Ar1YhNkb3KMgAAAAASUVORK5CYII=" alt="">
                <span>猜你喜欢</span>
            </h3>
            <section class="likecon">
                <div class="likeconleft">
                    <img class="lkleftimg" src="https://fuss10.elemecdn.com/6/fb/1bb622b0c2470156f0a8b2e575556jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt="">
                    <div class="lkleft_title">

                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
<script>

</script>
<style>
    .tjyj{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 1.6rem;
        margin: .266667rem .266667rem 0;
    }
    .tuijiantj{
        background-color: #fff;
        position: relative;
        padding-left: .4rem;
        width: 4.64rem;
        box-shadow: 0 0.026667rem 0.08rem rgba(0,0,0,.1);
        border-radius: .053333rem;
    }
    .tjtext{
        color: #666;
        margin-top: .4rem;
        font-size: .35rem;
        font-weight: 600;
    }
    .xianjintext{
        margin-top: .1rem;
        color: #999;
        font-size: .22rem;
    }
    .xianjinimg{
        position: absolute;
        top: 50%;
        right: .2rem;
        transform: translateY(-50%);
        height: 1rem;
        float: right;
        width: 100%;
    }
    .like{
        background-color: #fff;
        text-align: center;
    }
    .liketitle{
        padding-top: .266667rem;
        line-height: 1.066667rem;
        font-size: .35rem;
        color: #333;
        font-weight: 700;
        text-align: center;
    }
    .liketitle>img{
        width: .3rem;
        height: .3rem;
        margin-right: .1rem;
    }
    .liketitle:before{
        content: "";
        display: inline-block;
        margin: 0 .1rem;
        width: .24rem;
        height: 1px;
        background-color: currentColor;
        vertical-align: middle;
    }
    .liketitle:after{
        content: "";
        display: inline-block;
        margin: 0 .133333rem;
        width: .24rem;
        height: 1px;
        background-color: currentColor;
        vertical-align: middle;
    }
    .likecon{
        display: flex;
        justify-content: space-between;
    }
    .likeconleft{
        background: #fff;
        border: 1px solid #eee;
        width: 50%;
    }
    .lkleftimg{
        width: 100%;
    }
</style>