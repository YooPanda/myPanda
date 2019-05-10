<template>
  <div id="app">
    
    <div class="chart" style="height:42px;" v-if="isIndex">
      <router-link to="/MallIndex">
        <span :class="{up:isup1}" @click="sy">首页</span>
      </router-link>
      <router-link to="/HqbIndex">
        <span :class="{up:isup2}" @click="hqb">活期宝</span>
      </router-link>
      <router-link to="/DqbIndex">
        <span :class="{up:isup3}" @click="dqb">定期宝</span>
      </router-link>
      <router-link to="/JjbIndex">
        <span :class="{up:isup4}" @click="jjb">基金宝</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isup1:true,
      isup2:false,
      isup3:false,
      isup4:false,
      isIndex:true
    }
  },
  methods:{
      sy () {
        this.isup1=true;
        this.isup2=false;
        this.isup3=false;
        this.isup4=false;
        //this.isIndex=false;
      },
      hqb () {
        this.isup1=false;
        this.isup2=true;
        this.isup3=false;
        this.isup4=false;
      },
      dqb () {
        this.isup1=false;
        this.isup2=false;
        this.isup3=true;
        this.isup4=false;
      },
      jjb () {
        this.isup1=false;
        this.isup2=false;
        this.isup3=false;
        this.isup4=true;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.class {
  list-style:none;
  width:100%;
  z-index: 999;
  -webkit-transform:translateZ(0);
}

.chart span { 
  float:left; 
  width:24%;
  height:40px; 
  line-height:40px; 
  font-size:14px;
  cursor:pointer; 
  background-color:#ffffff; 
  text-align:center;  
  font-family:Microsoft YaHei;
  }
.up { 
  background:white;
  color:#e84a55;
  border-bottom: solid 2px #e84a55;
  font-weight:bolder;
  }
</style>
