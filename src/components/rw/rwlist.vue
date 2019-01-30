<template>
  <div>
    <el-button @click="a">点击</el-button>
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

</style>