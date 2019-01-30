<template>
	<div>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<el-radio v-model="radio" label="1">备选项1</el-radio>
		<el-radio v-model="radio" label="2">备选项2</el-radio>
		<el-radio v-model="radio" label="3">备选项3</el-radio>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			:default-sort = "{prop: 'date', order: 'descending'}"
			size="small" 
			border
			>
			<el-table-column
			  prop="date"
			  label="日期"
			  sortable
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="name"
			  label="姓名"
			  sortable
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="address"
			  label="地址"
			  sortable
			  :formatter="formatter">
			</el-table-column>
		</el-table>
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
	</div>
</template>

<script>
export default {
    name: 'user',
    data () {
	    return {
	    	input: "",
	    	radio: "",
	        tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1516 弄'
	        }]
	    }
    },
    methods: {
        formatter(row, column) {
          return row.address;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input{
	width: 40%;
}
</style>