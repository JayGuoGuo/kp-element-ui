import KpTable from './table/table.vue'

const components = [
  KpTable
]

// 定义install方法
const install = function (Vue){
  // 遍历注册所有组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被Vue.use()安装

export default {
  install
}