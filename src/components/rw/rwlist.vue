<template>
  <div>
    <el-button @click="a">点击</el-button>
  </div>
</template>

<script>
export default {
  name: 'rwlist',
  data () {
    return {
      
    }
  },
  methods: {
  	a(){
      var self = this;
      new Promise(function (resolve, reject) {
          var timeOut = Math.random() * 2;
          setTimeout(function () {
              if (timeOut < 1) {
                  resolve('resolve:' + timeOut + 'OK');
              }
              else {
                  reject('reject:' + timeOut + ' FIELDS.');
              }
          }, timeOut * 1000);
      }).then(function (r) {
        self.$message.success({ showClose: true, message: r });
      }).catch(function (reason) {
        self.$message.error({ showClose: true, message: reason });
      });
  	}
  }
}
</script>

<style>

</style>