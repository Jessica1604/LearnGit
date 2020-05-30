<template>
  <div>
    {{list}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: '123'
    }
  },
  mounted () {
    this.list = 'I need hard work'
  }
}
</script>

<style scoped>

</style>
