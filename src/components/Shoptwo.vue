<template>
    <div>
        <shoptwo-header></shoptwo-header>
        <shop-two></shop-two>
    </div>

</template>
<script>
    import ShopTwoHeader from './shoptwo/shoptwoheader.vue'
    import Shoptwo from './shoptwo/shoptwo.vue'
    export default {
        name:'shoptwo',
        components:{
            'shoptwo-header':ShopTwoHeader,
            'shop-two':Shoptwo
        }
    }
</script>
<style>

</style>