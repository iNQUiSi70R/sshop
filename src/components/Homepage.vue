<template>
  <div>
    <header>
      <div class="header">
        <ul>
          <li><div class="logo"><img src="../../public/79773.png" class="pic_logo_sofa">
            <img src="../../public/1232362.png" class="pic_logo_royal">
          <a>RoyalSofa</a></div></li>
          <li><a>Каталог</a></li>
          <li><a>Доставка</a></li>
          <li><a>О сервисе</a></li>
          <div class="bin"></div>
        </ul>
      </div>
    </header>
    <div class="face">
      <h1></h1>
      <p></p>
      <div class="face_button">

      </div>
    </div>
    <div class="cards">
      <div class="card">
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
          <div class="navslide">
            <label for="s1" class="bott"></label>
            <label for="s2" class="bott"></label>
            <label for="s3" class="bott"></label>
            <label for="s4" class="bott"></label>
          </div>
          <p>50 000р</p>
        </div>
        <div class="info">
          <p>Диван 3-х местный Ренн</p>
          <button class="on_bin">В корзину</button>
        </div>
      </div>
     </div>
    <div class="footer">
      <div class="colon_1">
        <table>
          <tr>
            <td><p class="pfoot">О нас:</p></td>
            <td><a>Контакты</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>Офис</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>royalsofadiv@mail.ru</a></td>
          </tr>
        </table>
      </div>
      <div class="colon_2">
        <table>
          <tr>
            <td><p class="pfoot">Наши партнеры:</p></td>
            <td><a>Контакты</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>Поставщики</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>Доствака</a></td>
          </tr>
        </table>
      </div>
      <div class="colon_3">
        <table>
          <tr>
            <td><p class="pfoot">Так же мы в:</p></td>
            <td><a>YouTube</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>instagram</a></td>
          </tr>
          <tr>
            <td></td>
            <td><a>VKontakte</a></td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* slide in card */
.sliderban {
  width: 100%;
  height: 230px;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 0px 10px 0px rgba(10,10,10, 0.75);
}
.navslide {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.bott{
  width: 30px;
  height: 10px;
  margin: 5px;
  transition: all .4s ease;
  border-radius: 2px;
  background-color: black;
  opacity: 0.6;
}
.bott:hover {
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
/* footer */
.footer {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
  background: rgb(7, 7, 7);
  color: white;
}
.colon_1, .colon_2, .colon_3 {
  margin: 20px 5px 5px 8%;
}
.pfoot {
  padding: 0;
  margin: 0;
  color: gold;
}
/* card 2.0 */
.card {
  width: 320px;
  height: 300px;
  margin: 10px 5px 5px 5px ;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
}
.sliderban>p {
  position: absolute;
  max-width: 90px;
  width: 90%;
  height: 30px;
  font-size: 20px;
  text-align: center;
  margin: 0px;
  background: rgba(255, 213, 0, 0.70);
  border-radius: 10px 0px 10px 0px ;
  top: 0px;
}
.info {
  position: relative;
  width: 100%;
  height: 70px;
  background: rgb(195, 195, 195);
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px -10px 5px 0px rgba(195, 195, 195, 0.75), 0px -5px 5px 0px rgba(195, 195, 195, 0.75);
}
.info>p {
  margin: 0px 5px 5px 5px;
  padding-top: 5px;
  width: 270px;
  height: 22px;
}
.on_bin {
  float: right;
  margin: 0px 5px;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  background: rgba(23, 203, 0, 1);
}
.on_bin:active {
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1), inset 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
}
/* end card */
header {
  position: sticky;
  top: 0;
  z-index: 5;
  background: white;
  padding-top: 10px;
  box-shadow: 0px 1px 10px 5px rgba(255, 255, 255, 0.75);
}
ul {
  max-width: 1350px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px 5%;
  list-style: none;
  padding: 0;
}
li {
  padding: 0 3px;
}
.bin {
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
  .footer {
    flex-direction: column;
    height: 350px;
  }
}
@media (max-width: 900px) {
  .bin {
    margin: 5px 0px 5px 10%;
  }
  .footer {
  }
  .colon_1, .colon_2, .colon_3 {
    margin: 20px 5px 5px 3px;
  }
}
@media (max-width: 440px) {
  ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px 50px;
}
</style>
