<template>
  <div>
    <el-carousel :interval="4000" type="card" height="600px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img :src="'/static/img/'+item+'.jpg'">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'rwlist',
  data () {
    return {
      
    }
  },
  methods: {
  	a(){
  		this.$message({
	      showClose: true,
	      message: '这是一条消息提示'
	    });
  	}
  }
}
</script>

<style>
 .el-carousel__item img {
    width: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>