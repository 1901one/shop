<template>
  <div>
    <h4>影院</h4>
    <Movie />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer'
import Movie from '@/components/pages/movie/cinema'
export default {
  data () {
    return {

    }
  },
  components: {
    Footer,
    Movie
  }
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
</style>

