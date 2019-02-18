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
            <li>②完善资料</li>
            <li>③注册完成</li>
          </ul>
        </div>
        <div class="step1">
          <el-form :model="signupform" label-width="120px">
            <el-form-item label="手机号">
                <el-input 
                v-model="signupform.phone" 
                placeholder="手机号/已认证邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input 
                v-model="signupform.password" 
                placeholder="密码"
                type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input 
                v-model="signupform.repassword" 
                placeholder="密码"
                type="password"></el-input>
            </el-form-item>
            <el-form-item label="输入验证码">
                <el-input placeholder="请输入验证码" v-model="signupform.code">
                  <template slot="append">发送验证码</template>
                </el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="hasreaded">我已阅读并同意<a href="javascript:;">《网站服务协议》</a></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button class="step1btn" type="primary" size="small" :disabled="!hasreaded">下一步</el-button>
            </el-form-item>
          </el-form>

        </div>
       <!--  <div class="step2">
          
        </div> -->
        <div class="helfs">
          <span>已有账号, </span> <el-button type="primary" size="mini">登录</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      signupform: {
        phone: '',
        password: '',
        repassword: '',
        code: '',
      },
      hasreaded: true,
    }
  },
  methods: {

  }
}
</script>