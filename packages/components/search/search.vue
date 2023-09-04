<template>
  <div class="search-container">
    <div class="condition-wrapper">
      <form-option-creator v-for="(item, index) in conditions" :key="index" :configuration="item" v-model="searchObj[item.key]"></form-option-creator>
    </div>
    <el-button type="primary" icon="el-icon-search" @click="searchEvent">搜索</el-button>
  </div>
</template>

<script>
import FormOptionCreator from "../formOptionCreator/formOptionCreator";

export default {
  name: 'kp-search',
  components: {
    FormOptionCreator
  },
  props: {
    conditions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchObj: {

      }
    }
  },
  methods: {
    /**
     * 搜索事件
     */
    searchEvent() {
      this.$emit('handleSearch', this.searchObj)
    }
  },
  watch: {
    conditions: {
      handler(newVal) {
        newVal.forEach(item => {
          this.$set(this.searchObj, item.key, item.val)
        })
      },
      immediate:true
    }
  }
}
</script>

<style lang="scss"  scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
}
</style>
