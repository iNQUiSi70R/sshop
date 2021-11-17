<template>
  <header>
    <div>
      <ul>
        <li><a>Главная</a></li>
        <li><a>Каталок</a></li>
        <li><a>О сервисе</a></li>

      </ul>
    </div>
  </header>
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
header {
  margin: 10px auto;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
}
</style>
