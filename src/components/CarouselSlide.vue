<template>
  <div class="CarouselSlide">
    <img :src=" require('../../public/carouselImg/' + item_data.img)" alt="">
  </div>
</template>

<script>

export default {
  name: "CarouselSlide",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }

  }
}
</script>

<style scoped>
img {
  width: 600px;
  height: 300px;
}
</style>