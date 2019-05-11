<template>
  <div>
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
        { path: 'nowPlaying', name: '正在热映' },
        { path: 'comingSoon', name: '即将上映' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
$sc: 25;

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
