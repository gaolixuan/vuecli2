<template>
  <div>
    <div class="next">
      <div class="inner">
        <div class="place" v-on:mouseenter="show = true">
          <span>{{ place }}</span>
        </div>
        <div class="w"></div>
      </div>
    </div>
    <div class="dir" v-show="show" v-on:mouseleave="show = false">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          v-on:click="change(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Next",
  data() {
    return {
      show: false,
      list: [
        "北京",
        "上海",
        "天津",
        "重庆",
        "河北",
        "山西",
        "河南",
        "辽宁",
        "吉林",
        "黑龙江",
        "内蒙古",
        "江苏",
        "安徽",
        "山东",
        "浙江",
        "福建",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "新疆",
        "四川",
        "海南",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",

        "青海",
        "宁夏",
       
      ],
      i: -1,
      place: "上海",
    };
  },
  methods: {
    change(index) {
      this.i = index;
      this.place = this.list[this.i];
    },
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style>
.dir ul {
  width: 500px;
}
.dir ul li {
  margin-left: 40px;
  margin-top: 15px;
}
.dir ul li:hover {
  color: red;
}
.next {
  width: 1540px;
  height: 31px;
  background-color: rgb(231, 227, 227);
}

.inner {
  width: 1190px;
  height: 30px;
  left: 165px;

  position: absolute;
}

.place {
  width: 70px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  float: left;
}

span {
  position: absolute;
  margin-left: 10px;
}

span:hover {
  color: red;
}

.place:hover {
  background-color: #fff;
}

.dir {
  width: 500px;
  height: 200px;
  left: 165px;
  border: 1px solid rgb(121, 115, 115);
  border-top: none;
  position: absolute;
  background-color: #fff;
  z-index: 2;
}

.f1 li {
  list-style: none;
  display: inline;

  margin-left: 40px;
}

.f2 li {
  list-style: none;
  display: inline;

  margin-left: 40px;
}

.f3 li {
  list-style: none;
  display: inline;

  margin-left: 40px;
}

.f4 li {
  list-style: none;
  display: inline;

  margin-left: 40px;
}
.w {
  width: 30px;
  height: 30px;
  left: 55px;
  position: absolute;
  background-image: url(../img/place.png);
}
</style>
