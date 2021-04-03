<template>
  <nav class="h-10 bg-green-300 flex justify-between items-center font-sans text-2xl tracking-widest text-green-50">
    <div class="md:ml-20 ml-2 flex justify-center items-center">
      <span>MyShop</span>
      <input class=" md:ml-5 w-20 md:w-52 h-6 ml-2 rounded-lg text-black pl-2" v-model="search" type="text">
    </div>
    <div class="flex md:mr-20 mr-2 justify-between text-base w-24">
      <div>
        Cart
      </div>
      <div>Login</div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>
