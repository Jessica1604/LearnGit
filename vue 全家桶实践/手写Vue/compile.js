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
                    // let dir = attrname.substring(2)
                    // this[dir] && this[dir](node,this.$vm,exp)
                    // console.log(dir)
                    this.update(node,this.$vm,exp,'html')
                    
                }
            })
        } 

    }
    // html(node,vm,dir) {
    //   node.innerHtml = dir
    //   this.update(node, vm,dir,'html')
    // }
    htmlUpdater(node,dir){
        node.textContent = dir
    }
    update(node,vm,dir,name){
        // 首次进来进行更新
        let updateFn = this[name + 'Updater']
        updateFn && updateFn(node, vm[dir])

        // 创建watcher 实例进行更新
        new Watcher(vm,dir,function(value){
            updateFn && updateFn(node, value)
        })

    }
    textUpdater(node,dir) {
      node.textContent = dir
    }
    
}