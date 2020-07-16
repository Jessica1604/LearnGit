<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{this.$store.state.count}}</div>
    <el-button @click="add">增加</el-button>
    <el-button @click="addAgin">再增加</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted () {
    console.log(this.$store.state.count)
    // this.$store.state.count;
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    addAgin() {
      this.$store.commit('increment')

    }
  },
}
</script>

