<template>
    <div>
        <food-header></food-header>
        <food-list></food-list>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Footer from './Footer.vue'
    import FoodHeader from './foodlist/FListHeader.vue'
    import FoodList from './foodlist/foodList.vue'
    export default{
        name:'Shop',
        components:{
            'food-header':FoodHeader,
            'food-list':FoodList,
            'app-footer':Footer
        }
    }
</script>