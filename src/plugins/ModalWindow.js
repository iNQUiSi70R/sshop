import ModalShow from "@/mixins/ModalShow";

export default {
    install (Vue) {
        Vue.mixin(ModalShow)
        Vue.prototype.$log
    }
}