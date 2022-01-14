import Vue from 'vue'
import App from './App.vue'

import WindowDialog from "@/components/WindowDialog";
Vue.config.productionTip = false

Vue.component('WindowDialog', {WindowDialog})


new Vue({
  render: h => h(App),
  data() {
    return {
      modalData: {
        visible: false,
      },
      modalVisible: false,
      component: Function,

    }
  },
}).$mount('#app')
