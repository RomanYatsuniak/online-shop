<template>
    <div :class="desc ? 'flex max-w-3xl justify-around w-full' : ''" class="items-center max-w-sm flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img class="max-w-sm" :src="imgSrc" alt="">
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-center">{{title}}</h3>
        <div class="flex md:flex-row flex-col justify-center items-center">
          <div class="flex justify-center items-center" >
            <stars :rating="rating"></stars>
          </div>
          <div class="ml-5">{{reviews}} reviews</div>
        </div>
        <div class="text-2xl md:text-3xl text-center">Price: ${{price}}</div>
        <p v-if="desc" class="px-3 my-5 text-center max-w-md md:max-w-3xl">{{desc}}</p>
      </div>
    </div>
</template>

<script>

import Stars from "@/components/Stars";
export default {
  data() {
    return {
    }
  },
  async mounted() {
  },
  props: ['imgSrc', 'title', 'price', 'rating', 'reviews', 'url', 'desc'],
  components: {
    Stars
  }
}
</script>

<style scoped>
.stars {}
</style>
