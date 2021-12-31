import Vue from 'vue'
import App from './App.vue'
import ModalWindow from "@/plugins/ModalWindow";
import WindowDialog from "@/components/WindowDialog";
Vue.config.productionTip = false

Vue.component('WindowDialog', {WindowDialog})
Vue.use(ModalWindow)

new Vue({
  render: h => h(App),
}).$mount('#app')
