<template>
  <div id="body">
    <div class="box">
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li class="ll"
            v-for="(item,index) in list"
            :key="index">
          <router-link :to='"/movie/"+item.id'>
            <div class="box2">
              <div class="avatar">
                <img :src="item.img | replaceWH('100.100')" />
              </div>
              <div class="content-wrapper">
                <div class="column">
                  <div class="title ">{{item.nm}}</div>
                  <div class="detail">
                    <div class="no-score"
                         v-if='item.sc'>{{item.sc}}<button class="btn">
                        购票
                      </button> </div>
                    <div class="no-score1"
                         v-else>{{item.sc}}<button class="btn1">
                        预售
                      </button> </div>
                    <div class="actor">主演：{{item.star}}</div>
                    <div class="show-info">{{item.showInfo}}</div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <router-view />
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Nav from '@/components/pages/Home/nav.vue'
// import axios from 'axios'
import Footer from '@/components/common/Footer'
import Vue from 'vue'

export default {
  components: {
    // Nav,
    Footer
  },
  data () {
    return {
      loading: false,
      list: []
    }
  },

  methods: {
    loadMore () {
      this.loading = true;
      //				setTimeout(() => {
      let url = "/my/ajax/movieOnInfoList?token=" + new Date().getTime()
      this.$axios.get(url).then((res) => {
        console.log(res)
        this.list = res.movieList;
        this.loading = false;
      });
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
$sc: 25;
#head {
  display: block;
  width: 100%;
  background: red;
  height: 50 / $sc + rem;
}
h1 {
  color: white;
  overflow: hidden;
  font-size: 20 / $sc + rem;
  font-weight: 400;
  text-align: center;
  line-height: 50 / $sc + rem;
}

/*.box2{
	height:500/$sc+rem;
}*/
ul {
  height: 500 / $sc + rem;
  overflow-y: auto;
}
.ll {
  height: 130 / $sc + rem;
  padding-bottom: 20 / $sc + rem;
}

.avatar {
  margin-top: 1 / $sc + rem;
  margin-left: 22 / $sc + rem;
}
.content-wrapper {
  margin-top: -102 / $sc + rem;
  margin-left: 110 / $sc + rem;
  color: grey;
}
.column {
  border-bottom: 1 / $sc + rem solid #e6e6e6;
}
.title {
  font-size: 16 / $sc + rem;
}
.title,
.no-score,
.actor,
.show-info {
  padding-bottom: 6 / $sc + rem;
}
.actor {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.sctor {
  overflow: hidden;
}
.btn {
  float: right;
  height: 30 / $sc + rem;
  border-radius: 4 / $sc + rem;
  background: red;
  border: none;
  margin-right: 6 / $sc + rem;
}
.btn1 {
  float: right;
  height: 30 / $sc + rem;
  border-radius: 4 / $sc + rem;
  background: blue;
  border: none;
  margin-right: 6 / $sc + rem;
}
button {
  color: white;
}
</style>
