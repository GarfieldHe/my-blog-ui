import axios from 'axios'
import Message from 'element-ui/packages/message'

let anonymous = function () {
    let instance = axios.create({
        timeout:60000
    })
    instance.interceptors.response.use(
        function (response) {
            if (response.data.length === 0) {
                // 返回数据长度为0
            }
            return response.data
        },
        function (error) {
            console.log("错误：", error)
            if (error.response.status === 400) {
                // 提示400的错误
                Message.error("服务器错误400")
            }else if (error.response.status === 406) {
                Message.error(error.response.data.message)
            }else {
                Message.error("服务器错误")
            }
            return Promise.reject(error)
        }
    )
    return instance;
}

let axios1 = anonymous()

export default {
    anonymous:function () {
        return axios1
    }
}