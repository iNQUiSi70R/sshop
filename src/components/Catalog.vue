<template>
    <div class="catalog">
        <CardProduct
            v-for="product in products"
            :key="product.id"
            v-bind:product_data="product"
            @addToCart="addToCard"
        />
    </div>
</template>

<script>
import CardProduct from "./CardProduct"
export default {
  components:{
    CardProduct
  },
  name: "Catalog",
  data() {
    return {
      products: [
        {name: "Sofa-1", id: "sofa1", img: "", price: "50000", stock: "1"},
        {name: "Sofa-2", id: "sofa2", img: "", price: "80000", stock: "1"},
        {name: "Sofa-3", id: "sofa3", img: "", price: "55000", stock: "2"},
        {name: "Sofa-4", id: "sofa4", img: "", price: "100000", stock: "1"},
        {name: "Sofa-5", id: "sofa5", img: "", price: "180000", stock: "0"},
        {name: "Sofa-6", id: "sofa6", img: "", price: "100000", stock: "2"}
      ]
    }
  }
}
</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 50px;
}
</style>