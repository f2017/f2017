<template>
<div>
    <my-header></my-header>
    <my></my>
    <app-footer></app-footer>
</div>
</template>
<script>
    import Footer from '../components/Footer.vue'
    import myheader from './my/myheader.vue'
    import my from './my/my.vue'
    export default{
        name: 'Order',
        components: {
            'my-header':myheader,
            'my':my,
            'app-footer': Footer
        }
    }
</script>
<style>

</style>