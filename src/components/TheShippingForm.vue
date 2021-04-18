<template>
  <form @submit.prevent="onSubmit()" action="">
    <div class="max-w-md flex flex-col border-2 rounded border-green-300 m-1">
      <h1 class="text-center mt-3">Shipping</h1>
      <div class="flex mb-5 flex-col">
        <label for="username" class="mx-2" >Address</label>
        <input v-model="name" type="text" id="username" class="border-2 rounded border-green-300 mx-2 outline-none">
      </div>
      <div class="flex mb-5 flex-col">
        <label for="email" class="mx-2">City</label>
        <input v-model="email" type="email" id="email" class="border-2 rounded border-green-300 mx-2 outline-none">
      </div>
      <div class="flex mb-5 flex-col">
        <label for="password" class="mx-2">Postal Code</label>
        <input v-model="password" type="password" id="password" class="border-2 rounded border-green-300 mx-2 outline-none">
      </div>
      <div class="flex mb-5 flex-col">
        <label for="password2" class="mx-2">Country</label>
        <input v-model="password2" type="password" id="password2" class="border-2 rounded border-green-300 mx-2 outline-none">
      </div>
      <input type="submit" value="Register" class="cursor-pointer mx-auto mb-3 focus:outline-none py-2 px-6 bg-green-300 text-green-50 max-w-0 w-40">
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
