<template>
  <div class="dialogCart">
    <div class="Cart__header">
        <h2>Корзина</h2>
    </div>
    <div class="Cart__body">
       <CartItem
           v-on:
       />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem"
export default {
  name: "Cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  component: {
    CartItem
  }
}
</script>

<style scoped>
.dialogCart {
  margin: auto;
  background: white;
  border-radius: 15px;
  min-width: 200px;
  min-height: 50px;
  padding: 20px;
}
</style>