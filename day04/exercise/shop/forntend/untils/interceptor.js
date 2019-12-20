import Vue from 'vue'
import axios from 'axios'
import {Loading} from 'element-ui'
Vue.prototype.$axios = axios

let loading;

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "加载中。。。。",
        background: 'rgba(0,0,0,0.7)'
    })
}

function endLoading() {
    loading.close()
}

let needLoadingRequestCount = 0;
function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

function tryHideFullScreenLoading () {
   if (needLoadingRequestCount <= 0) return;
   needLoadingRequestCount--;
   if (needLoadingRequestCount === 0) {
       endLoading();
   }
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
        showFullScreenLoading()
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        tryHideFullScreenLoading()
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default axios