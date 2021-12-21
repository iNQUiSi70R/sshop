<template>
    <div class="windowDialog">
      <div class="dialog">
        <div class="dialog__header">
          <p>Name</p>
          <button class="close-Modal_Btn" @click="closeModal">X</button>
        </div>
        <div class="dialog__content">
          <p></p>
          <slot></slot>
        </div>
      </div>
    </div>
</template>
<!--
    <button @click="showDialog"></button>
    <WindowDialog
        v-model:="dialogVisible"
    />
    dialogVisible: false
    showModal() {
      this.dialogVisible = true;
    }
-->
<script>
export default {
  name: "WindowDialog",
  props: {
    show: {
      type: Boolean,
      default: false

    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
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
  min-width: 200px;
  min-height: 50px;
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