<template>
<div>
  <div class="zc_lc">
    <div v-if="!isLogin" class="red_area_zc">
        <span class="zc_title">理财总资产</span>
            <div class="login_submit">
                <span style="font-size: 17px;color: #e84a55;" @click="toLogin">请登录交易账户</span>
            </div>
    </div>
    <div v-else class="red_area_zc">
        <span class="zc_title">{{total_asset}}元</span>
            <div style="padding-top: 4px;">
                <span style="font-size: 17px;color: #ffffff;">理财持仓总资产</span>
            </div>
    </div>
  </div>
  <Gridlist :iconbtns="icons"></Gridlist>
</div>
</template>
<script>
import Gridlist from '../components/gridList.vue';
export default {
  name: 'MallIndex',
  components: { Gridlist },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLogin:false,
      total_asset:'0',
      icons:[
          {name:"定投精选","src":"../../static/icon/dingtou.png","funC":"dtjx"},
          {name:"我的理财","src":"../../static/icon/xjbqy.png"},
          {name:"产品查询","src":"../../static/icon/lckt.png"},
          {name:"我的关注","src":"../../static/icon/wdgz.png"},
      ]
    }
  },
  methods:{
      toLogin(){
        this.$axios.get('http://219.143.202.5:7081/servlet/json', {
         params: {
         funcNo: '1000000'
        }
        })
       .then((response) => {
         console.log(response)
         let publicKey = response.data.results[0].modulus
         let model = response.data.results[0].publicExponent
         let data = this.$jsencrypt.prototype.setPublicKey(publicKey,)
         let encrypted = this.$jsencrypt.prototype.encrypt('123456')
         console.log(encrypted)
        })
       .catch((error) => {
         console.log(error);
        });
      },
      goto(methodsWords) {
         thismethodsWords
      },
      dtjx(){
        console.log('success')
      }

      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
    margin-top: 2px;
    width:100%;
}
.zc_lc{background-color: #ffffff;padding: 10px 15px 10px;}
.zc_title{margin-top: 30px;color: #ffffff;font-size: 20px;}
.red_area_zc {padding-top: 25px;padding-bottom:25px;background-color:#e84a55;text-align: center;border-radius: 8px;}
.login_submit{margin-top: 20px;text-align: center;margin-left: auto;margin-right: auto;width:221px;border-radius:20px;background-color:#ffffff;line-height: 35px;height: 35px; }
</style>