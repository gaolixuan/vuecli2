export default {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            return state.name = payload
        }
    },
    actions: {
        //这里的actions只能使用这里的当前moduleA中的mutations中的方法
        newName(context, payload) {
            return new Promise((reserve, reject) => {
                setTimeout(() => {
                    context.commit('updateName', payload)
                    console.log(payload)
                    reserve('执行成功')
                }, 1000);
            })


        }
    },
    getters: {
        fullName(state) {
            return state.name + '1111111'
        },
        fullName2(state, getters) {
            return getters.fullName + 2222
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    },
}