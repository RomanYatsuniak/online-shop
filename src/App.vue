<template>
  <div class="w-full mx-auto">
    <the-header></the-header>
    <div class=" lg:max-w-screen-lg max-w-screen-md mx-auto px-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  data() {

  },
  methods: {
    changeUser() {
      this.$store.dispatch('getUserData', 'HDf62llJEhY6VcRzebm9asmSmPN2')
      // this.$store.dispatch('login', {email: 'roman.yatsuniak@gmail.com', password: '1qaz2wsx'})
    }
  },
  components: {
    TheHeader
  }
}
</script>

<style >
.btn {
  @apply py-2 px-12 my-4 border-2 border-green-300 rounded hover:text-white hover:bg-green-500 hover:border-green-500
}
</style>
