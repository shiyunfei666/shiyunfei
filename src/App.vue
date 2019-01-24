<template>
  <div id="app">
  	<el-container>
		<el-header>传播匠</el-header>
		<el-container>
			<el-aside width="200px">
			    <el-menu
			      class="el-menu-vertical-demo"
			      background-color="#dcdfe6"
			      @select="handleSelect"
			      text-color="#000"
			      active-text-color="#409eff"
			      :unique-opened="true">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>个人中心</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="1-1">个人信息</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="2">
			        <template slot="title">
			          <i class="el-icon-menu"></i>
			          <span>软文投放</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="2-1">软文列表</el-menu-item>
			          <el-menu-item index="2-2">软文发布</el-menu-item>
			          <el-menu-item index="2-3">执行情况</el-menu-item>
			          <el-menu-item index="2-4">待完成</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="3">
			        <template slot="title">
			          <i class="el-icon-document"></i>
			          <span>自媒体投放</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="3-1">自媒体列表</el-menu-item>
			          <el-menu-item index="3-2">自媒体发布</el-menu-item>
			          <el-menu-item index="3-3">执行情况</el-menu-item>
			          <el-menu-item index="3-4">待完成</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="4">
			        <template slot="title">
			          <i class="el-icon-setting"></i>
			          <span>视频传播</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="4-1">视频发布</el-menu-item>
			          <el-menu-item index="4-2">执行情况</el-menu-item>
			          <el-menu-item index="4-3">待完成</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="5">
			        <template slot="title">
			          <i class="el-icon-tickets"></i>
			          <span>统计看板</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="5-1">订单汇总</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-menu-item index="5.5">

			      </el-menu-item>
			      <el-submenu index="6">
			        <template slot="title">
			          <i class="el-icon-star-on"></i>
			          <span>订单中心</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="6-1">订单统计</el-menu-item>
			          <el-menu-item index="6-2">内部充值</el-menu-item>
			          <el-menu-item index="6-3">充值记录</el-menu-item>
			          <el-menu-item index="6-4">内部订单汇总</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="7">
			        <template slot="title">
			          <i class="el-icon-share"></i>
			          <span>执行管理</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="7-1">软文订单</el-menu-item>
			          <el-menu-item index="7-2">自媒体订单</el-menu-item>
			          <el-menu-item index="7-3">视频订单</el-menu-item>
			          <el-menu-item index="7-4">订单汇总</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="8">
			        <template slot="title">
			          <i class="el-icon-circle-plus"></i>
			          <span>添加资源</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="8-1">软文资源添加</el-menu-item>
			          <el-menu-item index="8-2">软文列表</el-menu-item>
			          <el-menu-item index="8-3">自媒体资源添加</el-menu-item>
			          <el-menu-item index="8-4">自媒体列表</el-menu-item>
			          <el-menu-item index="8-5">视频传播添加</el-menu-item>
			          <el-menu-item index="8-6">视频传播列表</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="9">
			        <template slot="title">
			          <i class="el-icon-upload2"></i>
			          <span>资源审批</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="9-1">软文列表</el-menu-item>
			          <el-menu-item index="9-2">自媒体列表</el-menu-item>
			          <el-menu-item index="9-3">视频传播列表</el-menu-item>
			          <el-menu-item index="9-4">记录列表</el-menu-item>
			          <el-menu-item index="9-5">资源修改</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="10">
			        <template slot="title">
			          <i class="el-icon-more"></i>
			          <span>用户管理</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="10-1">用户列表</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-submenu index="11">
			        <template slot="title">
			          <i class="el-icon-message"></i>
			          <span>用户管理</span>
			        </template>
			        <el-menu-item-group>
			          <el-menu-item index="11-1">管理员权限列表</el-menu-item>
			          <el-menu-item index="11-2">禁止用户权限列表</el-menu-item>
			          <el-menu-item index="11-3">添加公告</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      <el-menu-item index="12">
			        <i class="el-icon-service"></i>
			        <span slot="title">QQ:1546464654</span>
			      </el-menu-item>
			      <el-menu-item index="13">
			        <i class="el-icon-phone"></i>
			        <span slot="title">13478147147</span>
			      </el-menu-item>
			      <el-menu-item index="14">
			        <i class="el-icon-phone-outline"></i>
			        <span slot="title">13478147147</span>
			      </el-menu-item>
			    </el-menu>
			</el-aside>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return {

  	}
  },
  methods: {
  	handleSelect(key, keyPath) {
      if(key == '2-1'){
      	this.$router.push({ path: '/rwlist' })
      }else if(key == '1-1'){
      	this.$router.push({ path: '/user' })
      }else if(key == '3-1'){
      	this.$router.push({ path: '/zmtlist' })
      }else if(key == '4-1'){
      	this.$router.push({ path: '/splist' })
      }
    }
  }
}
</script>

<style lang="scss">
html,body,#app,.el-container,.el-aside,.el-menu{
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
  	>.el-container{
  		>.el-aside{
  			>.el-menu{
  				overflow-x: hidden;
  				.el-menu-item{
					height: 35px;
					line-height: 35px;
					width: 200px;
				}
  				>.el-submenu{
  					>.el-submenu__title{
  						height: 35px;
						line-height: 35px;
  					}
  					>ul{

  					}
  					.el-menu-item-group__title{
					    padding: 0;
  					}
  				}
  			}
  		}
  	}
  }
}
.el-submenu__title,.el-submenu{
	width: 200px;
}
</style>
