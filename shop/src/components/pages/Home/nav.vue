<template>
  <div>
    <div class="top">
      <h4>猫眼电影</h4>
    </div>
    <div class="topbar">
      <router-link to='/city'>
        <span>北京</span>
      </router-link>

      <router-link v-for='(item,index) of tabbar'
                   :key="index"
                   tag='li'
                   :to='item.path'
                   active-class='selected'>
        {{item.name}}
      </router-link>
      <router-link to="/search">
        <span>搜索</span>
      </router-link>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      tabbar: [
        { path: '/home/nowPlaying', name: '正在热映' },
        { path: '/home/comingSoon', name: '即将上映' }
      ]
    }
  },
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
.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 44 / $sc + rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14 / $sc + rem;
  .selected {
    color: #ef4238;
    border-bottom: 1px solid red;
  }
}
</style>
