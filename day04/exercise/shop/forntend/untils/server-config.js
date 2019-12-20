var fn = {}
var isMock = false
var config = {
    "ci": 'http://gl-core-ci.paic.com.cn',
    "stg1" : 'http://gl-core-stg1-padis.paic.com.cn'
}
fn.envMode = function (mode) {
    console.log('mode', mode)
    if (mode === 'development') {
        return devUrl
    }
    isMock = false
    return ''
}
var devUrl = config['ci']
var severIpAddress = fn.envMode(process.env.NODE_ENV.trim())
exports.isMock = isMock
exports.config = config
exports.devUrl = devUrl
exports.severIpAddress = severIpAddress
window.config = config
window.config.devUrl = devUrl
window.severIpAddress = severIpAddress