<template>
  <div id="app">
    <Header/>
    <PreviewList/>
    <Catalog/>
    <Footer/>
    <WindowDialog
        v-if="$root.modalData.visible"
        :component="$root.modalComponent"
        @closeModal="closeModal"
        :dialogTitle="title"

    >
    </WindowDialog>
  </div>
</template>

<script>
import PreviewList from '@/components/PreviewList';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import WindowDialog from "@/components/WindowDialog";

import ModalWindow from "@/plugins/ModalWindow";
import Vue from "vue";
Vue.use(ModalWindow)

export default {
  data() {
    return{
      title: 'Товар',
    }
  },
  name: 'App',
  components: {
    Footer,
    Header,
    PreviewList,
    Catalog,
    WindowDialog
  },
  methods: {

  },
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
