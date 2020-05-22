<template>
    <div>
      <input :type="type" :value="value" @input="onInput" :placeholder="$attrs.placeholder">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                this.$parent.$emit('validate')
            }
        },
        
    }
</script>

<style  scoped>

</style>