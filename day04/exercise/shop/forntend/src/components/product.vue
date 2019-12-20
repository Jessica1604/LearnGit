<template>
  <div class="product">
      <div>
          <el-button size="mini" type="primary" @click="addGood">添加</el-button>
      </div>
      <div class="table">
          <el-table
           :data="tableData"
          >
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
             <el-table-column  label="操作">
                 <template slot="scope.row">
                     <el-button type="primary" size="mini" @click="deleteGood">
                         删除
                     </el-button>
                     <el-button type="primary" size="mini" @click="addCart">添加购物车</el-button>
                 </template>
             </el-table-column>
          </el-table>
      </div>
      <el-dialog
       title="添加商品"
       :visible.sync="dialogVisible"
       width="30%">
       <el-form :model="form">
           <el-form-item>
               <el-input type="text" placeholder="请输入商品名称" v-model="form.title"></el-input>
           </el-form-item>
           <el-form-item>
               <el-input type="text" placeholder="请输入图片地址" v-model="form.imageUrl"></el-input>
           </el-form-item>
           <el-form-item>
               <el-input type=“text” placeholder="请输入价格" v-model="form.price"></el-input>
           </el-form-item>
           <el-form-item>
               <el-input type="text" placeholder="请输入说明" v-model="form.description"></el-input>
           </el-form-item>
       </el-form>
       <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="confirmForm">确 定</el-button>
       </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        title: '',
        price: '',
        imageUrl: '',
        description: ''
      }
    }
  },
  methods: {
    addGood () {
      this.form.title = ''
      this.form.price = ''
      this.form.imageUrl = ''
      this.form.description = ''
      this.dialogVisible = true
    },
    deleteGood () {},
    addCart () {},
    confirmForm () {
      this.dialogVisible = false
    }
  }
}
</script>
<style scoped>
</style>
