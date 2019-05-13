<template>
  <div id="my">
    <div class="header">
      <!-- <div class="jump">
    <router-link to="./yingyuan.vue">箭头</router-link>
      </div>-->
      <h4>
        我的
      </h4>
    </div>

    <div class="nav">
      <router-link class="nav_tuan"
                   active-class="selected"
                   v-for="(item,index) in list"
                   :key="index"
                   tag="div"
                   :to="item.path">{{item.text}}</router-link>

    </div>

  </div>
</template>
    


<script>
export default {
  data () {
    return {
      list: [
        { path: "meituan", text: "美团账号登录" },
        { path: "shouji", text: "手机验证登录" }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
$sc: 25;
$bg: 1px solid blue;
h4 {
  height: 50 / $sc + rem;
  line-height: 50 / $sc + rem;
  background: #e54847;
  font-size: 18 / $sc + rem;
  font-weight: 400;
  text-align: center;
  line-height: 50 / $sc + rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
}
.header {
  // width: 375 / $sc + rem;
  // // height: 50.5 / $sc + rem;
  // background: #df2d2d;
  // display: flex;
  // justify-content: space-between;

  .jump {
    width: 54.5 / $sc + rem;
    height: 50.5 / $sc + rem;
    color: white;
  }
}
.nav {
  width: 375 / $sc + rem;
  height: 50.5 / $sc + rem;
  display: flex;
  font-size: 16 / $sc + rem;
  justify-content: space-between;
  // border:$bg;

  .nav_tuan {
    width: 180 / $sc + rem;

    text-align: center;
    line-height: 50.5 / $sc + rem;
  }
  .selected {
    color: #df2d2d;
    border-bottom: 5px solid #df2d2d;
  }
}
</style>
