<template>
  <div id="box">
    <div class="mofang_box"id="mofang_box">
      <div class="mofang qian"><img src="/static/img/timg.png"></div>
      <div class="mofang hou"><img src="/static/img/timg.png"></div>
      <div class="mofang left"><img src="/static/img/timg.png"></div>
      <div class="mofang right"><img src="/static/img/timg.png"></div>
      <div class="mofang top"><img src="/static/img/timg.png"></div>
      <div class="mofang buttom"><img src="/static/img/timg.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zmtlist',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
#box{
  perspective: 800px;
  transform-style: preserve-3d;
  transition:  5s infinite;
  transform:rotateX(0deg) rotateY(0deg);
  img{
    width: 200px;
    height: 200px;
  }
  .mofang_box{
    width: 200px;
    height: 200px;
    margin: 100PX auto;
    position: relative;
    transform-style: preserve-3d;
    transition: 50s;
    transform:rotateX(0deg)rotateY(0deg);
  }
  .mofang_box:hover{
    transform:rotateX(3600deg)rotateY(3600deg);
  }
  .mofang{
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    position: absolute;
    opacity: 0.9;

  }
  //原来这六个面的div是叠加在一起的通过旋转 移动来让他们形成正方体
  .left{
    transform:rotateY(90deg)translateZ(-100px);
    background: blue;
  }
  .right{
    transform:rotateY(90deg)translateZ(100px);
    background: red;
  }
  .top{
    transform:rotateX(90deg)translateZ(100px)rotateZ(360deg);
    background: green;
  }
  .buttom{
    transform:rotateX(90deg)translateZ(-100px)rotateZ(180deg);
    background: yellow;
  }
  .hou{
    transform:rotateX(0deg)translateZ(-100px)rotateZ(180deg);
    background: #000;
  }
  .qian{
    transform:rotateX(0deg)translateZ(100px);
    background: orange;
  }
}
</style>