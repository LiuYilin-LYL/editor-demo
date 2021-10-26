<template>
  <a href="home.html">点我返回首页</a>
  <add-data :edit="show" @addData="addData" />
  <Modal
    :readonly="readonly"
    :show="show"
    :title="title"
    @hideModal="hideModal"
    @submit="submit"
  >
    <p class="jsonEditor">
      <BAceEditor
        isEdit="isEdit"
        ref="editor"
        v-model:value="jsonStr"
        lang="json"
        width="100%"
        height="300"
        :readonly="readonly"
      ></BAceEditor>
    </p>
  </Modal>
  <data-list
    @checkData="checkData"
    @showEditor="showEditor"
    @deletData="deletData"
    :data="data"
  />
</template>

<script>
import { reactive } from "@vue/reactivity";

import { ref } from "vue";
import addData from "../../components/addData.vue";

import DataList from "../../components/dataList.vue";
import Modal from "../../components/editData.vue";

import { getCurrentInstance } from "vue";

export default {
  name: "App",
  components: {
    addData,
    DataList,
    Modal,
  },
  setup() {
    const { proxy } = getCurrentInstance();

    let jsonStr = ref(
      JSON.stringify({
        id: "",
        content: "",
      })
    );
    function handleZip() {
      this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, 0);
    }
    function handleFormat() {
      this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, 2);
    }
    let readonly = ref(false);
    let title = ref("添加數據");
    let show = ref(false);
    let isShowEditor = ref(false);
    let isEdit = ref(-1);
    let data = reactive([
      {
        id: 1,
        content: "11",
      },
      {
        id: 2,
        content: "22",
      },
      {
        id: 3,
        content: "33",
      },
      {
        id: 4,
        content: "44",
      },
    ]);
    function addData() {
      title.value = "添加数据";
      jsonStr.value = JSON.stringify({
        id: "",
        content: "",
      });
      readonly.value = false;
      show.value = true;
    }
    function hideModal() {
      // 取消弹窗回调
      show.value = false;
    }
    let deletData = function (item) {
      data.splice(data.indexOf(item), 1);
    };
    let showEditor = function (item) {
      title.value = "编辑数据";
      isEdit.value = data.indexOf(item);
      console.log(isEdit.value);
      jsonStr.value = JSON.stringify(item);
      show.value = true;
      readonly.value = false;
    };
    let checkData = function (item) {
      title.value = "查看数据";
      jsonStr.value = JSON.stringify(item);
      readonly.value = true;
      show.value = true;
    };

    let submit = function () {
      // 确认弹窗回调
      if (!readonly.value) {
        if (isEdit.value >= 0) {
          data.splice(
            isEdit.value,
            1,
            JSON.parse(proxy.$refs.editor.contentBackup)
          );
          jsonStr.value = `{
            'id': "",
            'content': "",
          }`;
          isEdit.value = -1;
        } else {
          data.push(JSON.parse(proxy.$refs.editor.contentBackup));
          console.dir(data);
        }
      }

      show.value = false;
      jsonStr.value = JSON.stringify({
        id: "",
        content: "",
      });
    };
    return {
      jsonStr,
      handleZip,
      isShowEditor,
      isEdit,
      data,
      show,
      title,
      readonly,
      submit,
      hideModal,
      addData,
      deletData,
      showEditor,
      checkData,
      handleFormat,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.jsonEditor {
  width: 100%;
}
button {
  margin: 0px;
  padding: 0px;

  border: 0px;

  outline: none;
}
a {
  position: absolute;
  top: 20px;
  right: 20px;
}
body {
  margin: 100px 100px;
  background: fade-out(#fbeee2, 0.3);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 16px;
}
</style>
