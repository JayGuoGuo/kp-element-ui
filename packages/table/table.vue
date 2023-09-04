<template>
  <div class="kp-table-container">
    <!-- 工具条 -->
    <div class="tool-bar" v-if="toobarStatus">
      <!-- 搜索条件区 -->
      <div class="search-condition">
        <!-- 搜索条件 -->
        <kp-search :conditions="conditions" @handleSearch="handleSearch" v-if="conditions.length > 0"></kp-search>
        <!-- 操作按钮区 -->
        <div class="operate-btns">
          <el-button type="primary" icon="el-icon-plus" @click="add">新增</el-button>
        </div>

      </div>

    </div>

    <!-- 表格 -->
    <el-table ref="tableRef" v-bind="$attrs">
      <slot></slot>
    </el-table>

    <!-- 分页条 -->
    <el-pagination :page-sizes="pageSizes" :current-page="currentPage" :total="total">
    </el-pagination>

    <!-- 新增/编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" :title="title">
      <el-form ref="form" v-model="formData" :rules="rules">
        <el-form-item style="text-align: center;">
          <el-button @click="closeDialog">关闭</el-button>
          <el-button type="primary" @click="submit('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import KpSearch from '../components/search/search.vue'

export default {
  name: 'kp-table',
  components: {
    KpSearch
  },
  props: {
    // 工具条显示状态
    toobarStatus: {
      type: Boolean,
      default: () => true
    },
    // 表格列
    columns: {
      type: Array,
      default: () => []
    },
    // 表单校验
    rules: {
      type: Object,
      default: () => { }
    },
    // 工具条按钮
    toolbarBtns: {
      type: Array,
      default: () => []
    },
    // 分页数组
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 总数据
    total: {
      type: Number,
      default: () => 0
    },
    // 搜索条件
    conditions: Array
  },
  data() {
    return {
      dialogVisible: false, // 弹窗状态
      title: '', // 弹窗标题
      formData: {}, // 表单数据
      currentPage: 1, // 分页索引
      nodeRelationshipObj: {}, // 节点id对应上级id数组
      value: ''
    }
  },
  mounted() {
    if (this.$refs['tableRef']._props.treeProps.hasChildren === 'hasChildren') {
      console.log('是treeTable', this.$refs['tableRef'].data)
      this.saveTreeParentIdArray()
    }
  },
  methods: {
    /**
     * 工具条搜索
     * @param searchKeys  搜索关键字
     */
    handleSearch(searchKeys){
      console.log('searchKeys', searchKeys)
    },
    /**
     * 新增
     */
    add() {
      this.title = '新增'
      this.dialogVisible = true
    },
    /**
     * 编辑
     */
    edit() {
      this.title = '编辑'
      this.dialogVisible = true

    },
    /**
     * 关闭弹窗
     */
    closeDialog() {
      this.dialogVisible = false
      this.resetForm('form')

    },
    /**
     * 提交新增/编辑表单
     * @param {*} formName 表单名称
     */
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    /**
     * 重置表单
     * @param {*} formName 表单名称
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 存储每个节点对应的上级节点id数组以及上级节点在children对象中对应索引的数组
     */
    saveTreeParentIdArray() {
      this.nodeRelationshipObj = this.handleParentIdArray(this.$refs['tableRef'].data)
    },
    /**
     * 处理treeTable数据，以键值对形式存储父级id的数组
     * @param {*} list 数组
     * @param {*} parentInfo 上级节点信息
     */
    handleParentIdArray(list, parentInfo = { parentIdArr: ["0"], parentIndexArr: [] }) {
      let relationshipObj = {}
      list.forEach((item, index) => {

        relationshipObj[item.id] = { parentIdArr: parentInfo.parentIdArr, parentIndexArr: parentInfo.parentIndexArr }

        if (item.children.length > 0) {
          const obj = this.handleParentIdArray(item.children, { parentIdArr: [...parentInfo.parentIdArr, item.id], parentIndexArr: [...parentInfo.parentIndexArr, index] })
          relationshipObj = { ...relationshipObj, ...obj }
        }

      })

      return relationshipObj;
    },
    createConditionElement() {
    }
  }
}
</script>
<style lang="scss" scoped>
.kp-table-container {
  height: '100%';

  .tool-bar {
    .search-condition {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
