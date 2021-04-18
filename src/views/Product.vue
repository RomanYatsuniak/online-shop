<template>
  <div class="w-full justify-center max-w-5xl mx-auto" >
    <div v-if="contentLoading">Loading...</div>
    <div v-else>
      <div>
        <button class="btn">Go Back</button>
      </div>
      <div class="flex justify-between items-center lg:flex-row flex-col">
        <card :imgSrc="productInfo.image" :title="productInfo.name" :price="productInfo.price" :rating="productInfo.rating" :reviews="productInfo.reviews" :desc="productInfo.description"></card>
        <item-stock-form :price="productInfo.price" :status="productInfo.stock > 0" :quantity="productInfo.stock"></item-stock-form>
      </div>
    </div>
  </div>
  <div class="w-full mx-auto mt-12">
    <reviews :reviews="reviews"></reviews>
    <h2 class="mt-12 uppercase text-3xl " >Write a review</h2>
    <review-form @onAddReview="addReview" v-if="isLoggedIn"></review-form>
    <div v-else class="my-4">
      Please Login to write a review
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import ItemStockForm from "@/components/ItemStockForm";
import ReviewForm from "@/components/ReviewForm";
import Reviews from "@/components/Reviews";
import { getReviewsCountByProductId, getRatingByProductId } from './../utils/index'
import { db, files, auth, getDocumentRef } from './../firebase';
import { ratingTypes } from "@/types";

export default {

  data() {
    return {
      productInfo: '',
      contentLoading: true,
      reviews: [],
      productRef: getDocumentRef(this.$route.params.id, 'products')
    }
  },
  beforeMount: async function () {
    const ratings = (await db.collection('productsratings').where("productId", "==", this.productRef).get()).docs[0];
    const rating = ratings.data()
    let product = await rating.productId.get();
    const productInfo = product.data()
    const avgRating = await getRatingByProductId(this.$route.params.id)
    const ImageUrl = await files.ref(productInfo.image).getDownloadURL();
    const reviewCount = await getReviewsCountByProductId(this.$route.params.id)
    this.productInfo = {...productInfo, ...rating, rating: avgRating, reviews: reviewCount, image: ImageUrl, id: this.$route.params.id}
    this.contentLoading = false;
    try {
      const reviewsRefs = await db.collection('productsreviews').where('productId', '==', this.productRef).get()
      reviewsRefs.docs.forEach(r => {
        const review = r.data()
        review.userId.get().then(res => {
          review.user = res.data()
          this.reviews.push(review)
        })
      })
    } catch (e) {
      console.log(e.message)
    }
  },
  computed: {
    isLoggedIn() {
      return auth.currentUser
    }
  },
  components: {
    Card, ItemStockForm, Reviews, ReviewForm
  },
  mounted() {
  },
  methods: {
    addReview(rating, opinion) {
      console.log(this.$store.state.user.name)
      this.reviews.push({
        rating: ratingTypes[rating],
        review: opinion,
        user: this.$store.state.user,
        productId: this.$route.params.id,
        date: "2021-01-23"
      })
      const uid = 'HDf62llJEhY6VcRzebm9asmSmPN2'
      const date = new Date()
      db.collection('productsreviews').add({
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
        rating: ratingTypes[rating],
        review: opinion,
        userId: db.doc(`/users/${uid}`),
        productId: db.doc(`/products/${this.$route.params.id}`)
      })
    }
  }
}
</script>

<style scoped>

</style>
