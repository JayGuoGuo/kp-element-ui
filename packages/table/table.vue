<template>
  <div>
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
</style>
