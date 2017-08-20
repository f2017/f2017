<template>
    <footer>
        <ul class="footer">
            <li>
                <a href="#/">
                    <div>abc</div>
                    <span>外卖</span>
                </a>
            </li>
            <li>
                <a href="#/order">
                    <span>发现</span>
                </a>
            </li>
            <li>
                <a href="#/me">
                    <span>订单</span>
                </a>
            </li>
            <li>
                <a href="#/my">
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </footer>
</template>
<script>

</script>
<style>
    footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: .12rem;
        background-color: #fff;
        height: 1.333333rem;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .footer{
        width: 100%;
        height: 100%;
    }
    .footer>li{
        text-align: center;
        float: left;
        width: 25%;
        font-size: 0.25rem;
        height: 100%;

    }
    .footer>li>a{
        display: block;
        width: 100%;
        height: 100%;
        color: #999999;
    }
</style>