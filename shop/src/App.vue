<template>
  <div id="app">
    <van-tabbar v-model="active"
                active-color="red">
      <van-tabbar-item :icon='item.icon'
                       :to='item.path'
                       v-for="(item,index) in list"
                       :key="index">{{item.name}}</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { path: '/home', name: '首页', icon: 'wap-home' },
        { path: '/category', name: '分类', icon: 'coupon-o' },
        { path: '/car', name: '购物车', icon: 'shopping-cart-o' },
        { path: '/user', name: '我的', icon: 'user-o' },
      ],
      active:0
    }
  },
}
</script>

<style lang="scss">
</style>
