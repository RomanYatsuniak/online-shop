<template>
  <the-header></the-header>
  <item-stock quantity="5" price="899" status="In stock"></item-stock>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import ItemStock from "@/components/ItemStock";
export default {
  data() {
    return {

    }
  },
  components: {
    TheHeader,
    ItemStock
  }
}
</script>

<style scoped>

</style>
