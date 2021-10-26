<template>
  <div class="modal-bg" v-show="show">
    <div class="modal-container">
      <div class="modal-header">
        {{ title }}
      </div>
      <div class="modal-main">
        <slot></slot>
      </div>
      <div v-show="!readonly" class="modal-footer">
        <button @click="hideModal">取消</button>
        <button @click="submit">确认</button>
      </div>
      <div v-show="readonly" class="modal-footer">
        <button @click="hideModal">关闭</button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  name: "modal",
  props: { readonly: Boolean, show: Boolean, title: String },
  emits: {
    hideModal: null,
    submit: null,
  },
  setup(props, { emit }) {
    let a = ref(props.show);
    function hideModal() {
      emit("hideModal");
    }

    function submit() {
      emit("submit");
    }
    return { a, hideModal, submit };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.modal-container {
  background: #fff;

  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
}
.modal-header {
  height: 56px;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
}
button {
  background-color: #d7dbe0;
  margin-right: 50px;
  margin-left: 50px;
  height: 40px;
}
button:hover {
  background-color: #c5c7ca;
}
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 57px;
  border-top: 1px solid #ddd;
}
.modal-footer button {
  width: 100px;
}
.modal-main {
  padding: 15px 40px;
}
</style>
