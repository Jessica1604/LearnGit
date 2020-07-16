// 插件的使用
let plugin = {
    install(vue,options){
        Vue.component('headering',{
            props:['level', 'title','icon'],
            render(h){
                let children = []
                if(this.icon){
                    children.push(
                      h(
                        'svg',
                        {class: 'icon'},
                        [
                            h( 
                                'use',
                                {attrs:{'xlink:href': '#icon-'+ this.icon}}
  
                            )
                        ]
                      )
                    )
                  children =  children.concat(this.$slots.default)
                }
                return h(
                    'h'+ this.level,
                    {attrs: {title: this.title}},
                    children
                )
            }
        })
    }
}

if(typeof window !== 'undefind' && window.Vue){
    window.Vue.use(plugin)    
}
