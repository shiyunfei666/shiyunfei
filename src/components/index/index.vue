<template>
  <div id="index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a href="javascript:;">
          <img src="/static/img/bg2.jpg" alt="">
        </a>
      </swiper-slide>
    </swiper>
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
export default {
  name: 'index',
  data () {
    return {
        swiperOption: {},
        swiperSlides: [1, 2, 3, 4, 5]
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
    aaa() {

    }
  },
  components: {
    swiper,
    swiperSlide
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