import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// //使用全局的相关配置进行网络请求
// // axios的全局相关配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=50001
// //1.axios的基本使用
// axios({
//   // url: 'http://123.207.32.32:8000/home/multidata',
//    url: '/home/multidata',
//   //默认为get请求，可以指定请求方法
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })
// //第二种写法
// // axios.get()
// // axios.post()
// axios({
//   // url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// //axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   //默认为get请求，可以指定请求方法
//   method: 'get'
// }), axios({
//   // url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results)
// })

//创建对应的axios相关实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }

// }).then(res=>{
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL:'',
//   timeout:5000,
//   headers:{}
// })

//封装request模块
import {request}  from "./network/request"

// request ({
//   url:'/home/multidata'

// },res=>{
// console.log(res)
// },err=>{
//   console.log(err)
// })


request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
 
})