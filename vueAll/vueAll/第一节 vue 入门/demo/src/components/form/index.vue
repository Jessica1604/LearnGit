<template>
    <div>
     <h2>Form test</h2>
      <kForm :model="model" :rules="rules" ref='loginForm'>
       <kFormItem label="用户名" prop="username">
         <kInput v-model="model.username" type='text'  placeholder="请输入用户名"></kInput>
       </kFormItem>
       <kFormItem label="密码" prop="password">
         <kInput v-model="model.password" type='password'  placeholder="请输入密码"></kInput>
       </kFormItem>
       <kFormItem>
           <button @click="submit">登录</button>
       </kFormItem>
      </kForm>
     <div>
         {{model}}
     </div>
    </div>
</template>

<script>
    import kInput from './kInput.vue'
    import kFormItem from './kFormItem.vue';
    import kForm from './kForm.vue'
    //    import create from '@/until/create'
    //    import notice from '@/components/notice.vue'
    export default {
        components: {
            kInput,
            kFormItem,
            kForm
        },
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                rules:{
                    username: [{required: true, message: '用户名不能为空'}],
                    password: [{required:true,message: '用户密码不能为空'}]
                }
            }
        },
        methods: {
            submit() {

                // console.log(create)
                // console.log(com)
                this.$refs.loginForm.validate(isValidate => {
            
                    if(isValidate){
                        // const com = create(notice,{
                        // content: '社会你杨哥喊你来搬砖',
                        // duration: 2000
                        // })
                        // console.log(com)
                        // com.show()
                        console.log('登录成功')
                          // 弹框的显示和隐藏
                    } else {
                        console.log('登录失败')
                    }
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>