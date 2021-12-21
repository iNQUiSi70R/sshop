<template>
  <div class="footer">
    <div class="FooterColumn_1">
      <table>
        <tr>
          <td><p class="Heading_column">О нас:</p></td>
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
    <div class="FooterColumn_2">
      <table>
        <tr>
          <td><p class="Heading_column">Наши партнеры:</p></td>
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
    <div class="FooterColumn_3">
      <table>
        <tr>
          <td><p class="Heading_column">Так же мы в:</p></td>
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
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
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
.FooterColumn_1, .FooterColumn_2, .FooterColumn_3 {
  margin: 20px 5px 5px 8%;
}
.Heading_column {
  padding: 0;
  margin: 0;
  color: gold;
}
@media (max-width: 700px) {
  .footer {
    flex-direction: column;
    height: 350px;
  }
}

@media (max-width: 900px) {
  .footer {
  }
  .FooterColumn_1, .FooterColumn_2, .FooterColumn_3 {
    margin: 20px 5px 5px 3px;
  }
}

</style>