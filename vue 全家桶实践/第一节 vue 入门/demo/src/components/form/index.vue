<template>
    <div>
     <h2>Form test</h2>
     <kInput v-model="model.username"></kInput>
     <div>
         {{model}}
     </div>
     <!-- 
         v-model 是一个语法糖
         <kInput value="model.username" @input="model.username = e.target.vale"></kInput>

      -->
    </div>
</template>

<script>
   import kInput from './kInput.vue'
    export default {
        components: {
            kInput,
        },
        data() {
            return {
                model: {
                    username: '',
                    passworld: ''
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>