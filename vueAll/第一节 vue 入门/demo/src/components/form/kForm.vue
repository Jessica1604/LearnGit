<template>
    <div>
      <div>
          <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type:Object,
                required: true
            }
        },
        methods: {
            validate(cb) {
                // const task = this.$children
                // .filter(item => item.prop) // 过滤掉没有 prop 的button 按钮
                // .map(item => {
                //     item.validate()
                // })

                // Promise.all(task)
                // .then(cb(true))
                // .catch(cb(false))

                const tasks = this.$children
                      .filter(item => item.prop)
                      .map(item => item.validate());
               // 所有任务必须全部成功才算校验通过，任一失败则校验失败 
                Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>