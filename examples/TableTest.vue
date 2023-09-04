<template>
  <kp-table :data="list" row-key="id" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    :conditions="conditions">
    <el-table-column prop="name" label="大类"></el-table-column>
    <el-table-column prop="code" label="类别代码"></el-table-column>
  </kp-table>
</template>
<script>
import KpTable from '../packages/table/table.vue'
export default {
  name: 'TableTest',
  components: {
    KpTable
  },
  data() {
    return {
      list: [
        {
          "isCheck": "1",
          "code": "11",
          "parentCode": "0",
          "children": [
            {
              "isCheck": "1",
              "code": "1101",
              "parentCode": "11",
              "children": [
                {
                  "isCheck": "1",
                  "code": "110101",
                  "parentCode": "1101",
                  "children": [],
                  "isDelete": "0",
                  "name": "中餐馆",
                  "operatTime": "2023-08-24T17:53:18",
                  "id": "1694649069465927683",
                  "sort": 0,
                  "operator": "root"
                },
                {
                  "isCheck": "1",
                  "code": "110102",
                  "parentCode": "1101",
                  "children": [],
                  "isDelete": "0",
                  "name": "异国风味",
                  "operatTime": "2023-08-24T17:53:18",
                  "id": "1694649069465927684",
                  "sort": 0,
                  "operator": "root"
                },
                {
                  "isCheck": "1",
                  "code": "110103",
                  "parentCode": "1101",
                  "children": [],
                  "isDelete": "0",
                  "name": "地方风味与名店",
                  "operatTime": "2023-08-24T17:53:18",
                  "id": "1694649069465927685",
                  "sort": 0,
                  "operator": "root"
                }
              ],
              "isDelete": "0",
              "name": "餐馆",
              "operatTime": "2023-08-24T17:53:18",
              "id": "1694649068757090305",
              "sort": 0,
              "operator": "root"
            }
          ],
          "isDelete": "0",
          "name": "餐饮住宿",
          "operatTime": "2023-08-24T17:53:18",
          "id": "1694649068559958017",
          "sort": 0,
          "operator": "root"
        }
      ],
      conditions: [
        {
          tag: 'kp-input',
          key: 'userName',
          val: '',
          // 组件属性
          attrs: {
            placeholder: '请输入用户名',
          },
          // 组件样式
          styleObj: {
            width: '150px'
          }
        },
        {
          tag: 'kp-select',
          key: 'roleIds',
          val: '',
          // 组件属性
          attrs: {
            placeholder: '请选择角色',
          },
          // 组件样式
          styleObj: {
            width: '180px'
          }
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
