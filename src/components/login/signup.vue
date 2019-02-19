<template>
  <div id="signup">
    <div class="mainter">
      <div class="top">
        <span>传播匠  助力企业成长！</span>
        <ul>
          <li><router-link to="/login">登陆 |</router-link></li>
          <li><router-link to="/login">代理加盟 |</router-link></li>
          <li><router-link to="/login">投诉建议</router-link></li>
        </ul>
      </div>
      <div class="con clearfix">
        <div class="stepline">
          <ul>
            <li class="steps">①注册账号</li>
            <li :class="{steps: (showmodel == 1||showmodel == 2)}">②完善资料</li>
            <li :class="{steps: showmodel == 2}">③注册完成</li>
          </ul>
        </div>
        <div class="step1 clearfix" v-show="showmodel == 0">
          <el-form :model="signupform" label-width="120px">
            <el-form-item label="用户名">
                <el-input 
                v-model="signupform.username" 
                autofocus 
                @blur="checkusername"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input 
                v-model="signupform.phone" 
                placeholder="手机号/已认证邮箱" 
                @blur="checkphone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input 
                v-model="signupform.password" 
                placeholder="密码"
                type="password" 
                @blur="checkpassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input 
                v-model="signupform.repassword" 
                placeholder="密码"
                type="password" 
                @blur="checkrepassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="hasreaded">我已阅读并同意<a href="javascript:;">《网站服务协议》</a></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button class="step1btn" type="primary" size="small" :disabled="!hasreaded" @click="towriteinfo">下一步</el-button>
            </el-form-item>
          </el-form>
          <div class="tiplist">
            <div>
              <el-alert v-if="usernametip == 0" title="用户名为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="usernametip == 1" title="用户名格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="usernametip == 2" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
            <div>
              <el-alert v-if="phonetip == 0" title="手机号为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="phonetip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="phonetip == 2" title="手机号正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
            <div>
              <el-alert v-if="passwordtip == 0" title="密码为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="passwordtip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="passwordtip == 2" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
            <div>
              <el-alert v-if="repasswordtip == 0" title="密码为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="repasswordtip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="repasswordtip == 2" title="两次密码不一致！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="repasswordtip == 3" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
          </div>
        </div>
        <div class="step2 clearfix" v-show="showmodel == 1">
          <el-form :model="signupform" label-width="120px">
            <el-form-item label="邀请码">
                <el-input 
                v-model="signupform.invitecode" 
                @blur="checkinvitecode"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input 
                v-model="signupform.qq" 
                @blur="checkqq"></el-input>
            </el-form-item>
            <el-form-item label="输入验证码">
                <el-input placeholder="请输入验证码" v-model="signupform.code" @blur="checkcode">
                  <template slot="append"><el-button @click="sendcode">{{codeword}}</el-button></template>
                </el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="hasreaded">我已阅读并同意<a href="javascript:;">《网站服务协议》</a></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button class="step1btn" type="primary" size="small" :disabled="!hasreaded" @click="tosigninfo">下一步</el-button>
            </el-form-item>
          </el-form>
          <div class="tiplist">
            <div>
              <el-alert v-if="invitecodetip == 0" title="邀请码可以为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="invitecodetip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="invitecodetip == 2" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
            <div>
              <el-alert v-if="qqtip == 0" title="QQ号为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="qqtip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="qqtip == 2" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
            <div>
              <el-alert v-if="codetip == 0" title="验证码为空！" type="warning" show-icon :closable="false"></el-alert>
              <el-alert v-if="codetip == 1" title="格式不正确！" type="error" show-icon :closable="false"></el-alert>
              <el-alert v-if="codetip == 2" title="格式正确！" type="success" show-icon :closable="false"></el-alert>
            </div>
          </div>
        </div>
        <div class="step3 clearfix" v-show="showmodel == 2">
          注册成功！
        </div>
        <div class="helfs" v-show="showmodel != 2">
          <span>已有账号, </span> <el-button type="primary" size="mini"><router-link to="/login">登录</router-link></el-button>
          <div class="helftip">注册帮助</div>
          <ul>
            <li><a href="javascript:;">会员注册流程</a></li>
            <li><a href="javascript:;">收不到验证码怎么办？</a></li>
            <li><a href="javascript:;">如何实名认证</a></li>
            <li><a href="javascript:;">登录用户名忘记了怎么办？</a></li>
          </ul>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2" 
      :showClose="false"
      width="30%">
      <span style="margin-bottom: 20px;display: block;">您的手机号码： {{signupform.phone}}</span>
      <el-input v-model="signphonecode" @keyup.native.enter="signphoness" class="sendcodesss">
        <template slot="append"><img :src="appConfig.apiBaseUrl + '/main/main/code'" @click="changecodeimg" alt=""></template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="signphoness">发 送</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import appConfig from '@/assets/js/appConfig.js'
export default {
  name: 'signup',
  data () {
    return {
      signupform: {  //注册信息
        username: '',
        phone: '',
        password: '',
        repassword: '',
        code: '',
        invitecode: '',
        qq: '',
      },
      usernametip: 6,
      phonetip: 6,
      passwordtip: 6,
      repasswordtip: 6,
      codetip: 6,
      invitecodetip: 6,
      qqtip: 6,

      hasreaded: true,
      codeword: '发送验证码',
      codetime: 0,
      dialogVisible2: false,
      signphonecode: '',
      appConfig: appConfig,
      showmodel: 0,
    }
  },
  methods: {
    checkusername(){
      var regExp = /^([A-Za-z0-9]{2,10})|([\u4e00-\u9fa5]{1,5})|([\u4e00-\u9fa5][\w\W]{1})$/;
      if(this.signupform.username == ""){
        this.usernametip = 0;
      }else if(!regExp.test(this.signupform.username)){
        this.usernametip = 1;
      }else{
        this.usernametip = 2;
      }
    },
    checkphone(){
      var regExp = /^(86)?((13\d{9})|(15[0,1,2,3,5,6,7,8,9]\d{8})|(18[0,5,6,7,8,9]\d{8}))$/;
      if(this.signupform.phone == ""){
        this.phonetip = 0;
      }else if(!regExp.test(this.signupform.phone)){
        this.phonetip = 1;
      }else{
        this.phonetip = 2;
      }
    },
    checkpassword(){
      var regExp = /^[a-zA-Z]{1}[\s\S]{5,}$/;
      if(this.signupform.password == ""){
        this.passwordtip = 0;
      }else if(!regExp.test(this.signupform.password)){
        this.passwordtip = 1;
      }else{
        this.passwordtip = 2;
      }
    },
    checkrepassword(){
      var regExp = /^[a-zA-Z]{1}[\s\S]{5,}$/;
      if(this.signupform.repassword == ""){
        this.repasswordtip = 0;
      }else if(!regExp.test(this.signupform.repassword)){
        this.repasswordtip = 1;
      }else if(this.signupform.password != this.signupform.repassword){
        this.repasswordtip = 2;
      }else{
        this.repasswordtip = 3;
      }
    },
    checkcode(){
      var regExp = /^\d{6}$/;
      if(this.signupform.code == ""){
        this.codetip = 0;
      }else if(!regExp.test(this.signupform.code)){
        this.codetip = 1;
      }else{
        this.codetip = 2;
      }
    },
    checkinvitecode(){
      var regExp = /^(dj){1,2}[\s\S]{3,}$/;
      if(this.signupform.invitecode == ""){
        this.invitecodetip = 0;
      }else if(!regExp.test(this.signupform.invitecode)){
        this.invitecodetip = 1;
      }else{
        this.invitecodetip = 2;
      }
    },
    checkqq(){
      var regExp = /^[1-9]\d{4,10}$/;
      if(this.signupform.qq == ""){
        this.qqtip = 0;
      }else if(!regExp.test(this.signupform.qq)){
        this.qqtip = 1;
      }else{
        this.qqtip = 2;
      }
    },
    towriteinfo(){
      if(this.usernametip != 2){
        this.$message.error({ message: '请输入正确的用户名！' });
        return
      }
      if(this.phonetip != 2){
        this.$message.error({ message: '请输入正确的手机号！' });
        return
      }
      if(this.passwordtip != 2 || this.repasswordtip != 3){
        this.$message.error({ message: '请输入密码！' });
        return
      }
      this.showmodel = 1;
    },
    tosigninfo(){
      if(this.qqtip != 2){
        this.$message.error({ message: '请输入正确的QQ号！' });
        return
      }
      if(this.codetip != 2){
        this.$message.error({ message: '请输入验证码！' });
        return
      }
      this.showmodel = 2;
      var self = this;
      setTimeout(function(){
        self.$router.push('/login');
      },2000)
    },
    sendcode(){
      if(this.phonetip != 2){
        this.$message.error({ message: '请输入正确的手机号！' });
        return
      }
      if(this.codeword == '发送验证码'){
        this.dialogVisible2 = true;
      }else{
        this.$message.info({ message: '验证码已发送，请查看手机' });
      }
    },
    changecodeimg(e){
      $(e.currentTarget).attr('src',this.appConfig.apiBaseUrl + '/main/main/code');
    },
    signphoness(){
      if(typeof(this.signphonecode - 0) != 'number'){
        this.$message.error({ message: '请输入正确的验证码！' });
        return
      }
      var self = this;
      self.apphttps(
        {
          method: "post",
          url: "adminsend",
          data: { phone: self.signupform.phone, code: self.signphonecode }
        },
        function(res) {
          if(res.result == 1){
              self.$message.success({ message: '发送成功！' });
              self.dialogVisible2 = false;
              self.setcodetime();
            }else{
              self.$message.error({ message: res.msg });
            }
        }
      );
    },
    setcodetime(){
      var self = this;
      self.codetime = 60;
      var myVar = setInterval(function(){
        if(self.codetime == 0){
          self.codeword = '发送验证码';
          clearInterval(myVar);
          return
        }
        self.codetime = self.codetime - 1;
        self.codeword = self.codetime + 's';
      }, 1000);
    }
  }
}
</script>