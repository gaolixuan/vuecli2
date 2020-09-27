<template>
  <div id="app">
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerState }}</h2>
    <h2>{{ $store.getters.stu }}</h2>
    <h2>{{ $store.getters.stuLength }}</h2>
    <h2>{{ $store.getters.stuAge(25) }}</h2>
    <h2>{{ $store.state.info.name }}</h2>
    <h2>{{ $store.state.info }}</h2>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button v-on:click="updateInfo">更新信息</button>

    <button v-on:click="addCount(5)">+5</button>
    <button v-on:click="addCount(10)">+10</button>
    <button v-on:click="addStudent">添加学生</button>
    <button v-on:click="addNewInfo">添加信息</button>
    <button v-on:click="deleteInfo">删除信息</button>
    <button v-on:click="setTime">异步操作</button>
    <button v-on:click="updateName">更改名字</button>
    <button v-on:click="newName">modules.action</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "app",
  methods: {
    newName() {
      this.$store.dispatch("newName", "wangwu").then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    setTime() {
      // this.$store.dispatch('aUpdateInfo',{
      //   message:{first:'finish it',second:'just ok'},
      //   success:()=>{
      //     console.log('异步执行')
      //   }

      // })
      this.$store.dispatch("aUpdateInfo", "异步执行").then((res) => {
        console.log(res);
        console.log("里面完成了提交");
      });
    },
    deleteInfo() {
      this.$store.commit("deleteInfo");
    },
    addNewInfo() {
      this.$store.commit("addNewInfo");
    },
    updateInfo() {
      const newName = "ddd";
      this.$store.commit("updateInfo", newName);
    },

    addCount(count) {
      //普通的提交风格
      this.$store.commit("increaseCount", count);
      //特殊的提交风格
      // this.$store.commit({type:'increaseCount',
      // count
      // })
    },
    addStudent() {
      const student = { id: 4, age: 50 };

      this.$store.commit("addStudent", student);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
