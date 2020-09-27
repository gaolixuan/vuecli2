export default {
    powerState(state) {
        return state.counter * state.counter
    },
    stu(state) {
        return state.students.filter(function (s) {
            return s.age > 20
        })

    },
    stuLength(state, getters) {
        return getters.stu.length

    },
    stuAge(state) {
        return function (Age) {
            return state.students.filter(function (s) {
                return s.age > Age
            })
        }
    }
}