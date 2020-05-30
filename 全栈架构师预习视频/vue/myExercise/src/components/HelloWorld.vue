<template>
  <div class="hello">
    <div>this is my work</div>
    <el-button @click="login">登录</el-button>
    <div>
      <el-row>
        <el-col :span="10">
          <el-input type="text" v-model='text'></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addText">添加</el-button>
        </el-col>
      </el-row>

    </div>
    <ul>
      <li v-for="(item,index) in textArr " :key="index">{{item | formatter}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: '',
      textArr: []
    }
  },
  filters: {
    formatter (val) {
      return `${val}  君埋泉下泥销骨，我寄人间雪满头`
    }
  },
  methods: {
    login() {
      
    },
    addText () {
      this.textArr.push(this.text)
      this.text = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  text-align: left;
  height:50px;
  line-height: 50px;
}
a {
  color: #42b983;
}
</style>
