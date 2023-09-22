<template>
  <div id="index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a href="javascript:;">
          <img src="/static/img/bg2.jpg" alt="">
        </a>
      </swiper-slide>
    </swiper>
    <select-common
    :data="getData()"
    v-model="selectValue"
    ></select-common>
    <tree-select v-model="value11" multiple :data="list11"></tree-select>
    <div class="router-list">
      <router-link to="/rwlist">rwlist</router-link>
      <router-link to="/rwzlist">rwzlist</router-link>
      <router-link to="/rwadd">rwadd</router-link>
      <router-link to="/splist">splist</router-link>
      <router-link to="/spadd">spadd</router-link>
      <router-link to="/sppend">sppend</router-link>
      <router-link to="/zmtlist">zmtlist</router-link>
      <router-link to="/zmtpend">zmtpend</router-link>
      <router-link to="/user">user</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/signup">signup</router-link>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import selectCommon from '../select.vue'
import treeSelect from '../treeSelect.vue'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {},
      swiperSlides: [1, 2, 3, 4, 5],
      selectValue: 1,
      list11: [{
        label: '系统',
        gid: 1,
        leaf: false,
        children: [
          { label: '用户', gid: 2},
          { label: '用户组', gid: 3},
          { label: '角色', gid: 4 },
          { label: '菜单', gid: 5 },
          { label: '组织架构', gid: 6 }
        ]
      },
      {
        label: '商品',
        gid: 7,
        leaf: false,
        children: [
          { label: '列表', gid: 8 },
          { label: '添加', gid: 9 },
          { label: '修改', gid: 10 },
          { label: '删除', gid: 11 },
          { label: '商品分类', gid: 12 },
          { label: '分类修改', gid: 13 }
        ]
      }],
      value11: [{gid: 1, label: "系统", leaf: false}]
    }
  },
  mounted() {
    var self = this;
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
    function aaa() {

    }
  },
  methods: {
    getId() {
      return Date.now() + '' + Math.random() * 10000
    },
    getData(){
      let arr = []
      for(let i in Array(this.swiperSlides)){
        console.log(i)
        arr.push({
          id: i,
          name: i
        })
      }
      return arr
    }
  },
  components: {
    swiper,
    swiperSlide,
    selectCommon,
    treeSelect
  }
}
</script>

<style lang="scss">
#index{
  .swiper-container{
    .swiper-wrapper{
      .swiper-slide{
        height: 250px;
        text-align: center;
        img{
          height: 100%;
        }
      }
    }
  }

  .router-list {
    padding: 30px 50px;
    a {
      font-size: 18px;
      display: block;
    }
  }
}
</style>