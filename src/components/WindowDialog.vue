<template>
    <div class="windowDialog" ref="windowDialog">
      <div class="dialog">
        <div class="dialog__header">
          <p>{{dialogTitle}}</p>
          <button class="close-Modal_Btn" @click="closeModal">X</button>
        </div>
        <div class="dialog__content">
          <slot></slot>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "WindowDialog",
  props: {
    dialogTitle: {
      type: String,
      default: 'Name'
    },
    show: {
      type: Boolean,
      default: false

    },

  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  },
  mounted() {
    let th = this;
    document.addEventListener('click', function (item){
      if (item.target === th.$refs['windowDialog'])
        th.closeModal()
    })
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        th.closeModal()
      }
    })
  }
}
</script>

<style scoped>
.windowDialog {
  position: fixed;
  display: flex;
  z-index: 200;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

}
.dialog {
  margin: auto;
  background: white;
  border-radius: 15px;
  max-width: 900px;
  max-height: 600px;
  min-width: 200px;
  min-height: 100px;
  padding: 20px;
}
.dialog__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.dialog__content {

}
p {
  margin: 0;
}
.close-Modal_Btn {
  border: none;
  border-radius: 20px;
  background: white;

}
</style>