<template>
  <div class="hello">
    <shopheader v-bind:data="shopdata"></shopheader>
    <shop :datas="shop" :shopcons="shopcon"></shop>
    <shopfooter></shopfooter>
  </div>
</template>

<script>
import shopheaderr from './shop/shopheader.vue';
import shop from './shop/shop.vue';
import shopfooter from './shop/shopfooter.vue'
export default {
  name: 'hello',
  data () {
    return {
      shopdata:[
          {id:1,name:'米多面多（亲贤店）',info:'3元',img:'https://fuss10.elemecdn.com/e/5c/0323d9c3e8dbbd927cf163778b8fapng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'},
          ],
      shop:[
          {id:1,sid:1,name:'热销',desc:'大家喜欢吃，才叫真好吃。'},
          {id:2,sid:1,name:'优惠',desc:'美味又实惠, 大家快来抢!'},
          {id:3,sid:1,name:'卤饭套餐',desc:''},
          {id:4,sid:1,name:'豪华套餐',desc:''}
      ],
      shopcon:{
          '热销':[
              {id:1,listid:1,sid:1,name:'特制卤蛋',desc:'特制卤蛋－味道鲜香，传统工艺卤制，小火慢热，卤汁渗透到蛋黄，味道香醇',price:2,imgs:'https://fuss10.elemecdn.com/b/5f/953f1e61e44138b3033c596b9c31cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
              {id:2,listid:1,sid:1,name:'秘制鸡腿',desc:'秘制鸡腿－香在口，醇在心。秘制的绝味老汤文火慢卤，浓郁的香味渗入整个鸡腿中，每一口都鲜香无比',price:6,img:'https://fuss10.elemecdn.com/6/dc/71b26a9a61bebf2d124946faf25bajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
                  ],
          '优惠':[
              {id:3,listid:2,sid:1,name:'秘制丸子.',desc:'秘制丸子.－秘制丸子以优质五花肉精制而成，口感味道独特',price:1.4,imgs:'https://fuss10.elemecdn.com/9/8b/30afbff1c9cd47defd56e8a0983acjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
              {id:4,listid:2,sid:1,name:'英潮辣椒酱',desc:'魔鬼特辣酱，鲁西牛肉酱，虎皮辣椒酱随机发放，也可备注。',price:2.1,imgs:'https://fuss10.elemecdn.com/1/d3/c08c0db8e5e2a23ff9f0654b08df5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
          ],
          '卤饭套餐':[
              {id:5,listid:3,sid:1,name:'【卤蛋套餐】精品土豆牛肉饭+卤蛋+蛋花汤',desc:'',price:28,imgs:'https://fuss10.elemecdn.com/2/ba/6d33401170c598406ddc3751ea242jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
              {id:6,listid:3,sid:1,name:'【卤蛋套餐】红烧茄子饭+卤蛋+蛋花汤',desc:'',price:15,imgs:'https://fuss10.elemecdn.com/a/23/47dbd478c8c8c3807c42633cf6518jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
          ],
          '豪华套餐':[
              {id:7,listid:4,sid:1,name:'【鸡腿套餐】精品土豆牛肉饭+鸡腿+蛋花汤',desc:'',price:24,imgs:'https://fuss10.elemecdn.com/3/28/3f4b812369b6da2f40ba478c598b1jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
              {id:8,listid:4,sid:1,name:'【鸡腿套餐】红烧茄子饭+鸡腿+蛋花汤',desc:'',price:25,imgs:'https://fuss10.elemecdn.com/a/82/4a24c10b87d7975c3da127fcaa6a1jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'},
          ]
      }



    }
  },
  components:{
      'shopheader':shopheaderr,
      'shop':shop,
      'shopfooter':shopfooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
