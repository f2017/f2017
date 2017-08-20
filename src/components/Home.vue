<template>
    <div>
        <div>
            <a href="#/shop">商品1</a>
            <a href="#/shoptwo">商品2</a>
            <a href="#/zhifu">支付</a>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Footer from './Footer.vue';
    export default{
        name: 'Home',
        components: {
            'app-footer': Footer
        }
    }
</script>
<style>

</style>