
let nodeType ={
    HTML:'HTML',
    TEXT:'TEXT',
    COMPONent:'COMPONENt'
}
let childrenType = {
    EMPTY:'EMPTY',
    SINGLE: 'SINGLE',
    MULTIPY: 'MULTIPY'
}
function createElement(tag,data,children){
    let flag
    if(typeof tag === 'string'){
        flag = nodeType.HTML
    } else if(typeof tag === 'function'){
        flag = nodeType.COMPONent
    } else{
        flag = nodeType.TEXT
    }
    let childrenFlg
    // console.log(children)
    if(children == null){
        childrenFlg = childrenType.EMPTY
    } else if(Array.isArray(children)){
        let length = children.length
        if(length === 0){
            childrenFlg = childrenType.EMPTY
        } else {
            childrenFlg = childrenType.MULTIPY
        }
    } else {
        //  文本节点
        childrenFlg = childrenType.SINGLE
        // console.log(children)
        createTextNode(children + '')
        // console.log(createTextNode(children + ''))
    }
    return {
        flag,
        tag,
        data,
        children,
        childrenFlg,
        el:null
    }
}

function render(vnode,container) {
    // 首次挂载和后面挂载
    mount(vnode,container)

}

function mount(vnode,container) {
    let {flag,childrenFlg} = vnode
    // console.log(vnode, flag)
    console.log(flag)
    if(flag === nodeType.HTML){
        mountElement(vnode,container)
    } else {
        mountText(vnode,container)
    }
}

function mountElement(vnode,container) {
    let {data,tag,children,childrenFlg} = vnode
    let dom = document.createElement(tag)
    vnode.el = dom
    // data 属性赋值
    if(data){
        for(let key in data){
            patchData(key,dom,null, data[key])
        }
    }
    if(childrenFlg !== childrenType.EMPTY){
        if(childrenFlg === childrenType.SINGLE){
            mount(children,dom)
        }else if(childrenFlg === childrenType.MULTIPY) {
            for(let i=0;i<children.length;i++){
               mount(children[i],dom)
            }
    
        }
    }
    console.log(dom)
    container.appendChild(dom)
}
function patchData(key,el,prev,next) {
    switch (key){
        case 'style':
           for(let k in next){
               el.style[k] = next[k]
           }
           break
        case 'class':
           el.setAttribute('class',next)
           break
        case '@':
           el.addEventListener(key.slice(1),next)
           break 

    }


}
function mountText(vnode,container) {
    console.log(vnode)
    console.log(container)
    let {children} = vnode
    let dom = document.createTextNode(vnode)
    vnode.el = dom
    container.appendChild(dom)
}

function createTextNode(children) {

    return{
        flag:nodeType.TEXT,
        tag:null,
        data:null,
        children:children,
        childrenFlg:childrenType.EMPTY,
        el:null
    }
}