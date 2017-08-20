<template>
    <div>
        <zhifu-header></zhifu-header>
    </div>
</template>
<script>
    import zhifuheader from './zhifu/zhifuheader.vue'
    import zhifu from './zhifu/xiangqing.vue'
    export default{
        name: 'Zhifu',
        components: {
            'zhifu-header':zhifuheader,
        }
    }
</script>
<style>

</style>