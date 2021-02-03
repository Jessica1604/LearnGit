class Compile{
    constructor(el,vm){
        this.$el = el
        this.$vm = vm
        if (this.$el) {
            let el = document.querySelector(this.$el)
            this.compile(el)
        }
    }
    compile(el) {
        let nodes = el.childNodes
        Array.from(nodes).forEach(node => {
            if (this.isElement(node)) { // 是否是元素节点
              console.log('元素节点进行了更新')
            } else if (this.isInter(node)) { // 是否是文本节点
              console.log('文本节点进行了更新')
              this.compileText(node)
            }
            // 递归的判断
            if(node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    isElement(node) {
        return node.nodeType === 1 
     }
    
    isInter(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    } 
    compileText(node) {
      console.log(RegExp.$1)
      console.log(this.$vm)
      let exp = RegExp.$1
      this.updater(node, exp, 'text')
    //   node.textContent = this.$vm.$data[RegExp.$1]
    }
    updater(node, exp, dir) {
        // 首次进来数据的赋值
        let updaterFn = this[dir + 'Updater']
        let value = this.$vm.$data[exp]
        updaterFn && updaterFn(node, value)

        // 后续数据的更新
        new Watcher(this.$vm, exp, function() {
            updaterFn && updaterFn(node, value)
        })
        
    }

    textUpdater(node,value) {
        // 初次赋值
        console.log(node)
        console.log(value)
        node.textContent = value

    }
    
}