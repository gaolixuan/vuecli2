<template>
  <div>
   
    <div class="header">
    
        <ul class="find" v-show="show">
          <li v-for="item in computedList" v-bind:key="item.msg">
            {{ item.msg }}
          </li>
        </ul>
      
      <div class="cart"></div>
      <div class="logo"></div>
      <input
        type="text"
        :placeholder="content"
        class="input"
        v-on:focusin="del"
        v-model="query"
        v-on:input="submit"
        v-on:focusout="add"
      />
      <button class="btn" ></button>
      <div class="list">
        <ul>
          <li>天天享优惠</li>
          <li>家电5折</li>
          <li>中秋美味</li>
          <li>金秋出行</li>
          <li>台式机</li>
          <li>中秋月饼</li>
          <li>品质居家</li>
          <li>健康好礼</li>
          <li>中秋团圆</li>
        </ul>
      </div>
      <div class="list2">
        <ul>
          <li :style="{ color }">秒杀</li>
          <li :style="{ color }">优惠券</li>
          <li>PLUS会员</li>
          <li>品牌闪购</li>
          <li>拍卖</li>
          <li>京东家电</li>
          <li>京东超市</li>
          <li>京东生鲜</li>
          <li>京东国际</li>
          <li>京东金融</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show:false,
      content: "",
      color: "red",
      query: '',
      list: [
        { msg: "伞自营" },
        { msg: "天堂伞" },
        { msg: "遮阳伞" },
        { msg: "伞刀" },
        { msg: "伞自动" },
        { msg: "伞架" },
         { msg: "伞柄" },
          { msg: "伞把" },
           { msg: "伞包" },
            { msg: "伞绳" },
             { msg: "水壶" },
              { msg: "矿泉水" },
               { msg: "水杯" },
                { msg: "水果" },
                 { msg: "水杯" },
                  { msg: "水彩笔" },
                   { msg: "水槽" },
                    { msg: "水冷" },
                     { msg: "水饺" },
                      { msg: "水桶" },
                   
      ],
      in:[
       {name:'显示器'}, 
      {name:'显示器'},
      {name:'电脑'},
      {name:'洗衣机'},
      {name:'空调'},
      {name:'卫衣'},
      ]
      ,index:-1,
      timer:null
    };
  },
  methods: {
   
    inner(){
      this.index++
      this.content = this.in[this.index].name
      if(this.index>4){
        this.index = 0
      }
     

    },
    submit(){
if(this.query !== ""){
         this.show = true
    }
    else{
       this.show = false
    }
    },
    del() {
      this.content = "";
     clearInterval(this.timer)
        
      
    },
    add(){
      this.timer = setInterval(this.inner,1000)
    }
    
  },
  mounted(){
this.timer = setInterval(this.inner,1000)
  },
  components: {},
  computed: {
    computedList: function () {
      var vm = this;
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    },
  },
  watch: {},
};
</script>


<style>
.header {
  width: 1520px;
  height: 140px;

  border: 1px solid rgb(163, 156, 156);
  border-left: none;
}
.input {
  left: 485px;
  position: absolute;
  width: 492px;
  height: 35px;
  border: 2px solid red;
  margin-top: 20px;
}
.btn {
  left: 977px;
  position: absolute;
  width: 58px;
  height: 40px;
  background-image: url(../img/btn.png);
  margin-top: 20px;
  border: 1px solid red;
}
.list {
  width: 550px;
  height: 30px;

  left: 470px;
  margin-top: 75px;
  position: absolute;
}
.list li {
  margin-left: 11px;
  font-size: 13px;
  opacity: 0.5;
}
.list li:hover {
  color: red;
}
.list2 {
  width: 550px;
  height: 30px;

  left: 420px;
  margin-top: 110px;
  position: absolute;
}
.list2 li {
  margin-left: 15px;
  font-size: 15px;
}
.list2 li:hover {
  color: red;
}
.logo {
  width: 190px;
  height: 120px;
  background-image: url(../img/jdlogo.png);
  position: absolute;
  margin-top: 10px;
  left: 200px;
}
.cart {
  left: 1100px;
  position: absolute;
  width: 131px;
  height: 38px;
  background-image: url(../img/cart.png);
  margin-top: 20px;
  border: 1px solid grey;
}
.cart:hover {
  border: 2px solid red;
}
.find {
  width: 507px;
  height: 300px;
  background-color: white;
  z-index: 1;
  position: absolute;
  left: 485px;
  
  
  border: 2px solid rgb(212, 208, 208);
  top: 185px;
}
.find li{
  width: 547px;
  margin-top: 0px;
  height: 30px;
  margin-left: -40px;
  line-height: 30px;
 

 
  
}
.find li:hover{
  background-color: rgb(241, 237, 237);
}
</style>