<template>
  <div class="cart">
    <div>
      <el-button type="primary" size="mini" @click="addOrders">添加订单</el-button>
    </div>
    <div class="table">
        <el-table
           :data="tableData"
          >
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="quantity" label="数量"></el-table-column>
             <el-table-column  label="操作">
                 <template slot="scope.row">
                     <el-button type="primary" size="mini" @click="deleteGood">
                         删除
                     </el-button>
                 </template>
             </el-table-column>
          </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    addOrders () {},
    deleteGood () {}
  }
}
</script>
<style scoped>
</style>
