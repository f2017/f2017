<template>
    <div>
        <myyh-header></myyh-header>
        <my-youhui></my-youhui>
    </div>
</template>
<script>
    import myyouhuiheader from './myyouhui/myyouhuiheader.vue'
    import myyouhui from './myyouhui/myyouhui.vue'
    export default{
        name:'myyouhui',
        components:{
            'myyh-header':myyouhuiheader,
            'my-youhui':myyouhui
        }
    }
</script>
<style>

</style>