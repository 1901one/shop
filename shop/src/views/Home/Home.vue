<template>
	<div id="body">
	    <div id="head">
	        <h1 class="nav-header">猫眼电影</h1>       
	    </div>
        <Nav></Nav>
        <div class="box">
          <ul v-infinite-scroll="loadMore"
         	 infinite-scroll-disabled="loading"
         	  infinite-scroll-distance="10">
			<li class="ll" v-for="item in dingying" >
				<router-link to="/ticke">
				<div class="box2">				
				    <div class="avatar">     					      
				      <img :src="item.img | replaceWH('100.100')"  />					      
				    </div> 
				    <div class="content-wrapper">     
				      <div class="column">					        
				        <div class="title ">{{item.nm}}</div>					          					       
				        <div class="detail">
				            <div class="no-score">{{item.sc}}<button class="btn"><router-link to="/ticke">购票</router-link></button> </div>          
				            <div class="actor">主演：{{item.star}}</div>                                              
				            <div class="show-info">{{item.showInfo}}</div>         
				        </div>
				      </div>
                    </div>	
			    </div>
			    </router-link>
			</li>
		  </ul>
        </div>
  </div>
</template>

<script>
import Nav from '@/components/pages/Home/nav.vue'
import axios from 'axios'
import Vue from 'vue'

export default {
   components:{
   	Nav,
   	
   },
   data() {
			return {				
				loading: false,
				dingying:[]
			}
		},
		
   methods: {
			loadMore() {
				this.loading = true;
//				setTimeout(() => {
						axios.get("http://localhost:3000/films").then((res) => {
								this.dingying = this.dingying.concat(res.data);
							    this.loading = false;
						});		
//				}, 1000);
				// 图片转换
				Vue.filter('replaceWH', (val,wh) => {
                return val.replace('w.h', wh);
             })
			}			
		}
}
</script>

<style lang="scss" scoped="scoped">
#head{
	display: block;
	width: 100%;
	background: brown;
	height: 50px;
	}
h1{
	color: white;
	overflow: hidden;
	font-size: 20px;
    font-weight: 400;
	text-align: center;
    line-height: 50px;
	}
	
/*.box2{
	height:500px;
}*/
ul{
height:500px;
overflow-y: auto;
}
.ll{
	height: 130px;
	padding-bottom: 20px;
	
}	

.avatar{
	margin-top: 1px;
    margin-left: 22px;
    
}
.content-wrapper{
	margin-top: -102px;
    margin-left: 110px;
    color: grey;
	}
.column{
	border-bottom: 1px solid #e6e6e6;
}
.title{
	font-size: 16px;
	
}
.title,.no-score,.actor,.show-info{
	padding-bottom: 6px;
}
	.sctor{
		overflow: hidden;
	}
button{
	float: right;
	height: 30px;
	border-radius: 4px;	
	background: red;
	border: none;
	margin-right: 6px;
}
.btn{
	color: white;
}
</style>
