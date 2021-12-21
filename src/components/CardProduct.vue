<template>
    <div class="ProductCard">
      <WindowDialog
          v-if="modalVisible"
          @closeModal="closeModal"
      />
      <div class="sliderban">
        <div class="slide">
          <input type="radio" name="sr" id="s1" checked>
          <input type="radio" name="sr" id="s2" >
          <input type="radio" name="sr" id="s3" >
          <input type="radio" name="sr" id="s4" >
          <div class="slideImg sl1"><img src="../../public/slide/1_interior.jpeg" alt="1"></div>
          <div class="slideImg"><img src="../../public/slide/2.jpeg" alt="2"></div>
          <div class="slideImg"><img src="../../public/slide/3.jpeg" alt="3"></div>
          <div class="slideImg"><img src="../../public/slide/4.jpeg" alt="4"></div>
        </div>
        <div class="navigationSlider">
          <label for="s1" class="button_onSlide"></label>
          <label for="s2" class="button_onSlide"></label>
          <label for="s3" class="button_onSlide"></label>
          <label for="s4" class="button_onSlide"></label>
        </div>
        <p class="cardInPrice">{{product_data.price}} Р.</p>
      </div>
      <div class="info">
        <p>{{product_data.name}}</p>
        <button class="toCartButton" @click="showModal">В корзину</button>
      </div>
    </div>
</template>

<script>
import WindowDialog from "@/components/WindowDialog";
export default {
  name: '',
  components: {
    WindowDialog
  },
  props: {
    msg: String,
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      modalVisible: false
    }
  },
  methods:{
    showModal() {
        this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    },
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  }
}
</script>
<style scoped>
/* card 2.0 */
.ProductCard {
  width: 320px;
  height: 300px;
  margin: 10px 5px 5px 5px ;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.25);
}
.sliderban>p {
  position: absolute;
  max-width: 90px;
  padding-top: 5px;
  width: 90%;
  height: 30px;
  font-size: 16px;
  text-align: center;
  margin: 0;
  background: rgba(255, 213, 0, 0.70);
  border-radius: 10px 0 10px 0 ;
  top: 0;
}
.info {
  position: relative;
  width: 100%;
  height: 70px;
  background: rgb(195, 195, 195);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 -10px 5px 0 rgba(195, 195, 195, 0.75), 0 -5px 5px 0 rgba(195, 195, 195, 0.75);
}
.info>p {
  margin: 0 5px 5px 5px;
  padding-top: 5px;
  width: 270px;
  height: 22px;
}
.toCartButton {
  float: right;
  margin: 0 5px;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  background: rgba(23, 203, 0, 1);
}
.toCartButton:active {
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.1), inset 0 0 2px 1px rgba(0, 0, 0, 0.4);
}
/* end card */
/* slide in card */
.sliderban {
  width: 100%;
  height: 230px;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px 0 rgba(10,10,10, 0.75);
}
.navigationSlider {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.button_onSlide{
  width: 30px;
  height: 10px;
  margin: 5px;
  transition: all .4s ease;
  border-radius: 2px;
  background-color: black;
  opacity: 0.6;
}
.button_onSlide:hover {
  opacity: 0.9;
}
input[name="sr"] {
  position: absolute;
  visibility: hidden;
}
.slide {
  width: 400%;
  height: 100%;
  display: flex;
}
.slideImg {
  width: 25%;
  transition: all .6s ease;
}
.slideImg img {
  width: 100%;
  height: 100%;
}
#s1:checked ~ .sl1 {
  margin-left: 0;
}
#s2:checked ~ .sl1 {
  margin-left: -25%;
}
#s3:checked ~ .sl1 {
  margin-left: -50%;
}
#s4:checked ~ .sl1 {
  margin-left: -75%;
}
/* emd slide */
</style>
