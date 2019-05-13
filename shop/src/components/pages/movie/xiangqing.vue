<template>
  <div class="xiangqing">
    <div class="wrapper"
         ref="wrapper">
      <ul class="content">
        <li v-for="(item,index) in list"
            :key="index">
          <router-link :to='"/movie/"+item.id'>

            <div class="dy">
              <div>
                <span class="shop">{{item.nm}}</span>
              </div>

              <div class="m">
                <span class="money_num">{{item.sellPrice}}</span>
                <span class="money">元起</span>
              </div>
            </div>

            <div class="jl">
              <!-- 距离 -->
              <span class="addr">{{item.addr}}</span>
              <span class="distance">{{item.distance}}</span>
            </div>

            <div class="youhui">
              <div v-if="item.tag.snack"
                   class="snack">小吃</div>
              <div v-else></div>

              <div v-if="item.tag.vipTag"
                   class="vipTag">{{item.tag.vipTag}}</div>
              <div v-else></div>
              <div class="buyout"></div>
              <div class="cityCardTag"></div>
              <div class="deal"></div>
              <div class="endorse"></div>
              <div class="hallTypeVOList"></div>
              <div class="sell"></div>
            </div>

            <div v-if="item.promotion.cardPromotionTag"
                 class="card">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                   alt>
              <span class="card_c">{{item.promotion.cardPromotionTag }}</span>
            </div>
            <div v-else
                 style="font-size:14px">暂无优惠</div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
import '@/lib/filter.js'
export default {
  data () {
    return {
      list: []
    };
  },
  created () {
    var url = '/my/ajax/cinemaList?day=' + new Date().toLocaleString() + '&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1551939116811&cityId=1'
    this.$axios
      .get(url)
      .then(res => {
        console.log(res);
        this.list = res.cinemas;
      })
  },
  mounted () {
    let elobj = this.$refs.wrapper;
    new BScroll(elobj, {
      click: true,
      probeType: 2
    })
  }
}
</script>

<style lang='scss' scoped>
$sc: 25;
$bg: 1px solid blue;
.wrapper {
  position: fixed;
  top: 125 / $sc + rem;
  left: 0;
  bottom: 52 / $sc + rem;
  right: 0;
  overflow: hidden;
  //  height:627/$sc+rem;
  //  width:343/$sc+rem;
  li {
    display: block;
    width: 343 / $sc + rem;
    height: 99 / $sc + rem;
    padding: 13 / $sc + rem 15 / $sc + rem 13 / $sc + rem 15 / $sc + rem;
    .dy {
      display: flex;
      align-items: center;

      .shop {
        height: 23 / $sc + rem;
        line-height: 23 / $sc + rem;
        font-size: 16 / $sc + rem;
        color: #000;
        display: inline-block;
      }

      .m {
        padding-left: 6 / $sc + rem;
        .money {
          color: #f03d37;
          font-size: 11 / $sc + rem;
        }
        .money_num {
          color: #f03d37;
          font-size: 18 / $sc + rem;
        }
      }
    }
    .jl {
      display: flex;
      align-items: center;
      .addr {
        width: 262.48 / $sc + rem;
        font-size: 13 / $sc + rem;
        color: #666;
        line-height: 1.5;
        margin-top: 6 / $sc + rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .distance {
        font-size: 13px;
        color: #666;
      }
    }
    .youhui {
      display: flex;
      .vipTag {
        color: #f90;
        border: 1px solid #f90;
        width: 44 / $sc + rem;
        height: 17 / $sc + rem;
        font-size: 12 / $sc + rem;
        text-align: center;
        margin-top: 4 / $sc + rem;
        margin-bottom: 6 / $sc + rem;
      }
      .snack {
        color: #f90;
        border: 1px solid #f90;
        font-size: 12 / $sc + rem;
        width: 30 / $sc + rem;
        height: 15 / $sc + rem;
        text-align: center;
        margin-top: 4 / $sc + rem;
        margin-bottom: 6 / $sc + rem;
        margin-right: 5 / $sc + rem;
      }
    }
    .card {
      display: flex;
      width: 328 / $sc + rem;
      height: 21 / $sc + rem;

      img {
        display: inline-block;
        width: 13 / $sc + rem;
        height: 14 / $sc + rem;
      }
      .card_c {
        display: inline-block;
        font-size: 11 / $sc + rem;
      }
    }
  }
}
</style>
