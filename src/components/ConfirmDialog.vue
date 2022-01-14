<template>
    <div class="confirmDialog">
      <p>Вы действительно желаете положить в корзину:{{product}}</p>
      <button class="confirmYes"></button>
      <button class="confirmNo" @click="closeModal">Cancel</button>
    </div>
</template>

<script>
export default {
  name: "confirmDialog"
}
</script>

<style scoped>

</style>