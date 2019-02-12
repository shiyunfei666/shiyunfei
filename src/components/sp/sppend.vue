<template>
  <div id="sppend">
    
  </div>
</template>

<script>
export default {
  name: 'sppend',
  data () {
    return {
      t: null,
      i: 0,
    }
  },
  mounted: function(){
    this.starttimg();
  },
  methods: {
    stoppoi(e){
        clearInterval(this.t)
    },
    starttimg(){
    	var index=1,z,s,self=this;
    	setInterval(()=>{
    		Math.random()>0.5 ? s = 1 : s = -1;
            z = Math.random()*500*s;
    	},3000)
    	this.t=setInterval(()=>{
    		var img = "<img class="+"a"+index+" src='/static/img/money.gif'/>";
	        $("#sppend").append(img);
	        var x,k;
	        x = Math.random() * $("#sppend").width();
	        k = Math.random();
	        $(".a"+index).css({
                left: x + 'px',
                width: k*200 + 'px'
	        })
          $(".a"+index).click(function(){
              self.i += 100;
              self.$message.success({ message: "共抓取" + self.i + "元！加油！" })
              $(this).remove();
          })
	        $(".a"+index).animate({
	        	top:$("#sppend").height()+'px',
	        	left: x + z + 'px',
	        }, (1-k)*5000+2500, "swing", function(){
	        	$(this).remove();
	        });
	        index++;
	    },100)
    }
  }
}
</script>

<style lang="scss">
#sppend{
	background: rgba(220,220,220,0.5);
	height: 100%;
	position: relative;
	overflow: hidden;
	>img{
		width: 40px;
		position: absolute;
		top: -40px;
    cursor: pointer;
	}
}
</style>