<template>
  <div>
    <h4>城市列表</h4>
    <div class="wrapper"
         ref="wrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in city"
              :key="index">
            <div class="city-title">
              <h2 v-if="index===0 || index!==0 && item.zm!==city[index-1].zm">{{item.zm}}</h2>
            </div>
            <router-link to='/home'>
              <div class="city">
                <span>{{item.name}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      city: []
    }
  },
  created () {
    let url = 'https://www.easy-mock.com/mock/5c875a7ebb15ea5ad8b56a6a/city/city'
    this.$axios.get(url)
      .then((res) => {
        this.city = res.data.cities.sort((a, b) => { //sort排序
          return a.pinyin[0].charCodeAt() - b.pinyin[0].charCodeAt()
        }).map((item) => ({ //加小括号吧函数转化成表达式  
          name: item.name,
          zm: item.pinyin[0]
        }))
      })
  },
  mounted () {
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
  ul {
    li {
      background: #f5f5f5;
      .city-title {
        padding-left: 25 / $sc + rem;
        line-height: 30 / $sc + rem;
        font-size: 14 / $sc + rem;
        color: #333;
        background-color: #ebebeb;
      }
      .city {
        height: 44 / $sc + rem;
        line-height: 44 / $sc + rem;
        margin-left: 15 / $sc + rem;
        font-size: 14 / $sc + rem;
        border-bottom: 1px solid #c8c7cc;
      }
      p {
        float: left;
      }
      span {
        color: #000;
      }
    }
  }
}

// h2{
//    background: #fff;
// }
// li{
//    background-color: #ebebeb;
// }
// span{
//    height: 44/$sc+rem;
//    line-height: 44/$sc+rem;
//    margin-left: 15/$sc+rem;
//    border-bottom: 1px solid #c8c7cc;

// }
</style>
