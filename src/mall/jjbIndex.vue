<template>
<div>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" width="100%"/>
  </van-swipe-item>
  </van-swipe>
  <Gridlist :icon-btns="icons"></Gridlist>
  <div style="height:10px;background:#F5F5F5;"></div>
</div>
</template>
<script>
import Gridlist from '../components/gridList.vue';
export default {
  name: 'jjbIndex',
  components:{Gridlist},
  data () {
    return {
      msg: 'Welcome to hqb',
      icons:[
          {name:"首发基金","src":"../../static/icon/dingtou.png","funC":"sfjj"},
          {name:"牛人牛基","src":"../../static/icon/xjbqy.png","funC":"nrnj"},
          {name:"定投精选","src":"../../static/icon/lckt.png","funC":"dtjx"},
          {name:"定投专区","src":"../../static/icon/wdgz.png","funC":"dtzq"},
          {name:"业绩排行","src":"../../static/icon/dingtou.png","funC":"yjph"},
          {name:"基金筛选","src":"../../static/icon/xjbqy.png","funC":"jjsx"},
          {name:"私募基金","src":"../../static/icon/lckt.png","funC":"smjj"}
      ],
      images: [
        '../../static/adv/moyijian.png',
        '../../static/adv/banner2.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>