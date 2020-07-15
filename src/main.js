import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'
import store from './utils/store'
import http from './utils/net'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


require.config({
    path: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
    }
})
require(["jquery"], function ($, _, Backbone) {
    console.log($, _, Backbone)
    console.log("require 加载js成功")
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')