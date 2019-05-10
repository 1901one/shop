<template>
  	  <div id="bo"> 	  	      
	      <div class="city-name">深圳<router-link to="/positioning"><van-icon name="arrow-down" /></router-link></div>
	      <div class="hot-item active" data-tab=".n-hot">正在热映</div>
	      <div class="hot-item " data-tab=".f-hot">即将上映</div>
	      <div class="font"><router-link to="/search"><van-icon name="search" color="" /></router-link></div> 
	</div>
</template>

<script>
</script>

<style>
	#bo{	
	display: flex;
	width: 100%;
	height: 3.25rem;
	line-height: 3.25rem;
	border-bottom: 1px solid #e6e6e6;						
    justify-content: space-around;		
}
.font{
	font-size: 20px;
	color: red;
	margin-top: 5px;
}
</style>