const path = require('path')

// function addStyleResource(rule){
//     rule.use('style-resource')
//         .loader('style-resource-loader')
//         .options({
//             patterns:[
//                 path.resolve(__dirname, './src/style/import.scss')
//             ]
//         })

// }

module.exports = {
    // chainWebpack: config => {
    //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     types.forEach(type =>
    //     addStyleResource(config.module.rule('scss').oneOf(type)))
    // },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/cart'
    : '/',
    devServer: {
        before(app){
            app.get('/api/getData',(req,res)=> {
               setTimeout(function(){
                res.json([{name: 'web全栈', price: 67},{name: 'web提升', price: 78}])
               },1000)
            })
        }
    }
}