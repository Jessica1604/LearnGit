<template>
    <div>
      <div>
          <label :for="label" v-if="label">{{label}}</label>
          <slot></slot>
          <span v-if="error">{{error}}</span>
      </div>
    </div>
</template>

<script>
    import Schema from 'async-validator'

    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default:''
            },
            prop: {
                type:String
            }
        },
        data() {
            return{
                error: ''
            }
        },
        mounted () {
            this.$on('validate',() => {
                this.validate()
            });
        },
        methods: {
            validate() {
                // console.log('我接收到信息了')
                // 获取到值
                // console.log(this.form.model[])
                const rules = this.form.rules[this.prop]
                const values = this.form.model[this.prop]
                let schema = new Schema({[this.prop]: rules})
                
               return schema.validate({[this.prop]: values}, error => {
                    console.log(error)
                    if(error){
                        this.error = error[0].message
                    }else {
                        this.error = ''
                    }
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>