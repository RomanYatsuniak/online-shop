<template>
  <div class="mx-auto max-w-screen-md">
    <h4>{{user.name}}</h4>
    <stars :rating="rating"></stars>
    <div>{{date}}</div>
    <p class="mt-2">{{text}}</p>
  </div>
</template>

<script>
import Stars from "@/components/Stars";
export default {

  components: {Stars},
  mounted() {
    console.log(this.a)
  },
  props: ['rating', 'date', 'text', 'user'],
}
</script>

<style scoped>

</style>
