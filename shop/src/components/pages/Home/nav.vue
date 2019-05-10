<template>
  <div id="bo">
    <router-link to="/city">
      <div class="city-name">深圳
        <van-icon name="arrow-down" />
      </div>
    </router-link>
    <div class="hot-item active"
         data-tab=".n-hot">正在热映</div>
    <div class="hot-item "
         data-tab=".f-hot">即将上映</div>
    <div class="font">
      <van-icon name="search"
                color="" />
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
$sc: 25;
#bo {
  display: flex;
  width: 100%;
  height: 44 / $sc + rem;
  line-height: 44 / $sc + rem;
  border-bottom: 1 / $sc + rem solid #e6e6e6;
  justify-content: space-around;
}
.hot-item,
.city-name {
  font-size: 18 / $sc + rem;
}
.font {
  font-size: 20 / $sc + rem;
  color: red;
  margin-top: 5 / $sc + rem;
}
</style>

