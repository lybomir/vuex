import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter: counter
    },
    state:{
        title: "hello world"
    },
    getters: {
        sayHello(state){
            return this.state.title + '!!'
        }
    }
})