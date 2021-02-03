import Vue from 'vue'

export default function create (component,props){
   // 创建一个实例
   let vm= new Vue({
       render(h){
           return h(component, {props})
       }
   }).$mount() // 形成一个虚拟的dom

   document.body.appendChild(vm.$el) // 在body 里追加元素

   //
   const comp = vm.$children[0]

   // 销毁元素
   comp.remove = () => {
       document.body.removeChild(vm.$el)
       vm.$destroy()
   }
}