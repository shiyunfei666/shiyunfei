<template>
  <div id="login">
    <div id="imgscode"></div>
    <div class="con">
    	<el-form :model="formLabelAlign">
		  <el-form-item>
		      <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" prefix-icon="el-icon-syf-user"></el-input>
		  </el-form-item>
		  <el-form-item>
		      <el-input id="pd" v-model="formLabelAlign.password" placeholder="请输入密码" prefix-icon="el-icon-syf-mima" type="password" suffix-icon="el-icon-view"></el-input>
		  </el-form-item>
		</el-form>
    	<el-button @click="changeload">登&nbsp;&nbsp;录</el-button>
    </div>
    
  </div>
</template>

<script>
import '@/assets/js/jquery.lgymove.js'
export default {
  name: 'login',
  data () {
    return {
        formLabelAlign: {
            username: '',
            password: '',
        }
    }
  },
  props: {
    isload: Boolean,
  },
  mounted: function(){
  	// $("#imgscode").imgcode();
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
  	changeload(){
  		var self = this;
  		self.apphttps(
	      {
	        method: "post",
	        url: "adminlogin",
	        data: { code: 20, pd: 123456, us: 'shiyunfei' }
	      },
	      function(res) {
	        if(res.result == -1){
                console.log(res)
            }else{
            	self.$message.error({ message: res });
            }
	      }
	    );
	    // self.apphttps(
	    //   {
	    //     method: "post",
	    //     url: "admindlsend",
	    //     data: { phone: 15755073380 }
	    //   },
	    //   function(res) {
	    //     if(res.result == -1){
     //            console.log(res)
     //        }else{
     //        	self.$message.error({ message: res });
     //        }
	    //   }
	    // );
  		// if(this.formLabelAlign.username == 'shiyunfei' && this.formLabelAlign.password == '123456'){
    //         this.$emit('changeisload',true)
  		// }else{
  		// 	// this.$emit('changeisload',true)
  		// 	this.$message.error({
		  //     message: '用户名或密码不对'
		  //   });
  		// }
  	}
  }
}
</script>