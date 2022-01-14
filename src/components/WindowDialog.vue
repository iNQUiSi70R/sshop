<template>
    <div class="windowDialog" ref="windowDialog">
      <div class="dialog">
        <div class="dialog__header">
          <p>{{dialogTitle}}</p>
          <button class="close-Modal_Btn" @click="closeModal">X</button>
        </div>
        <div class="dialog__content">
          <component
              :is="component"

          >
          <slot></slot>
          </component>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "WindowDialog",
  props: {
    component: String,
    dialogTitle: {
      type: String,
      default: 'Name'
    },
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    showConfirm () {
      this.showModal( {
        component: '/ConfirmDialog.vue'

      })
    }
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