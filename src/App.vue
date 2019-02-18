<template>
  <div id="app">
  	<el-container>
		<el-header v-if="showlist">传播匠</el-header>
		<el-container>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
  </div>
</template>

<script>
import login from './components/login/login.vue'
export default {
  name: 'App',
  data () {
  	return {
        isload: false,
  	}
  },
  components: { login },
  computed: {
    showlist(){
		if(this.$route.path.includes(['login'])){
        	return false;
        }else{
        	return true;
        }
    }
  },
  created(){
    // if(!this.isload){
    // 	this.$router.push({ path: '/login' })
    // }else{
    // 	if(this.$route.path == '/' || this.$route.path == '/login'){
    //         this.$router.push({ path: '/user' })
    // 	}
    // }
  },
  methods: {
  	changeisload(msg){
        this.isload = true;
        this.$router.push({ path: '/user' })
  	},
  }
}
</script>

<style lang="scss">
html,body,#app,.el-container{
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  >.el-container{
  	>.el-header{
  		background: #409eff;
  		line-height: 60px;
  		height: 60px;
  		font-size: 22px;
  		color: #fff;
  	}
  	.el-main{
  		padding: 0;
  	}
  }
}
</style>
