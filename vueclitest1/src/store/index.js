import Vue from 'vue'

import Vuex, {
  Store
} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [{
        id: 1,
        age: 20
      },
      {
        id: 2,
        age: 29
      },
      {
        id: 3,
        age: 22
      }
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.88
    }
  },
  mutations,
  actions,
  modules: {
    a: moduleA
  },
  getters
})