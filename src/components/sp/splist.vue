<template>
  <div id="splist" @click="stoppoi" @mousemove="startpoi">
    <div class="con"></div>
  </div>
</template>

<script>
export default {
  name: 'splist',
  data () {
    return {
      t: null
    }
  },
  mounted: function(){
    this.starttimgs();
  },
  methods: {
    stoppoi(e){
        clearInterval(this.t)
    },
    startpoi(e){
    	var el=e.currentTarget;
    	if(e.target.nodeName == 'DIV' && e.target.id == 'splist'){
    		console.log(e.offsetY,e.offsetX)
	     //    var index=0;
	     //    var img = "<img class="+"a"+index+" src='/static/img/timg.png'/>";
		    // $("#splist").append(img);
		    // $(".a"+index).css({
	     //        top: e.offsetY + 'px',
	     //        left: e.offsetX + 'px'
	     //    })
    	}else if(e.target.nodeName == 'IMG'){
            $(e.target).remove();
    	}
    },
    starttimgs(){
    	var index=1,z,s;
    	setInterval(()=>{
    		Math.random()>0.5 ? s = 1 : s = -1;
            z = Math.random()*500*s;
    	},3000)
    	this.t=setInterval(()=>{
    		var img = "<img class="+"a"+index+" src='/static/img/timg.png'/>";
	        $("#splist").append(img);
	        var x,k;
	        x = Math.random() * $("#splist").width();
	        k = Math.random();
	        $(".a"+index).css({
                left: x + 'px',
                width: k*40 + 'px'
	        })
	        $(".a"+index).animate({
	        	top:$("#splist").height()+'px',
	        	left: x + z + 'px',
	        }, (1-k)*5000+2500, "swing", function(){
	        	$(this).remove();
	        });
	        index++;
	    },50)
    }
  }
}
</script>

<style lang="scss">
#splist{
	background: #000;
	height: 100%;
	position: relative;
	overflow: hidden;
	>img{
		width: 40px;
		position: absolute;
		top: -40px;
	}
	.con{
		position: absolute;
		bottom: 0;
		height: 40px;
		width: 100%;
		background: linear-gradient(#000,#fff);
	}
}
</style>