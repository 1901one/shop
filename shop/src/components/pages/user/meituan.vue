<template>
<div class="b">
<div class="meituan">
   <form>
    <div class="input" >
    <input type="text" form='login' placeholder="用户名/手机号/Email" >
    <input type="text" placeholder="请输入您的密码">
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
    input{
     width: 375 / $sc + rem;
      height: 50.5 / $sc + rem;
      border:none;
      border-bottom:1px solid #ccc;
      outline:none;
    }
    
}
.btn{
    width:355 / $sc + rem;
    height:47 / $sc + rem;
   background-color: #df2d2d;
   border:none;
   margin-top:20 / $sc + rem;
   color:white;
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
