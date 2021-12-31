export default {
    data() {
        return {
            modalVisible: false
        }
    },
    methods: {
        showModal() {
            this.modalVisible = true
        },
        closeModal() {
            this.modalVisible = false
        },
    }
};