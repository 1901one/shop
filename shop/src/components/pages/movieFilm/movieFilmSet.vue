<template>
  <div class="box">
    <button>特惠购票</button>
    <div class="cont">{{list.dra}}</div>
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
.box {
  width: 100%;
  button {
    cursor: pointer;
    font-size: 16 / $sc + rem;
    width: 345 / $sc + rem;
    height: 36 / $sc + rem;
    display: inline-block;
    border-radius: 4px;
    line-height: 36 / $sc + rem;
    background: #e54847;
    margin: 10 / $sc + rem 15 / $sc + rem 20 / $sc + rem 15 / $sc + rem;
    color: white;
  }
  .cont {
    max-height: 345 / $sc + rem;
    padding: 20 / $sc + rem;
    font-size: 14 / $sc + rem;
  }
}
</style>
