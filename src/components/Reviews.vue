<template>
  <h3 class="text-3xl">Reviews</h3>
  <div class="max-w-2xl">
    <div class="mt-6" :key="index" v-for="(rev, index) in reviews">
      <review :rating="rev.rating" :date="rev.date" :text="rev.review" :user="rev.user"></review>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review";
export default {
  props: ['productId', 'reviews'],
  mounted() {
    console.log(this.reviews)
  },
  data() {
    return {
    }
  },
  async beforeMount() {


  },
  components: {
   Review
  },
}
</script>

<style scoped>

</style>
