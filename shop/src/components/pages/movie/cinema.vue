<template>
  <div id="app">
    <div class="topbar">
      <div class="city">
        <router-link to='/city'>
          <span>北京</span>
        </router-link>
        <i></i>
      </div>
      <router-link to='search'>
        <div class="search">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=">
          <span>搜影院</span>
        </div>
      </router-link>
    </div>

    <div class="tab">
      <div class="all">
        全城
        <span>△</span>
      </div>
      <div class="rand">
        品牌
        <span>△</span>
      </div>
      <div class="special">
        特色
        <span>△</span>
      </div>
    </div>
    <page></page>
  </div>
</template>

<script>
import page from './xiangqing'
export default {
  components: {
    page
  }
}
</script>


<style lang='scss' scoped>
$sc: 25;
$bg: 1px solid blue;
.header {
  width: 375 / $sc + rem;
  height: 50.5 / $sc + rem;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;

  h1 {
    font-size: 18 / $sc + rem;
    text-align: center;
    line-height: 50 / $sc + rem;
    margin: 0 52.5 / $sc + rem 0 0;
    //border:$bg;
    width: 100%;
  }
}
.topbar {
  width: 375 / $sc + rem;
  height: 44 / $sc + rem;
  display: flex;
  align-items: center;
  background: #f5f5f5;

  .city {
    width: 62 / $sc + rem;
    height: 29 / $sc + rem;
    padding-left: 15 / $sc + rem;
    font-size: 15 / $sc + rem;
    color: #666;
  }
  .search {
    height: 29 / $sc + rem;
    width: 280 / $sc + rem;
    border: 1 / $sc + rem solid #e6e6e6;
    justify-content: center;
    border-radius: 5 / $sc + rem;
    display: flex;
    align-items: center;
    margin-left: 18 / $sc + rem;
    margin-right: 15 / $sc + rem;
    background: white;

    img {
      width: 14 / $sc + rem;
      height: 14 / $sc + rem;
    }
    span {
      font-size: 13 / $sc + rem;
      color: #b2b2b2;

      display: inline-block;
    }
  }
}

.tab {
  display: flex;
  width: 375 / $sc + rem;
  height: 40 / $sc + rem;
  justify-content: space-between;
  font-size: 13 / $sc + rem;
  color: #777;
  border: 1 / $sc + rem solid #e6e6e6;

  .all {
    width: 119.33 / $sc + rem;
    height: 40 / $sc + rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rand {
    width: 119.33 / $sc + rem;
    height: 40 / $sc + rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .special {
    width: 119.33 / $sc + rem;
    height: 40 / $sc + rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
