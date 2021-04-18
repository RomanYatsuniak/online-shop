<template>
  <div class="h-full pt-32 flex items-center justify-center w-full">
    <the-login-form></the-login-form>
  </div>
</template>

<script>
import TheLoginForm from "@/components/TheLoginForm";

export default {
  name: 'Login',
  components: {
    TheLoginForm
  }
}
</script>

<style scoped>

</style>
