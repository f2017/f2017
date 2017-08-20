<template>
    <div>
        <div>
           这是order
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Footer from './Footer.vue';
    export default{
        name: 'Order',
        components: {
            'app-footer': Footer
        }
    }
</script>
<style>

</style>