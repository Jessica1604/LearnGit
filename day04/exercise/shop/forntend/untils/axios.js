import axios from 'axios'
import Vue from 'vue'
import {severIpAddress} from "@/untils/server-config"
import {Loading} from 'element-ui'
// 判断当前环境
axios.defaults.baseURL = severIpAddress
axios.defaults.timeout = 180000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
// 在接口请求前做统一处理，添加token
axios.defaults.headers.common['accessToken'] = getToken()

axios.interceptors.request.use((config) => {
    if (config.method === 'get') {
        config.url = config.url + "?" + Math.random()
    }
    return config
},(error) => {
    console.log('interceptors.request error')
    return Promise.reject(error)
})

// 接口请求后，做统一处理，验证token 是否重新登录
axios.interceptors.response.use((res) => {
    let managerInfo = JSON.parse(window.localStorage.getItem('managerObjStr'))
    if (res.data.responseCode === 10010){
        Vue.prototype.$message({
            message: res.data.responseMsg,
            type: 'error',
            duration: 1000,
            onClose() {
                let url = window.location.pathname
                if (url.indexOf('management-sys') !== -1){

                } else {
                    window.localStorage.clear()
                    window.location.href = '/portal-web'
                }
            }
        })
    }
    return res
},(error) => {
    return Promise.reject(error)
})

// get 请求

export function get(url, data, options) {
    const params = {method: 'GET', url, params: data}
    return fetchApi(param, options)
}

// post 请求
export function post (url, data, options) {
    const param = {method: 'POST', url, data}
    // const param = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'multipart/form-data'},
    //     url,
    //     data
    // }
    return fetchApi(param, options)
}

// 加载动画的计数，有次计数就不会出现多个遮罩
let loadingNum = 0
let loadingInstance = ''
function fetchApi (param, options) {
    // 获取最新的 token
    axios.defaults.headers.common['accessToken'] = getToken()
    if (typeof (options.showLoading) !== 'boolean'){
        options.showLoading = false
    }
    if (options.showLoading) {
        if (loadingNum <= 0) {
            loadingInstance = Loading.service({fullscreen: true, text: options.text || ''})
        }
        loadingNum++
    }
    if (typeof (options.errorHandler) !== 'boolean'){
        options.errorHandler = true
    }

    return new Promise((resolve, reject) => {
        axios(param)
        .then(response => {
            if (options.errorHandler){
                switch(response.data.responseCode) {
                    case 0:
                      return resolve(reponse.data)
                    default: 
                      Vue.prototype.$message({
                          'message': response.data.responseMsg || '请求失败',
                          type: 'error'
                      })  
                }

            }else {
                return resolve(response.data)
            }
        })
        .catch((error)=> {
            var errorMsg = ''
            if (error.response) {
                switch(error.response.status){
                    case 400:
                    errorMsg = '400请求错误'
                    break
                }
            } else if (error.request) {
                errorMsg = '请求失败'
            } else {
                errorMsg = error.message
            }
            if (options.errorHandler){
                Vue.prototype.$message({
                    'message': errorMsg,
                    'type': 'error'
                })
                return
            }
            reject(error)
        })
        .then(() => {
            if (options.showLoading) {
                loadingNum --
                if (loadingNum <= 0){
                    loadingInstance.close()
                }
            }
        })
    } )
}

function getToken() {
    let url = window.location.pathname
    if (window.localStorage.getItem('userObjStr'))
    var userinfo = JSON.parse(window.localStorage.getItem('userObjStr'))
    if (userinfo && userinfo.userTokenId) {
        return userinfo.userTokenId
    }
}