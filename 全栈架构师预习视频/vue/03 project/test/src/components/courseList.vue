<template>
       <div>
            <ul>
                <li v-for="item in data" :key="item.name">
                  {{item.name}}
                  {{item.price | filterPrice }}
                </li>
            </ul>
      </div>
</template>

<script>
    export default {
        props:['data'],
        filters:{
            filterPrice(value){
                return '$' + value
            } 
        }
    }
</script>

<style lang="scss" scoped>

</style>