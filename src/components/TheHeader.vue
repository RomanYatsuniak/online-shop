<template>
  <nav class="w-full m-0 h-10 bg-green-300 flex justify-between items-center font-sans text-2xl tracking-widest text-green-50">
    <div class="md:ml-5 ml-5 flex justify-center items-center">
      <router-link to="/">MyShop</router-link>
      <input v-if="$route.fullPath == '/'" class="outline-none text-sm md:ml-5 w-20 md:w-52 h-6 ml-2 rounded-lg text-black pl-2" v-model="search" type="text">
    </div>
    <div class="hidden md:flex mr-2 justify-between text-base">
      <router-link to="/register">Register</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/user">User</router-link>
      <router-link to="/orders">Orders</router-link>
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
