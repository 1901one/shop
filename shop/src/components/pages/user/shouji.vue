<template>
<div class="a">
<div class="meituan">
   <form>
    <div class="input" >
    <p class="iphone">
    <input type="text" form='login' placeholder="请输入手机号" >
    <button>发送验证码</button>
    </p>
    <input type="text" placeholder="请输入短信验证码" class="note">
    </div>
    <input type="button" value="登录"  class="btn">
   </form>
  
</div>
 <div class="register">
       <a href="#">立即注册</a>
       <a href="#">找回密码</a>
   </div>
   <div class="kefu">
       <p class="company">© 猫眼电影 客服电话：</p>
       <p class="tel">400-670-5335</p>
   </div>
</div>
</template>
    


<script>
export default {

}
</script>

<style lang='scss' scoped>
$sc: 25;
$bg: 1px solid blue;
.meituan{
    display: flex;
    text-align: center;
.input{
    margin-top:10  / $sc + rem;
    .note{
     width: 375 / $sc + rem;
      height: 50.5 / $sc + rem;
      border:none;
      border-bottom:1px solid #ccc;
      outline:none;
    }
    p{
        display: flex;

        input{
            width:275 / $sc + rem;
            border:none;
            border-bottom:1px solid #ccc;
            outline:none;
        }
        button{
            width:100 / $sc + rem;
            height:30 / $sc + rem;
            border:none;
        }
    }
    
}
.btn{
    width:355 / $sc + rem;
    height:47 / $sc + rem;
   background-color: #df2d2d;
   background:#dcdcdc;
   border:none;
   margin-top:20 / $sc + rem;
   color:white;
   color:#999;
   font-size:18  / $sc + rem;
   border-radius: 5px;
    
}
}
.register{
     width:355 / $sc + rem;
    display: flex;
    justify-content: space-between;
    font-size:16 / $sc + rem;
    margin:10  / $sc + rem auto;
    // border:$bg;
   a{
   text-decoration:none;
   color:#df2d2d;
   } 
}
.kefu{
    display: flex;
  justify-content: center;
    font-size:14 / $sc + rem;
    .tel{
        color:#df2d2d;
    }
}
</style>
