<template>
<div>
<div class="then">
<div class="right2"></div>
<div class="time"><img src="../img/time.png" alt="">
<div class="h"><h2 class="hh">{{h}}</h2></div>
<div class="m"><h2 class="mm">{{m}}</h2></div>
<div class='s'><h2 class="ss">{{s}}</h2></div>
</div>

<div class="pic" v-on:mouseenter="stop" v-on:mouseleave="start" ><ul v-bind:style="{left:position+'px'}">
    <li><img src="../img/f1.webp" alt=""></li>
    <li><img src="../img/f2.webp" alt=""></li>
    <li><img src="../img/f3.webp" alt=""></li>
    <li><img src="../img/f4.webp" alt=""></li>
    <li><img src="../img/f5.webp" alt=""></li>
    <li><img src="../img/f6.webp" alt=""></li>
    <li><img src="../img/f1.webp" alt=""></li>
    <li><img src="../img/f2.webp" alt=""></li>
    <li><img src="../img/f3.webp" alt=""></li>
</ul></div>
</div>

</div>
</template>

<script>
export default {
name: 'Then',
data() {
return {
    activeColor: 'red',
  position: -38,
total:7200,
h:'',
m:'',
s:'',
time:null,
timer:null
}
},
methods: {
    go(){
this.position-=1
if(this.position<-1718){
    this.position = -38
}
    },
run(){
    	
//			设置1000毫秒执行一次的计时器
			
				this.total--
//				小时取整
		    this.h=parseInt(this.total/3600)
//		    分钟,将小时取余得到的秒数/60就是分钟数
			this.m=parseInt(this.total%3600/60)
//			秒数,小时取余3600就是分钟数,分钟数取余60就是秒数
			this.s=parseInt(this.total%3600%60)
//			如果小时数小于10,就在前面拼接一个0,
			if(this.h<10){
				this.h='0'+this.h
			}
//			如果分钟数小于10,就在前面拼接一个0
			if(this.m<10){
				this.m='0'+this.m
			}
//			如果秒数小于10,就在前面拼接一个0
			if(this.s<10){
				this.s='0'+this.s
			}
			

				
			
},
stop(){
    clearInterval(this.timer)
},
start(){
    this.timer=setInterval(this.go,10)
}
},

    mounted() {

      this.time=setInterval(this.run,1000)
      this.timer=setInterval(this.go,10)
    },

           components:{

},
           computed:{

},
           watch:{

},


};
</script>


<style>
.then{
    width: 1520px;
    height: 260px;
   
}
.time{
    left: 169px;
    position: absolute;
    text-align: center;
    color: white;
}
.h{
    width: 30px;
    height: 30px;
    background-color:black;
    left: 30px;
    top: 200px;
    position: absolute;
   
  

   
}
.m{
    width: 30px;
    height: 30px;
    background-color:black;
    left: 80px;
    top: 200px;
    position: absolute;
    

   
}
.s{
    width: 30px;
    height: 30px;
    background-color:black;
    left: 130px;
    top: 200px;
    position: absolute;
    

   
}
.hh{
    top: -18px;
    left: 3px;
    position: absolute;
}
.mm{
    top: -18px;
    left: 4px;
    position: absolute;
}
.ss{
    top: -18px;
    left: 5px;
    position: absolute;
}
.pic{
    width: 840px;
    height: 257px;
    border:1px solid black;
    left: 360px;
    position:absolute;
    overflow: hidden;
    
   
}
ul{
    width: 2700px;
    height: 260px;
    left: -38px;
    top: -18px;
    position: absolute;
}
li{
 float: left;
 display:block
}
.right2{
    width: 135px;
    height: 255px;
   background-image: url(../img/right.png);
     left: 1205px;
     top: 769px;
     border: 1px solid rgb(165, 163, 163);
    

    position: absolute;
}
</style>