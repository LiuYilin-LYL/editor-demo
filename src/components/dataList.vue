<template>
  <div class="dataList">
    <ul>
      <li v-for="item in data" :key="item.id">
        id:{{ item.id }}
        <div class="button">
          <button @click="checkData(item)">
            <i class="iconfont icon-chakan"></i>
          </button>
          <button @click="showEditor(item)">
            <i class="iconfont icon-compile"></i>
          </button>
          <button @click="deletData(item)">
            <i class="iconfont icon-shanchu"> </i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  name: "dataList",
  props: ["data"],
  emits: {
    deletData: null,
    showEditor: null,
    checkData: null,
  },
  setup(props, { emit }) {
    function deletData(item) {
      emit("deletData", item);
    }
    function showEditor(item) {
      emit("showEditor", item);
    }
    function checkData(item) {
      emit("checkData", item);
    }
    return { deletData, showEditor, checkData };
  },
};
</script>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
li {
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 70px;
  width: 100%;
  height: 90px;
  background: rgb(190, 204, 199);
  border-radius: 20px;
  opacity: 95%;
}
li:hover {
  background: rgb(171, 192, 186);
}
.iconfont {
  font-size: 32px;
  display: flex;
  justify-content: center;
}
button {
  width: 50px;
  text-align: center;
  height: 50px;
  line-height: 100%;
  font: 14px Arial, sans-serif bold;
  font-style: normal;
  margin: 10px;
  font-size: 4px;
  vertical-align: text-bottom;
  border-radius: 10px;
  border-radius: 50%;
  color: #fefee9;
  border: 0.2px solid hsl(210, 36%, 62%);
  background-color: hsl(210, 36%, 62%);
}
button:hover {
  transform: translate(-1px, -1px);
  color: rgb(240, 191, 85);
}
</style>