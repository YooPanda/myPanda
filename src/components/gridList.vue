<template>
<div class="li_index">
    <ul>
        <template v-for="iconbtn in iconBtns">
            <li class="line_li" @click="goto(iconbtn.funC)">
                <img :src="iconbtn.src" class="li_Img"/>
                <div class="li_desc">{{iconbtn.name}}</div>
            </li>
        </template>
    </ul>
</div>
</template>
<script>

export default {
  props:{
    iconBtns:Array
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  methods:{
    goto(methodsWords) {
      this[methodsWords]()
    },
    dtjx(){
        console.log('dtjx')
    },
    wdlc(){
        console.log('wdlc')
    },
    cpcx(){
        console.log('cpcx')
    },
    wdgz(){
        console.log('wdgz')
    },
    sypz(){
        console.log('sypz')
    },
    yhlc(){
        console.log('yhlc')
    },
    zgjh(){
        console.log('zgjh')
    },
    xtjh(){
        console.log('xtjh')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.li_index{
    display:block;
    
    background-color: #ffffff;
    overflow:auto;
    margin-top: 10px;
}
.line_li{
    display:inline-block;
    width: 25%;
    margin-bottom: 15px;
    height: 50px;
    text-align: center;
}
.li_Img{
    width:25px;
    height: 25px;
    margin-right: auto;
    margin-left: auto;
}
.li_desc{
    margin-top: 8px;
    font-size: 12px;
    color:#666666;
}
</style>