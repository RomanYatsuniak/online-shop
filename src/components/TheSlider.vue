<template>
  <div class="w-2/3">
    <carousel :items-to-show="1" :current-slide="3" class="h-52">
      <slide v-for="(item,idx) in items" :key="idx" class="w-100 h-52">
        <div class="flex items-center justify-center flex-col h-52 w-52">
          <img class="w-40" :src="item.src" alt=""/>
          <h3>{{item.title}}</h3>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination/>
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  props: ['items'],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
  }
}
</script>

<style>
.carousel__next, .carousel__prev, .carousel__pagination-button {
  background-color: #6ee7b7;
  outline: none;
}

.carousel__pagination-button--active {
  background-color: rgba(5, 150, 105, 1);
  outline: none;
}

</style>
