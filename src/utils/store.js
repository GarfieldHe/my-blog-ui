import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters:{
        printCount: state =>{
            console.log(state.count)
        }
    }
})
// 避免eslint报错，实际无用
store.state.count