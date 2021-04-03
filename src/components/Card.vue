<template>
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img :src="imgSrc" alt="">
      <h3 class="text-center">{{title}}</h3>
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center" >
          <img :key="star" v-for="star in 5" :src="getImageSrcByIndex(star)">
        </div>
        <div class="ml-5">{{reviews}} reviews</div>
      </div>
      <div class="text-3xl text-center">Price: ${{price}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['imgSrc', 'title', 'price', 'rating', 'reviews', 'url'],
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
.stars {}
</style>
