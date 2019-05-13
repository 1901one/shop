<template>
  <div id="search">
    <h4>搜索</h4>
    <div class="wrapper"
         ref="wrapper">
      <div class="content">
        <input type="text"
               class="search"
               placeholder="搜电影、搜影院"
               v-model="title" />
        <ul>
          <li v-for="(item,index) in search"
              :key="index">
            <div class="movie cell">
              <img class="poster"
                   :src="item.img | replaceWH('120.130')"
                   alt="">
              <div class="info">
                <div class="name-score">
                  <p class="name">
                    <span class="one-line">{{item.nm}}</span>
                  </p>
                  <span class="score">
                    <span class="num">{{item.sc}}</span>分
                  </span>
                </div>
                <div class="detail-section">
                  <div class="detail-items">
                    <p class="ename one-line">{{item.enm}}</p>
                    <p class="catogary">{{item.cat}}</p>
                    <p class="release">{{item.pubDesc}}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 节流函数
const delay = (function () {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
import BScroll from 'better-scroll'

export default {
  name: 'search',
  data () {
    return {
      title: '',
      search: []
    };
  },
  watch: {
    title () {
      delay(() => {
        this.initAxios();
      }, 300);
    },
  },
  methods: {
    initAxios () {
      var url = '/my/ajax/search?kw=' + this.title + '&cityId=1&stype=-1'
      this.$axios.get(url)
        .then(res => {
          console.log(res.movies.list)
          this.search = res.movies.list
        })
    }

  },
  mounted () {
    console.log(this)
    let wrapper = this.$refs.wrapper
    new BScroll(wrapper, {
      click: true
    })
  },
}
</script>

<style lang="scss" scoped>
$sc: 25;
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
.wrapper {
  position: fixed;
  top: 50 / $sc + rem;
  left: 0;
  bottom: 48 / $sc + rem;
  right: 0;
  overflow: hidden;
}
</style>
