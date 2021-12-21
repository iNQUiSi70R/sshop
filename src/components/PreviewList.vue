<template>
  <div class="face">
    <div class="faceBorder">
      <h1>Диван для диванных войск</h1>
      <p>Диваны на любой вкус и вместимость</p>

      <div class="face_button">
      </div>
    </div>
    <Carousel
        :carousel_data="sliderItem"
        :interval="6000"
    />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";

export default {
  name: "FaceList",
  components: {
    Carousel,
  },
  data() {
    return{
      sliderItem: [
        {id: 1, name: 'img1', img: '1.jpeg'},
        {id: 2, name: 'img2', img: '2.jpeg'},
        {id: 3, name: 'img3', img: '3.jpeg'},
        {id: 4, name: 'img4', img: '4.jpeg'},
        {id: 5, name: 'img5', img: '5.jpeg'}
      ]

    }
  }
}
</script>

<style scoped>
.face {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  height: 610px;
  background-image: url("../../public/backfon.png");
  background-size: cover;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  box-shadow: inset 0 0 40px 50px white, inset 0 0 10px 10px white;
}
.faceBorder {
  width: 560px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 20px 5px white;
}
</style>