
export default {

    mounted() {
        let th = this;
        document.addEventListener('show', function (){})
        document.addEventListener('click', function (item){
            if (item.target === th.$refs['windowDialog'])
                th.closeModal()
        })
        document.addEventListener("keydown", function (e) {
            if (e.which === 27) {
                th.closeModal()
            }
        })
    },
    methods: {
        showModal(options) {
            const componentModal =  () => import('../components' + options.component)
            console.log(options)
            this.$root.modalData.visible = true
            this.$root.modalComponent = componentModal
        },
        closeModal() {
            this.$root.modalData.visible = false
        },
        scrollToTop() {
            window.scrollTo(0,620);

        }
    }
};