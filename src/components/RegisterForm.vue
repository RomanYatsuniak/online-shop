<template>
  <form @submit.prevent="onSubmit()" action="" class="min-w-min">
    <div class="m-0 max-w-xl flex flex-col border-2 rounded border-green-300 m-1">
      <h1 class="text-center mt-3">REGISTER</h1>
      <div class="flex mb-2 flex-col">
        <label for="username" class="mx-2" >Name</label>
        <input v-model="name" type="text" id="username" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!nameIsValid" class="text-red-500 px-2">Not valid Name</div>
      </div>
      <div class="flex mb-2 flex-col">
        <label for="email" class="mx-2">Email Address</label>
        <input v-model="email" type="email" id="email" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!emailIsValid" class="text-red-500 px-2">Not valid email</div>
      </div>
      <div class="flex mb-2 flex-col">
        <label for="password" class="mx-2">Password</label>
        <input v-model="password" type="password" id="password" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!passwordIsValid" class="text-red-500 px-2">Password should be min 8 characters</div>
      </div>
      <div class="flex mb-2 flex-col">
        <label for="password2" class="mx-2">Confirm Password</label>
        <input v-model="password2" type="password" id="password2" class="border-2 rounded border-green-300 mx-2 outline-none">
        <div v-if="!passwordsAreSame" class=" px-2 text-red-500">Passwords should be the same</div>
      </div>
      <input type="submit" :disabled="!formIsValid" :class="formIsValid ? 'bg-green-300 cursor-pointer text-green-50' : 'bg-green-100 cursor-default text-gray-400'" value="Register" class="mx-auto mb-3 focus:outline-none py-2 px-6 rounded-2xl w-40"/>
    </div>
  </form>

</template>

<script>
import validator from 'email-validator';
export default {
  name: 'TheRegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
      passwordIsValid: null,
      emailIsValid: null,
      nameIsValid: null
    }
  },
  computed: {
    formIsValid() {
      if (this.passwordIsValid && this.emailIsValid && this.passwordsAreSame && this.nameIsValid) {
        return true;
      }
      return false;
    },
    passwordsAreSame() {
      return this.password === this.password2
    }
  },
  watch: {
    name() {
      this.nameIsValid = this.name.trim().length > 2
    },
    password() {
      this.passwordIsValid = this.password.trim().length > 8
    },
    email() {
      this.emailIsValid = validator.validate(this.email)
    }
  },
  methods: {
    onSubmit() {
      console.log(this.name, this.email, this.password, this.password2);
    }
  }
}
</script>

<style scoped>

</style>
