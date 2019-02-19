<template>
  <div id="login">
    <div id="imgscode"></div>
    <div id="cbj">
    	<span>传</span>
    	<span>播</span>
    	<span>匠</span>
      <span>助力企业成长！</span>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a href="javascript:;">
          <img src="/static/img/bg2.jpg" alt="">
        </a>
      </swiper-slide>
    </swiper>
    <div class="con">
    	<el-form :model="loginform">
        <div class="logintit">用户登录</div>
  		  <el-form-item>
  		      <el-input 
  		      v-model="loginform.username" 
  		      placeholder="手机号/已认证邮箱" 
  		      prefix-icon="el-icon-syf-user" 
  		      @keyup.native.enter="changeload"></el-input>
  		  </el-form-item>
  		  <el-form-item>
  		      <el-input 
  		      id="pd" 
  		      v-model="loginform.password" 
  		      placeholder="登录密码" 
  		      prefix-icon="el-icon-syf-mima" 
  		      type="password" 
  		      suffix-icon="el-icon-view" 
  		      @keyup.native.enter="changeload"></el-input>
  		  </el-form-item>
  		</el-form>
      <el-button class="toyanzhen" @click="tosignasd">点击按钮验证</el-button>
      <el-button type="primary" @click="changeload">登&nbsp;&nbsp;录</el-button>
      <div class="tosign">还没有账号？立即 <router-link to="/signup">免费注册</router-link></div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible" 
      :showClose="false"
      width="30%">
      <span style="margin-bottom: 20px;display: block;">您的手机号码： 15755073380</span>
      <el-input v-model="loginform.code" size="small" @keyup.native.enter="signphones">
        <template slot="append"><el-button size="small">点击发送验证码</el-button></template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="signphones">确 定</el-button>
      </span>
    </el-dialog>
    <div class="fotter">
      <ul class="fotlist">
        <li><a href="javascript:;">官方网站</a></li>
        <li><a href="javascript:;">联系我们</a></li>
        <li><a href="javascript:;">新闻动态</a></li>
        <li><a href="javascript:;">最新活动</a></li>
        <li><a href="javascript:;">招贤纳士</a></li>
        <li><a href="javascript:;">法律声明</a></li>
        <li><a href="javascript:;">服务协议</a></li>
      </ul>
      <div>Copyright © 201？-201？ dajiang.jiangpr.com All Rights Reserved.版权所有：大将传媒</div>
      <div>大同东信国际 上悦城 609</div>
      <div>ICP备案： 冀公网安备：</div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '@/assets/js/jquery.lgymove.js'
export default {
  name: 'login',
  data () {
    return {
        loginform: {
            username: '',
            password: '',
            code: ''
        },
        swiperOption: {},
        swiperSlides: [1, 2, 3, 4, 5],
        dialogVisible:false,
    }
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
  	changeload(){
      this.signphone()
  		var self = this;
  		if(self.loginform.username == ''){
            self.$message.error({ message: '用户名不为空' });
            return
  		}
  		if(self.loginform.password == ''){
            self.$message.error({ message: '密码不为空' });
            return
  		}
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
          }else{
          	self.$message.error({ message: res.msg });
          }
	      }
	    );
  	},
    signphone(){
      this.dialogVisible = true;
    },
    signphones(){
      console.log(this.loginform.code)
    },
    tosignasd(){
      $("#imgscode").imgcode({
        callback: function(data){
          console.log(data)
        }
      });
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
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>