<template>
<div>
<mt-checklist
  title="复选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']">
</mt-checklist>
</div>
</template>
<script>

export default {
  name: 'DqbIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>