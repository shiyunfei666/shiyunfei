<template>
  <div id="index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a href="javascript:;">
          <img src="/static/img/bg2.jpg" alt="">
        </a>
      </swiper-slide>
    </swiper>
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
  },
  methods: {

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
}
</style>