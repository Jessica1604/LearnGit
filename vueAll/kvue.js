class Kvue {
    constructor(option) {
        this.$option = option
        this.$data = option.data
        this.observe(this.$data)
        let compile = new Compile(this.$option.el, this)

        if (option.created) {
            option.created.call(this)
        }
    }
    observe(value) {
        console.log(typeof value)
        if(!value && typeof value !== 'object') {
            return
        }
        console.log(value)
        Object.keys(value).forEach(key => {
            this.defineProperty(value, key , value[key])
        })
    }
    defineProperty(data, key, value ) {
        // 数据的多层嵌套 考虑递归
        // this.observe(value)
        let dep = new Dep() // 对属性的一个依赖收集的过程
        Object.defineProperty(data, key, {
            get() {
                console.log('属性'+key+'更新了')
                // Dep.target && dep.addDep(Dep.target);  // 当watcher 存在时 就会向里面加一个watcher
                Dep.target && dep.addDep(Dep.target)
                return value
            },
            set(newVal) {
                if (newVal === value) {
                    return
                }
                console.log('属性'+key+'更新了')
                value = newVal
                dep.notify()
                console.log(key + '更新了')
            }
        })
    }   
}

class Dep{
    constructor() {
        this.deps = []
    }
    addDep(value) {
        this.deps.push(value)
    }
    notify() {
        this.deps.map(item => {
            item.update()
        })
    }
}

class Watcher{
    constructor(vm, key, updater) {

        this.vm = vm;
        this.key = key
        this.updater = updater

        Dep.target = this
        // this.vm[key]
        // Dep.target = null
    }
    update() { 
       console.log(this.key + '属性进行了更新') 
       this.updater.call(this.vm, this.vm[this.key])
    }
}