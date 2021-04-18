<template>
  <div class="flex">
    <img :key="star" v-for="star in 5" :src="getImageSrcByIndex(star)">
  </div>

</template>

<script>
export default {
  props: ['rating'],
  methods: {
    getImageSrcByIndex(idx) {
      return require(`./../assets/star${idx - 1 < this.ratingNumber ? '-filled' : ''}.svg`);
    }
  },
  computed: {
    ratingNumber() {
      return parseInt(this.rating);
    }
  }
}
</script>

<style scoped>

</style>
