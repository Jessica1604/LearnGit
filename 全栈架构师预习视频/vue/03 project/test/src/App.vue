<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span v-if="isLogin">
          <span>{{welcome}}</span>
          <el-button>注销</el-button>
      </span>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState('user', ['isLogin']),
    ...mapGetters('user', ['welcome'])
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
