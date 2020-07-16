class Kvue{
    constructor(options) {
       this.$options = options
       this.$data = options.data
       this.observe(this.$data)
       new Compile(this, options.el)
    //    console.log(options.created)
       options.created && options.created.call(this)  // call 的含义是什么 这个不是很懂
    }
    observe(value) {
        // 传进来的数据必须是对象  
        if(!value || typeof value !== 'object'){
            return 
        }
        Object.keys(value).forEach(key => {
            this.defineProperty(value, key , value[key])   // 数据的劫持 监听数据的变化
            this.proxyData(key)  // 设置代理
        })
    }
    defineProperty(obj, key, value){
        this.observe(value)   // 解决数据的深层嵌套
        let dep = new Dep()
        Object.defineProperty(obj, key,{
            get() {
                Dep.target && dep.addDep(Dep.target);  // 当watcher 存在时 就会向里面加一个watcher
                return value
            },
            set(newVal) {
                if(newVal === value){
                    return 
                }
                value = newVal
                dep.notify() // 对依赖收集的数据进行更新
                console.log(key + '更新了')

            }
        })
    }
    proxyData(key){
        Object.defineProperty(this,key, {   // 这里的this 指的是 Vue 实例本身
            get() {
              return this.$data[key]
            },
            set(newVal) {
              this.$data[key] = newVal
            }
        })

    } 
}

class Dep{  // 创建观察者 一个数据属性对应一个dep 一个dep 对应多个watcher 管理watcher 更新
    constructor() {
        this.dep = []
    }
    addDep(val) {
        this.dep.push(val)
    }
    notify() {  // 数据的更新
      this.dep.forEach(val => val.update()) //对于依赖收集的数据进行更新
    }

}

class Watcher{   // watcher 模式 监听器负责更新视图 执行具体的更新
    constructor(vm,key, updater) {
        
        this.vm = vm
        this.key = key  
        this.updater = updater

        Dep.target = this
        this.vm[this.key]  // 更新属性 触发依赖收集
        Dep.target = null  // 对闭包里多余的变量进行清空
    }
    update() {
    //   console.log('watcher 属性进行了更新')
        this.updater.call(this.vm,this.vm[this.key])
    }
}
