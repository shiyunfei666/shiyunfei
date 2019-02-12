<template>
  <div id="zmcon">
    <div id="box" :style="{transform: 'rotateX('+ y +'deg) rotateY('+ -x +'deg)'}">
      <div class="mofang_box mofang_box" v-for="item in 45">
        <div class="mofang qian"><img src="/static/img/timg.png"></div>
        <div class="mofang hou"><img src="/static/img/timg.png"></div>
        <div class="mofang left"><img src="/static/img/timg.png"></div>
        <div class="mofang right"><img src="/static/img/timg.png"></div>
        <div class="mofang top"><img src="/static/img/timg.png"></div>
        <div class="mofang buttom"><img src="/static/img/timg.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zmtlist',
  data () {
    return {
      x: 0,
      y: 0,
    }
  },
  mounted(){
    var self = this;
    var oBox =document.getElementById("zmcon");
    oBox.onmousedown = function(ev){
        ev =ev ||event;
        var a =ev.clientX;
        var b =ev.clientY;
        oBox.onmousemove =function (ev){
            ev = ev || event;
            self.x = self.x + ((a-ev.clientX)/$(this).width())*20;
            self.y = self.y + ((b-ev.clientY)/$(this).height())*20;
        }
    }
    document.onmouseup =function(){
        oBox.onmousemove =function(){
            null;
        }
    }
  },
  methods: {
    getcolor(){
      var objs = {
        0: 'orange',
        1: '#409EFF',
        2: 'yellow',
        3: 'black',
        4: 'green',
        5: 'red',
      };
      var num = Math.floor(Math.random()*6);
      return objs[num]
    }
  }
}
</script>

<style lang="scss">
#zmcon{
  height: 100%;
  overflow: hidden;
  #box{
    perspective: 800px;
    transform-style: preserve-3d;
    transition:  5s infinite;
    transform:rotateX(0deg) rotateY(0deg);
    position: relative;
    img{
      width: 50px;
      height: 50px;
    }
    .mofang_box{
      width: 50px;
      height: 50px;
      margin: 38px;
      position: relative;
      display: inline-block;
      transform-style: preserve-3d;
      transition: 10s;
      transform:rotateX(0deg)rotateY(0deg);
    }
    .mofang_box:hover{
      transform:rotateX(1800deg)rotateY(1800deg);
    }
    .mofang{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      opacity: 0.9;
      user-select: none;
    }
    //原来这六个面的div是叠加在一起的通过旋转 移动来让他们形成正方体
    .left{
      transform:rotateY(90deg)translateZ(-25px);
      background: orange;
    }
    .right{
      transform:rotateY(90deg)translateZ(25px);
      background: #409EFF;
    }
    .top{
      transform:rotateX(90deg)translateZ(25px)rotateZ(360deg);
      background: yellow;
    }
    .buttom{
      transform:rotateX(90deg)translateZ(-25px)rotateZ(180deg);
      background: black;
    }
    .hou{
      transform:rotateX(0deg)translateZ(-25px)rotateZ(180deg);
      background: green;
    }
    .qian{
      transform:rotateX(0deg)translateZ(25px);
      background: red;
    }
  }
}
</style>