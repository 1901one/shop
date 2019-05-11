<template>
  <div>
<<<<<<< HEAD:shop/src/views/Home/Home.vue
    <div class="top">
      <h4>猫眼电影</h4>
    </div>
    <Tab></Tab>
    <router-view />
=======
    这是首页
    <Upcoming />
>>>>>>> zjy:shop/src/views/Home/comingSoon.vue
  </div>
</template>

<script>
<<<<<<< HEAD:shop/src/views/Home/Home.vue
import Tab from '@/components/pages/Home/nav'
export default {
  components: {
    Tab
=======
import Upcoming from "./Upcoming"
export default {
  components: {
    Upcoming
>>>>>>> zjy:shop/src/views/Home/comingSoon.vue
  }
}
</script>

<style lang="scss" scoped>
$sc: 25;
.top {
  height: 50 / $sc + rem;
  line-height: 50 / $sc + rem;
  background: #e54847;
  h4 {
    font-size: 18 / $sc + rem;
    font-weight: 400;
    text-align: center;
    line-height: 50 / $sc + rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
  }
}
</style>

