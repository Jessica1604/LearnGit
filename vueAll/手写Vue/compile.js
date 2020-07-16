class Compile{
    constructor(vm, el){
        this.$vm = vm
        this.$el = el
        if(this.$el){
            this.edit(document.querySelector(el))
        }
    }
    edit(node) {
        // const node= document.querySelector(el)
        const nodes = node.childNodes
        // console.log(nodes)

        Array.from(nodes).forEach(key => {
            // console.log(key)
            // console.log(key.nodeType)
            // console.log(key , '........')
            if(this.isInter(key)) {
            
              // 判断是文本节点的情况
              this.compileText(key)
              
            } else if(this.isElement(key) ) {
            // 判断是元素节点的情况
            //   console.log('属性' + key)
              this.compileElement(key)
            }
        })
        // 进行递归处理
        if(nodes.childNodes && nodes.childNodes.length){
            edit(nodes)
        }

    }
    isElement(node){
        return node.nodeType == 1
    }
    isInter(node){
        // console.log(node.textContent)
        return node.nodeType === 1 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    compileText(key) {
        // key.textContent = this.$vm[RegExp.$1]
        let dir = RegExp.$1
        this.update(key,this.$vm,dir,'text')

    }
    compileElement(node) {
        console.log(node)
        let attributes = node.attributes
        if(attributes){
            Array.from(attributes).forEach(val => {
                let attrname = val.name
                let exp = val.value
                console.log(attrname)
                console.log(exp)
                if(attrname === 'k-html'){
                    // 当k-html 存在的时候
                    console.log('属性更新我进来了')
                    // let updateFn = this['html' + 'Updater']
                    // updateFn && updateFn(node, exp)
                    let dir = attrname.substring(2)
                    this[dir] && this[dir](node,this.$vm,exp)
                    // console.log(dir)
                    // this.update(node,this.$vm,exp,'html')
                    
                } else if(attrname === 'k-model'){
                    let dir = attrname.substring(2)
                    this[dir] && this[dir](node,this.$vm,exp)
                } else if(attrname === '@click'){
                    // let dir = exp
                    // console.log('我进到了@click 页面')
                    // let vm = this.$vm
                    // window.addEventListener('click',function() {
                    //     let methodsName = vm.$options.methods
                    //     console.log(Array.from(methodsName))
                    //     Object.keys(methodsName).map(val => {
                    //         console.log(val)
                    //         if(val == exp){
                    //         }
                    //     })
                    // })
                    let dir = attrname.substring(1)
                     this.eventHandler(node, exp ,dir)

                }
            })
        } 

    }
    eventHandler(node,exp, dir){
        let fn = this.$vm.$options.methods && this.$vm.$options.methods[exp] 
        if(dir && fn){
            node.addEventListener(dir, fn.bind(this.$vm))  // 自己写的时候不知道怎么绑定 
        }

    }
    html(node,vm,dir) {
    //   node.innerHtml = dir
      this.update(node, vm,dir,'html')
    }
    model(node,vm,dir){
       this.update(node,vm,dir, 'model')
       node.oninput = function(e) {
         vm[dir] = e.target.value
       }
    }
    htmlUpdater(node,dir){
        node.textContent = dir
    }
    modelUpdater(node,dir){
        node.value = dir
    }
    update(node,vm,dir,name){
        // 首次进来进行更新
        let updateFn = this[name + 'Updater']
        updateFn && updateFn(node, vm[dir], dir,vm)

        // 创建watcher 实例进行更新
        new Watcher(vm,dir,function(value){
            updateFn && updateFn(node, value)
        })

    }
    textUpdater(node,dir) {
      node.textContent = dir
    }
    valueUpdater(node,dir, name,vm) {
       console.log(node)
       console.log(dir)
       node.value = dir
       node.oninput = function(e) {
           console.log(e.target.value)
           console.log(vm)
           console.log(this[name])
           
           vm[name]= e.target.value
        //    this.$vm[name] = e.target.value
       }
    }
    
}