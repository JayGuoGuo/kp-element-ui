<template>
  <div class="kp-table-container">
    <div class="tool-bar" v-if="true">
    
    </div>
    <el-table v-bind="$attrs">
      <slot></slot>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'kp-table',
  data(){
    return {}
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.kp-table-container {
  height: '100%'

  .tool-bar {
    display: flex
  }
}
</style>
