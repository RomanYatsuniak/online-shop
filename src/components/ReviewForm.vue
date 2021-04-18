<template>
  <div class="my-2">
    <form @submit.prevent="onSubmit()" class="flex flex-col max-w-md p-4 mt-4 border-2 border-green-300 rounded" >
      <label for="rating-form">Rating</label>
      <select v-model="rating" name="rat" id="rating-form" class="outline-none p-2 my-3 text-left border-2 border-green-300 rounded">
        <option value="excellent">Excellent</option>
        <option value="great">Great</option>
        <option value="good">Good</option>
        <option value="soso">SoSo</option>
        <option value="bad">Bad</option>
      </select>
      <textarea v-model="opinion" class="outline-none resize-none border-2 border-green-300 rounded" name="" id="" cols="30" rows="3"></textarea>
      <button class="btn mb-0 px-3 w-20 mx-auto ">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 'excellent',
      opinion: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onAddReview', this.rating, this.opinion)
    }
  }
}
</script>

<style scoped>

</style>
