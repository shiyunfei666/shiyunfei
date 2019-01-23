<template>
  <div id="app">
  	<el-container>
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="100px">
				<router-link to="/rwlist">rwlist</router-link>
			    <router-link to="/splist">splist</router-link>
			    <router-link to="/zmtlist">zmtlist</router-link>
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
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
