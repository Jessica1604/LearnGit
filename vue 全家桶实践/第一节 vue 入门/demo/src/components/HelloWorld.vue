<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$attrs.foo}}</p>
    <p>{{bg}}</p>
    <p>{{someThing}}</p>
    <p>
      <slot></slot>
    </p>
    <p>
      <slot name="content" :bg="bg"></slot>
    </p>
  </div>
</template>

<script>

// 组件间的传参方式
// props 
// 没有通过 props 传递时 可以使用$attrs.foo  的方式进行传递 
// $children $parent 
// provide  inject 
// $emit $on ref
// 如果组件之间层级嵌套过多时 可以使用 provide inject  父组件用 provide 子组件用inject provide 写法类似于 data inject 写法类似于props
// 匿名插槽  具名插槽  作用域插槽
// 插槽的使用 <slot></slot>  <slot name="title" :bg="bg"></slot>
// <template v-slot:title=‘slotProps’>从此以后我遇见青山，遇见白雾，独尝世间悲与苦却再也不能与你相逢{{slotProps.bg}}</template>

export default {
  name: 'HelloWorld',
  inject: ['someThing'],
  props: {
    msg: String
  },
  data() {
    return {
      bg: '123'
    }
  },
  mounted () {
    this.$on('add',()=> {
      console.log('相思相见知何日，此时此夜难为情')
    })
    this.$emit('add','123')   // 事件自己派发自己监听
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
