<template>
  <div class="addData">
    <button @click="addData">
      <span><strong>+</strong>添加数据</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "addData",
  props: ["data", "edit"],
  emits: {
    addData: null,
  },
  setup(props, { emit }) {
    function addData() {
      emit("addData");
    }

    return { addData };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addData {
  font-size: 40px;
}
/*button {
  width: 200px;
  text-align: center;
  height: 35px;
  line-height: 100%;
  font: 40px Arial, sans-serif bold;
  font-style: normal;
  margin: 2px;
  font-size: 20px;
  vertical-align: text-bottom;
  border-radius: 50px;

  color: #fefee9;
  border: 0.2px solid hsl(210, 36%, 62%);
  background-color: hsl(210, 36%, 62%);
} */

button {
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 19px;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
}

button:hover span {
  background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
  background-color: #476e9e;
}
button:active {
  position: relative;
  top: 1px;
}
</style>
