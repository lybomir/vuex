export default {
    state: {
        counter: 1
    },
    mutations: {
        changeCounter (state, payload) {
            state.counter += payload
        }
    },
    actions: {
        asyncChangeCounter(context,payload){
            setTimeout(() =>{
                context.commit('changeCounter',payload.counterValue)
            }, payload.waitValue)
        }
    },
    getters: {
        computedCount(state){
            return state.counter *(7+2*(2+2))
        },
        computedCounts(state){
            return state.counter *(7+7)
        }
    }
}