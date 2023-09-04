<!-- 组件生成器 -->
<template>
  <component :is="componentName" v-bind="{ ...configuration.attrs }" :style="{ ...configuration.styleObj }"
    class="form-option-class"></component>
</template>
<script>
import KpInput from '../form/input.vue'
import KpSelect from '../form/select.vue'

export default {
  name: 'form-option-creator',
  components: {
    KpInput,
    KpSelect
  },
  props: {
    configuration: Object, // 表单项的配置
  },
  computed: {
    componentName() {
      let componentName = ''
      switch (this.configuration.tag) {
        case 'kp-input':
          componentName = 'KpInput'
          break
        case 'kp-select':
          componentName = 'KpSelect'
          break
        default:
          componentName = 'KpInput'
          break

      }
      return componentName
    },
  },
  data() {
    return {
    }
  },
  methods: {
    inputEvent() {

    }
  }
}
</script>
<style lang='scss' scoped>
.form-option-class {
  margin-right: 5px;
}
</style>
