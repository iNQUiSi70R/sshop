<template>
  <div id="app">

    <Header/>
    <Cart/>
    <PreviewList/>
    <Catalog/>
    <Footer/>
  </div>
</template>

<script>
import PreviewList from '@/components/PreviewList';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Cart from './components/Cart';


export default {
  name: 'App',
  components: {
    Footer,
    Header,
    PreviewList,
    Catalog,
    Cart
  },
  data() {
    return {
      cart: []
    }
  },
  methods: {
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
FaceList {
  display: flex;
  justify-content: center;
}
</style>
