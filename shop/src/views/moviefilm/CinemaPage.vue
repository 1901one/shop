<template>
  <div>
    <MovieFilm></MovieFilm>
  </div>
</template>

<script>
import MovieFilm from '../../components/pages/movieFilm/movieFilm'
import BScroll from 'better-scroll'

export default {
  components: {
    MovieFilm
  },
  mounted () {
    let wrapper = this.$refs.wrapper
    new BScroll(wrapper)
  },
}
</script>

<style lang="scss" scoped>
$sc: 25;
.wrapper {
  background: #f5f5f5;
  position: fixed;
  top: 0 / $sc + rem;
  left: 0;
  bottom: 50 / $sc + rem;
  right: 0;
  overflow: hidden;
}
</style>

