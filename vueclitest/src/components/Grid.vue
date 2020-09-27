<template>
<div>
    <div class="grid">
    <div class="d"></div>
    <div class="e"><div class="e1"></div><div class="e3"><ul class="zz">
        <li>
            <div class="b1"></div>
        </li>
        <li>
            <div class="b2"></div>
        </li>
        <li>
            <div class="b3"></div>
        </li>
        <li>
            <div class="b4"></div>
        </li>
        <li>
            <div class="b5"></div>
        </li>
        <li>
            <div class="b6"></div>
        </li>
        <li>
            <div class="b7"></div>
        </li>
        <li>
            <div class="b8"></div>
        </li>
        <li>
            <div class="b9"></div>
        </li>
        <li>
            <div class="b10"></div>
        </li>
        <li>
            <div class="b11"></div>
        </li>
        <li>
            <div class="b12"></div>
        </li>
    </ul><ul class="tag">
        <li>话费</li>
        <li>机票</li>
        <li>酒店</li>
        <li>游戏</li>
        <li>加油</li>
        <li>火车</li>
        <li>众筹</li>
        <li>理财</li>
        <li>白条</li>
        <li class="li1">电影</li>
        <li class="li2">企业</li>
        <li class="li3">礼品</li>
    </ul></div></div>
        <div class="a">
            <div class="left" v-on:click="imgClick"  v-on:mouseenter="show=true" v-on:mouseleave="show=false" ><img src="../img/left.png" alt="" height="480"></div>
        </div>
        <transition @before-enter="beforeEnter" @enter="enter" >
		   
		   <div class="right" v-show="show" v-on:mouseenter="show=true" v-on:mouseleave="show=false"><img src="../img/right.webp" alt="" height="480"></div>
	       
	       </transition>
        
        <div class="b" ><ul>
            <li>家用电器</li>
            <li>手机/运营商/数码</li>
            <li>电脑/办公</li>
            <li>家居/家具/家庭/厨具</li>
            <li>男装/女装/童装/内衣</li>
            <li>美妆/个护清洁/宠物</li>
            <li>女鞋/箱包/钟表/珠宝</li>
            <li>男装/运动/户外</li>
            <li>房产/汽车/汽车用品</li>
            <li>母婴/玩具乐器</li>
            <li>食品/酒类/生鲜/特产</li>
            <li>艺术/礼品鲜花/农资绿植</li>
            <li>医药保健</li>
            <li>图书/文娱/教育/电子书</li>
            <li>机票/酒店/旅游/生活</li>
            <li>理财/众筹/白条/保险</li>
            <li>安装/维修/清洗/二手</li>
            <li>工业品</li>
        </ul></div>
        <div class="c"><img alt="" v-bind:src="pic" v-on:mouseenter="stop" v-on:mouseleave="start">
            <div class="buttons">
                <div class="button1" v-on:mouseenter="button1"></div>
                <div class="button2" v-on:mouseenter="button2"></div>
                <div class="button3" v-on:mouseenter="button3"></div>
                <div class="button4" v-on:mouseenter="button4"></div>
                <div class="button5" v-on:mouseenter="button5"></div>
                <div class="button6" v-on:mouseenter="button6"></div>
                <div class="button7" v-on:mouseenter="button7"></div>
                <div class="button8" v-on:mouseenter="button8"></div>
            </div>
            <div class="L" v-on:click="last"></div>
            <div class="R" v-on:click="next"></div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Grid",
    data() {
        return {
            pics: [{
                    id: 1,
                    name: '../img/01.png'
                },
                {
                    id: 1,
                    name: require('../img/01.png')
                },
                {
                    id: 2,
                    name: require('../img/02.png')
                },
                {
                    id: 3,
                    name: require('../img/03.png')
                },
                {
                    id: 4,
                    name: require('../img/04.png')
                },
                {
                    id: 5,
                    name: require('../img/05.png')
                },
                {
                    id: 6,
                    name: require('../img/06.png')
                },
                {
                    id: 7,
                    name: require('../img/07.png')
                },
                {
                    id: 8,
                    name: require('../img/08.png')
                },

            ],
            pic: '',
            index: 0,
            timer: null,
            show:false,
            total:7200,
h:'',
m:'',
s:'',
       
  
        };
    },
    methods: {
       
        imgClick(){
    this.$router.push('/page')
    },
     
      beforeEnter:function(o){
    	      	o.style.backgroundColor= 'black'
    		o.style.transform = "translate(0px,0px)"
    	
    	},
    	enter:function(o,done){
    		
    	
    		     o.offsetWidth
 		
    		o.style.transform = "translate(790px,0px)"
    	
    		o.style.transition = 'all 1s ease'
    		

    		
    	},

        get() {

            this.index++

            this.pic = this.pics[this.index].name

            console.log(this.pic)
            if (this.index > 7) {
                this.index = 0
            }
              last()
            next()
          
        },
        stop() {

            clearInterval(this.timer)
        },
        start() {
            this.timer = setInterval(this.get, 2000);
        },
        button1() {
            this.pic = this.pics[1].name
            clearInterval(this.timer)
        },
        button2() {
            this.pic = this.pics[2].name
            clearInterval(this.timer)
        },
        button3() {
            this.pic = this.pics[3].name
            clearInterval(this.timer)
        },
        button4() {
            this.pic = this.pics[4].name
            clearInterval(this.timer)
        },
        button5() {
            this.pic = this.pics[5].name
            clearInterval(this.timer)
        },
        button6() {
            this.pic = this.pics[6].name
            clearInterval(this.timer)
        },
        button7() {
            this.pic = this.pics[7].name
            clearInterval(this.timer)
        },
        button8() {
            this.pic = this.pics[8].name
            clearInterval(this.timer)
        },
        last() {
            this.index--
            if (this.index < 0) {
                this.index = 0
            }
            this.pic = this.pics[this.index].name
        },
        next() {
            this.index++
            if (this.index > 7) {
                this.index = 0
            }
            this.pic = this.pics[this.index].name
        }

    },
    mounted() {

        this.timer = setInterval(this.get, 2000)
       

    },

    // beforeDestroy() {
    //   clearInterval(this.timer);
    // },

    components: {},
    computed: {},
    watch: {},
};
</script>

<style>
.grid {
    width: 1520px;
    height: 480px;
    border: 1px solid rgb(197, 192, 192);
    border-left:  none;
  

}

.a {
    width: 165px;
    height: 479px;

}

.b {
    width: 190px;
    height: 480px;
    
    left: 170px;
    top: 285px;
    position: absolute;
}
.b ul{
    width: 190px;
    height: 460px;
    margin: 7px;
    margin-top: 30px;
    
    
    

}
.b li{
    width: 150px;
    height: 24px;
    margin: 1px;
  font-size: 14px;
  line-height: 24px;
  margin-left: 10px;
}
.b li:hover{
    background-color: rgb(190, 184, 184);
}

.c {
    width: 590px;
    height: 480px;
    left: 360px;
    top: 285px;
    background-image: url(../img/01.png);
    position: absolute;

}
.d{
    width: 190px;
    height: 480px;
    background-image: url(../img/bg4.png);
    left: 955px;
    top: 285px;
    position: absolute;
}
.e{
     width: 190px;
    height: 480px;
    
    left: 1150px;
    top: 285px;
    position: absolute;
}
.e1{
    width: 190px;
    height: 230px;
    position: absolute;
    background-image: url(../img/bg2.png);
   
    border: 1px solid rgb(218, 211, 211);
    background-color: black;
}
.e3{
    width: 190px;
    height: 238px;
    position: absolute;
    bottom: 3px;
    border: 1px solid rgb(218, 211, 211);
}
.tag{
    z-index: -1;
   
}
.tag li{
    margin-left: 22px;
    margin-top: 40px;
    
}
.li1{
   
   bottom: 25px;
    position: absolute;
    right: 147px;
  
    
  
}
.li2{
    
   bottom: 25px;
    position: absolute;
    right: 36px;
    
  
}
.li3{
   bottom: 25px;
    position: absolute;
    right: 92px;
  
}

.e3 ul{
    width:200px

}
.zz li{
        margin:15px;
       
}


.b1{
    width: 28px;
    height: 28px;
    background-image:url(../img/b1.jpg);
      margin-left: 5px;
}
.b1{
    background-image:url(../img/a1.png);
}
.b1:hover{
    background-image: url(../img/b1.jpg);
}
.b2{
    width: 28px;
    height: 28px;
    background-image:url(../img/b2.jpg);
}
.b2{
    background-image:url(../img/a2.png);
}
.b2:hover{
    background-image: url(../img/b2.jpg);
}
.b3{
    width: 28px;
    height: 28px;
    background-image:url(../img/b3.jpg);
}
.b3{
    background-image:url(../img/a3.png);
}
.b3:hover{
    background-image: url(../img/b3.jpg);
}
.b4{
    width: 28px;
    height: 28px;
    background-image:url(../img/b4.jpg);
     margin-left: 5px;
}
.b4{
    background-image:url(../img/a4.png);
}
.b4:hover{
    background-image: url(../img/b4.jpg);
}
.b5{
    width: 28px;
    height: 28px;
    background-image:url(../img/b5.jpg);
}
.b5{
    background-image:url(../img/a5.png);
}
.b5:hover{
    background-image: url(../img/b5.jpg);
}
.b6{
    width: 28px;
    height: 28px;
    background-image:url(../img/b6.jpg);
     
}
.b6{
    background-image:url(../img/a6.png);
}
.b6:hover{
    background-image: url(../img/b6.jpg);
}.b7{
    width: 28px;
    height: 28px;
    background-image:url(../img/b7.jpg);
       margin-left: 5px;
}
.b7{
    background-image:url(../img/a7.png);
}
.b7:hover{
    background-image: url(../img/b7.jpg);
}.b8{
    width: 28px;
    height: 28px;
    background-image:url(../img/b8.jpg);
    
}
.b8{
    background-image:url(../img/a8.png);
}
.b8:hover{
    background-image: url(../img/b8.jpg);
}.b9{
    width: 28px;
    height: 28px;
    background-image:url(../img/b9.jpg);
    
}
.b9{
    background-image:url(../img/a9.png);
}
.b9:hover{
    background-image: url(../img/b9.jpg);
}.b10{
    width: 28px;
    height: 28px;
    background-image:url(../img/b10.jpg);
       margin-left: 5px;
}
.b10{
    background-image:url(../img/a10.png);
}
.b10:hover{
    background-image: url(../img/b10.jpg);
}.b11{
    width: 28px;
    height: 28px;
    background-image:url(../img/b11.jpg);
     
}
.b11{
    background-image:url(../img/a11.png);
}
.b11:hover{
    background-image: url(../img/b11.jpg);
}
.b12{
    width: 28px;
    height: 28px;
    background-image:url(../img/b12.jpg);
     
}
.b12{
    background-image:url(../img/a12.png);
}
.b12:hover{
    background-image: url(../img/b12.jpg);
}




.button1 {
    width: 10px;
    height: 10px;
    left: 30px;
    top: 450px;

    position: absolute;
}

.button2 {
    width: 10px;
    height: 10px;
    left: 44px;
    top: 450px;

    position: absolute;
}

.button3 {
    width: 10px;
    height: 10px;
    left: 58px;
    top: 450px;

    position: absolute;
}

.button4 {
    width: 10px;
    height: 10px;
    left: 72px;
    top: 450px;

    position: absolute;
}

.button5 {
    width: 10px;
    height: 10px;
    left: 86px;
    top: 450px;

    position: absolute;
}

.button6 {
    width: 10px;
    height: 10px;
    left: 100px;
    top: 450px;

    position: absolute;
}

.button7 {
    width: 10px;
    height: 10px;
    left: 114px;
    top: 450px;

    position: absolute;
}

.button8 {
    width: 10px;
    height: 10px;
    left: 128px;
    top: 450px;

    position: absolute;
}

buttons {
    z-index: 2;
}

.L {
    width: 40px;
    height: 40px;

    z-index: 2;

    left: 0px;
    top: 215px;
    position: absolute;
}

.R {
    width: 40px;
    height: 40px;

    z-index: 2;
    left: 550px;
    top: 215px;
    position: absolute;
}

.left {
    left: -100px;
    top: 285px;
    position: absolute;
}

.right {
    left: -620px;
    top: 285px;
    position: absolute;
    z-index: 2;
}
</style>
