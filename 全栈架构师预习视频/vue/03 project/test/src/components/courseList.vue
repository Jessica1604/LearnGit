<template>
       <div>
           <el-button type="primary" @click="login">登录</el-button>
            <ul>
                <li v-for="item in data" :key="item.name">
                    <span @click="goRouter(item)">
                        {{item.name}}
                        {{item.price | filterPrice}}
                    </span>
                  <!-- <router-link :to="`/detail/${item.name}`">
                    {{item.name}}
                    {{item.price | filterPrice }}
                  </router-link>   -->

                </li>
            </ul>
      </div>
</template>

<script>
import {getCourse} from '../api/cour.js'
    export default {
        watch: {
            $route: {
                immedate: true,
                handler(newValue, oldValue) {
                    console.log(newValue)
                    console.log(oldValue)
                }
            }
        },
        data() {
            return {
                data: [
                    {name: 'web 全栈'},
                    {name: '心怀希望'}
                ]
            }
        },
        filters:{
            filterPrice(value){
                return '$' + value
            } 
        },
        created() {
            console.log(this.$style.red)
            this.getData()
        },
        methods: {
            async getData() {
                let res = await getCourse()
                this.data = res
            },
            login() {

            },
            goRouter(item) {
              this.$router.push(`/detail/${item.name}`)
            }
        }

    
    }
</script>

<style lang="scss" module scoped>
ul li{
    height:50px;
    line-height:50px;
}
.red{
  color:burlywood;
}

</style>