<template>
  <div>
    rwlist
    <button @click="a">点击</button>
  </div>
</template>

<script>
export default {
  name: 'rwlist',
  data () {
    return {
      
    }
  },
  mounted: function(){
  	
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>