<template>
  <form @submit.prevent="onSubmit()" action="">
    <div class="max-w-md flex flex-col border-2 rounded border-green-300 m-1">
      <h1 class="text-center mt-3">LOG IN</h1>
      <div class="flex mb-2 flex-col">
        <label for="email" class="mx-2">Email Address</label>
        <input v-model="email" type="email" id="email" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!emailIsValid" class="ml-2 text-red-500">Not valid email</div>
      </div>
      <div class="flex mb-5 flex-col">
        <label for="password" class="mx-2" >Password</label>
        <input v-model="password" type="password" id="password" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!passwordIsValid" class="ml-2 text-red-500">Not valid Password</div>
      </div>

      <input class="mx-auto mb-3 focus:outline-none py-2 px-6 rounded-2xl w-40" :disabled="!formIsValid" :class="formIsValid ? 'bg-green-300 cursor-pointer text-green-50' : 'bg-green-100 cursor-default text-gray-400'" type="submit" value="Login" >
    </div>
  </form>
</template>

<script>
import validator from 'email-validator'
export default {
  data() {
    return {
      email: '',
      password: '',
      emailIsValid: null,
      passwordIsValid: null
    }
  },
  computed: {
      formIsValid() {
        console.log(this.emailIsValid);
        if (this.passwordIsValid && this.emailIsValid) {
          return true;
        }
        return false;
      }
    },
  watch: {
    email(val) {
      this.emailIsValid = validator.validate(val);
    },
    password(val) {
      this.passwordIsValid = val.trim().length >= 8;
    },

  },
  methods: {
    async onSubmit() {
      try {
        this.$store.dispatch('login', {email: this.email, password: this.password})
        this.$router.push({path: '/'})
      } catch (e) {
        console.log(e)
      }

    }
  }
}
</script>

<style scoped>

</style>
