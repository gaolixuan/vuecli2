export default { //对对象进行响应式地操作需要使用set和delete方法
  addNewInfo(state) {
    //在对象末尾添加数据,第二个参数为key，可以是string或number类型，第三个参数为value
    Vue.set(state.info, 'address', 'beijing')
    //mutation中的方法必须是同步方法，devtools不能追踪异步操作，所以计时器在这无法使用，
    //action可以替代mutation进行异步操作
    //  setTimeout(() => {

    //  }, 1000);


    console.log(state.info)
  },
  deleteInfo(state) {
    //根据key删除对象
    Vue.delete(state.info, 'name')


    console.log(state.info)
  },
  updateInfo(state, newName) {
    return state.info.name = newName
  },
  increaseCount(state, count) {

    return state.counter += count

  },
  //特殊的提交风格
  // increaseCount(state,payload){
  //   console.log(payload)
  //      return state.counter+=payload

  //  },
  addStudent(state, student) {
    //使用push、splice等响应式地修改数组
    return state.students.push(student)
  }
}