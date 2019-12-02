// 对原生的http 封装
const originRequest = require('request')
// 对文字编码的处理
const iconv = require('iconv-lite')
// 后端jquery
const cheerio = require('cheerio')

function request(url,callback){
    const options = {
        encodeing:null
    }
    originRequest(url,options, callback)
}

for(var i=100553; i< 100563; i++) {
    let url = `https://www.dy2018.com/i/${i}.html`
    request(url,function(err,data, body) {
        // console.log('body:' + body)
        const html = iconv.decode(body, 'utf-8')
        // console.log(html)
        const $ = cheerio.load(html)
        console.log($('.title_all h1').text())
    })
}