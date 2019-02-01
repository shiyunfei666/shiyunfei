<template>
  <div id="spadd">
    <div>
    	
    </div>
  </div>
</template>

<script>
export default {
  name: 'spadd',
  data () {
    return {
      t: null
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
    	var index=1,z,s;
    	setInterval(()=>{
    		Math.random()>0.5 ? s = 1 : s = -1;
            z = Math.random()*500*s;
    	},3000)
    	this.t=setInterval(()=>{
    		var divs = "<div class="+"a"+index+"></div>";
	        $("#spadd").append(divs);
	        var x,k;
	        x = Math.random() * $("#spadd").width();
	        k = Math.random();
	        $(".a"+index).css({
                left: x + 'px',
                width: k*80 + 'px',
                height: k*80 + 'px'
	        })
	        $(".a"+index).animate({
	        	top: 0 +'px',
	        	left: x + z + 'px',
	        }, (1-k)*5000+5000, "swing", function(){
	        	$(this).animate({
	                width: k*80*2 + 'px',
	                height: k*80*2 + 'px',
	                opacity: 0
	        	},50,function(){
	        		$(this).remove();
	        	})
	        });
	        index++;
	    },200)
    }
  }
}
</script>

<style lang="scss">
#spadd{
	background: #f4fffd;
	height: 100%;
	position: relative;
	overflow: hidden;
	>div{
		position: absolute;
		bottom: -40px;
		background: radial-gradient(#ffffff, #cef1f1, #cdcde8);
		border-radius: 50%;
		box-shadow: 2px 2px 4px #cef1f1;
	}
}
</style>