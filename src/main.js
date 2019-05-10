// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import JSEncrypt from 'jsencrypt'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$jsenc = JSEncrypt
Vue.use(MintUI)
Vue.use(Vant)

Vue.prototype.$getssCode = function(password,publickey){
  let encrypt = new JSEncrypt()
  console.log(encrypt);
  encrypt.setPublicKey(publickey)
  let data = encrypt.encrypt(password)
  return data
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
