<template>
  <div class="order">
      <div></div>
      <div class="table">
          <el-table
           :data="tableData"
          >
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="quantity" label="数量"></el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      tableData: []
    }
  }
}
</script>
<style scoped>
</style>
