<template>
  <div class="wrap">
    <div class="fir">
      <p class="tit">近期最受期待</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">

          <div class="swiper-slide"
               v-for="(item,index) in list1"
               :key="index">
            <router-link to="/flims"
                         tag="div">
              <img :src="item.img | replaceWH('90.115')"
                   alt=""
                   class="hope">
              <h3 class="nm">{{item.nm}}</h3>
              <span class="ct">{{item.comingTitle}}</span>
            </router-link>
          </div>

        </div>
      </div>
    </div>

    <div class="sec">
      <div v-for="(item,index) in list2"
           :key="index">
        <p class="group-date"
           v-if="index===0 || index!==0 && item.comingTitle !== list2[index-1].comingTitle">{{item.comingTitle}}</p>
        <router-link to="/flims"
                     tag="div">
          <div class="films">
            <div class="left">
              <img :src="item.img | replaceWH('90.115')"
                   alt="">
            </div>
            <div class="right">
              <p class="mz">{{item.nm}}</p>
              <div class="box">
                <div class="lright">
                  <div class="two"><span class="wish">{{item.wish}}</span>人想看</div>
                  <p class="star">主演：{{item.star}}</p>
                  <span class="rt">{{item.rt}}上映</span>
                </div>
                <router-link to="/dl"><button class="btn"
                          v-bind:class="{'btnys':item.showst===4}">想看</button></router-link>
              </div>

            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import "swiper/dist/css/swiper.css"




export default {
  created () {
    let url1 = '/my/ajax/mostExpected?ci=387&limit=10&offset=0&token=' + new Date().getTime()
    let url2 = '/my/ajax/comingList?ci=387&token=' + new Date().getTime()
    this.$axios.get(url1).then((res) => {
      console.log(res.coming)
      this.list1 = res.coming
    });
    this.$axios.get(url2).then((res) => {
      console.log(res.coming)
      this.list2 = res.coming
    });
    Vue.filter('replaceWH', (val, wh) => {
      return val.replace('w.h', wh)
    })
  },
  watch: {
    list1 () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          freeMode: true,
          slidesPerView: 'auto'
        })
      })
    }
  },
  data () {
    return {
      list1: [],
      list2: []
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$sc: 25;
.tit {
  font-size: 14 / $sc + rem;
  margin: 12 / $sc + rem 0 12 / $sc + rem 10 / $sc + rem;
}
.wrap {
  padding-right: 15 / $sc + rem;
  height: 37.5rem;
  overflow-y: scroll;
}
.fir {
  margin-bottom: 20 / $sc + rem;
}
.swiper-wrapper {
  padding-right: 10 / $sc + rem;
}
.swiper-container {
  margin-left: 10 / $sc + rem;
}
.swiper-slide {
  width: 85 / $sc + rem;
  height: 157 / $sc + rem;
  margin-right: 10 / $sc + rem;
  .hope {
    width: 85 / $sc + rem;
    height: 115 / $sc + rem;
  }
  .nm {
    font-size: 13 / $sc + rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ct {
    font-size: 10 / $sc + rem;
    color: #999;
  }
}

.sec {
  padding: 0 0 0 15 / $sc + rem;
  border-top: 10 / $sc + rem solid #efefef;
  .group-date {
    margin-top: 12 / $sc + rem;
    font-size: 14 / $sc + rem;
    color: #333;
  }

  .films {
    display: flex;
    padding: 12 / $sc + rem 0 0 0;

    .left {
      margin-right: 10 / $sc + rem;

      img {
        width: 64 / $sc + rem;
        height: 90 / $sc + rem;
      }
    }
    .right {
      border-bottom: 0.5px solid #cfcfcf;
      padding-bottom: 12 / $sc + rem;
      .mz {
        font-size: 17 / $sc + rem;
        font-weight: bold;
        margin-bottom: 7 / $sc + rem;
      }
      .box {
        display: flex;
        justify-content: center;
        .btn {
          background: #faaf00;
          border: none;
          color: #fff;
          font-size: 12 / $sc + rem;
          width: 47px;
          height: 27px;
          text-align: center;
          line-height: 27 / $sc + rem;
          padding: 0;
          border-radius: 5 / $sc + rem;
        }
        .btnys {
          background: #3c9fe6;
          value: "预售";
        }
      }
      .two {
        font-size: 12 / $sc + rem;

        .wish {
          font-size: 15 / $sc + rem;
          color: #faaf00;
          font-weight: 600;
        }
      }
      .star,
      .rt {
        color: #666;
        font-size: 13 / $sc + rem;
        margin-top: 6 / $sc + rem;
      }
      .star {
        width: 202 / $sc + rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>