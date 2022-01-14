<template>
  <div class="header">
    <ul>
      <li><div class="logo"><img src="../../public/79773.png" class="pic_logo_sofa">
        <img src="../../public/1232362.png" class="pic_logo_royal">
        <a>RoyalSofa</a></div></li>
      <li><a @click="scrollToTop">{{Catalog}}</a></li>
      <li><a @click="showModal">{{Delivery}}</a></li>
      <li><a @click="showModal">{{AboutTheService}}</a></li>
      <div class="ShopBasket"></div>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      Catalog: 'Каталог',
      Delivery: 'Доставка',
      AboutTheService: 'О сервисе'

    }
  }
}
</script>

<style>
#app {
  font-family:  'Montserrat', sans-serif;
}
body {
  margin: 0;
}
.header {
  position: sticky;
  top: 0;
  z-index: 90;
  background: white;
  padding-top: 10px;
  box-shadow: 0 1px 10px 5px rgba(255, 255, 255, 0.75);
}
ul {
  max-width: 1350px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 5%;
  list-style: none;
  padding: 0;
}
li {
  padding: 0 3px;
}
.ShopBasket {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px black;
  margin: 5px 0 5px 40%;
  background-image: url(../../public/hjghj02.png);
  background-size: cover;
}
/* лого */
.logo {
  width: 220px;
  height: 60px;
}
.logo>a {
  position: fixed;
  padding-top: 8px;
  padding-left: 90px;
  align-items: center;
  color: gold;
  font-family: Ultra;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;

}
.pic_logo_sofa {
  position: absolute;
  width: 80px;
  height: 67px;
}
.pic_logo_royal {
  position: absolute;
  width: 37.07px;
  height: 30.56px;
  transform: matrix(1, -0.23, 0.52, 1, 0, -8);
}
/* end лого */
@media (max-width: 720px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 5% 0 5%;
  }
}
@media (max-width: 900px) {
  .ShopBasket {
    margin: 5px 0 5px 10%;
  }
}
@media (max-width: 440px) {
  ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
</style>
