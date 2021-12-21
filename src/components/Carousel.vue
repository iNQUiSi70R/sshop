<template>
  <div class="carouselWrapper">
    <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlidIndex) + '%' }" @click="mClickOnSlide">
      <CarouselSlide
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
  </div>
</template>

<script>
import CarouselSlide from "@/components/CarouselSlide";
export default {
  name: "Carousel",
  components: {CarouselSlide},
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return{
      currentSlidIndex: 0
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlidIndex >= this.carousel_data.length - 1) {
        this.currentSlidIndex = 0
      } else {
      this.currentSlidIndex++
      }
    },
    mClickOnSlide() {
      this.nextSlide()

    }
  },
  mounted() {
    if (this.interval > 0) {
      let ts = this;
      setInterval( function () {
        ts.nextSlide()
        },ts.interval)
    }
  }
}
</script>

<style scoped>
  .carouselWrapper {
    max-width: 600px;
    height: 300px;
    overflow: hidden;
    align-items: center;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.60);
    transform: translateY(-15px);

  }
  .carousel {
    display: flex;
    transition: all ease 1.5s;
  }
</style>