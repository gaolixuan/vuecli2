export default { //context意为上下文。相当于store
    // 
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit('addNewInfo')
    //     console.log(payload.message.first)
    //     payload.success()
    //   }, 1000);
    // }
    aUpdateInfo(context, payload) {
        return new Promise((reserve, reject) => {
            setTimeout(() => {
                context.commit('addNewInfo')
                console.log(payload)
                reserve('1111111')

            }, 1000);
        })
    }
}