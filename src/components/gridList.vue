<template>
<div class="li_index">
    <ul>
        <template v-for="iconbtn in iconbtns">
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
    iconbtns:Object
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.li_index{
    display:block;
    white-space:nowrap;
    background-color: #ffffff;
    overflow:auto;
}
.line_li{
    display:inline-block;
    width: 25%;
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