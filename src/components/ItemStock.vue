<template>
  <div class="w-40 border-black flex flex-col leading-10 border-2 border-green-400 rounded p-3">
    <div class="flex justify-between mx-2"><span>Price:</span> <span>${{price}}</span></div>
    <div class="flex justify-between mx-2"><span>Status:</span> <span>{{status}}</span></div>
    <div class="flex justify-between mx-2">
      <span>Qty</span>
      <select class="focus:outline-none" name="quantity" id="" v-model="selected">
        <option :value="q" :key="q" v-for="q in parseInt(quantity)">{{q}}</option>
      </select>
    </div>
    <button @click="onAddToCartClick()" class="focus:outline-none py-0.1 px-6 bg-green-300 text-green-50 rounded-2xl">Add To Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ItemStock',
  props: ['price', 'status', 'quantity'],
  methods: {
    onAddToCartClick() {
      console.log(this.selected)
    }
  },
  data() {
    return {
      selected: 1
    }
  }
}
</script>

<style scoped>

</style>
