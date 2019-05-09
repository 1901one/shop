<template>
  <div>
    <h4>{{list.nm}}</h4>
    <div class="movie-title"
         :style="{background:list.backgroundColor}">
      <div class="contxt">
        <div class="img">
          <img :src="list.img | replaceWH('120.130')"
               alt="">
        </div>
        <div class="content">
          <div class="title">{{list.nm}}</div>
          <div class="score">{{list.enm}}</div>
          <div>
            <span class="title-sc">{{list.sc||''}}</span>
            <span class="score"
                  v-if='list.sc'>({{(list.snum/10000).toFixed(1)}}万人评分)</span>
            <span class="title-sc"
                  v-else>{{list.bingeWatch}}人想看</span>
          </div>
          <div class="score">{{list.cat}}</div>
          <div class="score">{{list.oriLang}}/{{list.dur}}</div>
          <div class="score">{{list.pubDesc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    var id = this.$route.params.id
    let url = '/my/ajax/detailmovie?movieId=' + id
    this.$axios.get(url)
      .then(res => {
        console.log(res)
        this.list = res.detailMovie
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
.movie-title {
  height: 188 / $sc + rem;
  position: relative;
  cursor: pointer;
  // display: flex;
  //  background: red;
  opacity: 0.9;
  .contxt {
    height: 150 / $sc + rem;
    padding: 19 / $sc + rem 30 / $sc + rem 19 / $sc + rem 15 / $sc + rem;
    .img {
      float: left;
      width: 110 / $sc + rem;
      height: 150 / $sc + rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      // overflow-x: hidden;
      margin-left: 12.5 / $sc + rem;
      line-height: 1;
      margin-left: 130 / $sc + rem;
      color: #fff;
      .title {
        font-size: 20 / $sc + rem;
        margin-top: 2 / $sc + rem;
        font-weight: 700;
        overflow: hidden;
      }
      .score {
        margin-top: 10 / $sc + rem;
        font-size: 12 / $sc + rem;
        color: #fff;
        opacity: 0.8;
      }
      .title-sc {
        font-size: 18 / $sc + rem;
        font-weight: 700;
        color: #fc0;
        margin-top: 11 / $sc + rem;
      }
    }
  }
}
</style>

