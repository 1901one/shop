<template>
  <div>
    <div class="top">
      <h4>猫眼电影</h4>
    </div>
    <Tab></Tab>
    <router-view />
  </div>
</template>

<script>
import Tab from '@/components/pages/Home/nav'
export default {
  components: {
    Tab
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

