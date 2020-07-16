<template>
      <div v-if="isshow" class="message">
          <div>{{content}}</div>
      </div>
</template>

<script>
    export default {
        props: {
            content: {
                type:String,
                default: ''
            },
            duration: {
                type: Number,
                default: 2000
            }
        },
        data(){
           return {
               isshow: false
           }
        },
        methods: {
            show() {
              this.isshow = true
              setTimeout(() =>{
                  this.isshow = false
                  this.remove()
              },this.duration)
                
            }
        },
        
    }
</script>

<style  scoped>
.message{
    padding:20px;
    border:1px solid #ccc;
    background:#fff;
    position:fixed;
    top:20px;
    left:0;
    text-align:center;
}
</style>