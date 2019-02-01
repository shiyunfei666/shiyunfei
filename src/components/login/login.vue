<template>
  <div id="login">
    <div id="imgscode"></div>
    <div id="cbj">
    	<span>传</span>
    	<span>播</span>
    	<span>匠</span>
    </div>
    <!-- <canvas id="canvas"></canvas> -->
    <div class="con">
    	<el-form :model="loginform">
		  <el-form-item>
		      <el-input 
		      v-model="loginform.username" 
		      placeholder="请输入用户名" 
		      prefix-icon="el-icon-syf-user" 
		      @keyup.native.enter="changeload"></el-input>
		  </el-form-item>
		  <el-form-item>
		      <el-input 
		      id="pd" 
		      v-model="loginform.password" 
		      placeholder="请输入密码" 
		      prefix-icon="el-icon-syf-mima" 
		      type="password" 
		      suffix-icon="el-icon-view" 
		      @keyup.native.enter="changeload"></el-input>
		  </el-form-item>
		</el-form>
    	<el-button @click="changeload">登&nbsp;&nbsp;录</el-button>
    </div>
    
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
import '@/assets/js/jquery.lgymove.js'
// import '@/assets/js/canvas.js'
export default {
  name: 'login',
  data () {
    return {
        loginform: {
            username: '',
            password: '',
        }
    }
  },
  computed: {
    ...mapState({
        isShow:state=>state.showFooter,
        changableNum:state=>state.changableNum
    }),
    ...mapGetters({
        isShow:'isShow',
        getChangedNum:'getChangedNum',
    })
  },
  props: {
    isload: Boolean,
  },
  mounted: function(){
  	 $(".el-icon-view").click(function(){
      if($("#pd").attr("type")=="text"){
        $("#pd").attr("type","password");
      }
      else{
        $("#pd").attr("type","text");
      }
    });
  },
  methods: {
  	...mapActions([ 'hideFooter', 'showFooter', 'getNewNum' ]),
  	changeload(){
  		var self = this;
  		if(self.loginform.username == ''){
            self.$message.error({ message: '用户名不为空' });
            return
  		}
  		if(self.loginform.password == ''){
            self.$message.error({ message: '密码不为空' });
            return
  		}
  		self.$emit('changeisload',true)
  		self.apphttps(
	      {
	        method: "post",
	        url: "adminlogin",
	        data: {
	        	code: 20, 
	        	pd: self.loginform.password, 
	        	us: self.loginform.username 
	        }
	      },
	      function(res) {
	        if(res.result == -1){
	        	self.$message.success({ message: '登陆成功' });
	        	$("#imgscode").imgcode();
                // self.$emit('changeisload',true)
            }else{
            	self.$message.error({ message: res.msg });
            }
	      }
	    );
	    
  	},
  	sendcode(){
  		var self = this;
  		self.apphttps(
	      {
	        method: "post",
	        url: "admindlsend",
	        data: { phone: 15755073380 }
	      },
	      function(res) {
	        if(res.result == -1){
                console.log(res)
            }else{
            	self.$message.error({ message: res.msg });
            }
	      }
	    );
  	}
  }
}
</script>