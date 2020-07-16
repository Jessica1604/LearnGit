<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" foo="foo" />
    <HelloWorld msg="Welcome to Your Vue.js App" foo="foo" ref="hello">
      <template>人面桃花相映红,人面不知何处去，桃花依旧笑春风</template>
      <template v-slot:content='slotProps'>从此以后我遇见青山，遇见白雾，独尝世间悲与苦，却不能与你相逢{{slotProps.bg}}</template>
    </HelloWorld> -->
    <kForm></kForm>
    <!-- <p>{{work}}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import kForm from '@/components/form/index.vue'

export default {
  name: 'Home',
  provide() {
   return {
     someThing: '海水梦悠悠，君愁我亦愁'
   }
  },
  components: {
    // HelloWorld,
    kForm
  },
  data() {
    return {
      work: '小舟从此逝,江海寄余生'
    }
  },
  mounted () {
    // this.$refs['hello'].bg = 'I lost you forever'
    // this.$children[0].bg = "I can't find you "
  },
}
</script>
