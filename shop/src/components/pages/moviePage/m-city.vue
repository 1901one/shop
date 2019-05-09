<template>
  <div>

  </div>
</template>

<script>
import '../../../lib/filter.js'
import qs from 'qs'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    initaddress () {
      var id = this.$route.params.id
      var url = 'http://m.maoyan.com/ajax/movie?forceUpdate=' + new Date().getTime()
      this.$axios.post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

