<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!--button v-on:click="addTodo">add</button!-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <modal v-if="showModal" @close="showModal = false">
      <h2 slot="header">
        경고!<i class="fas fa-times" v-on:click="showModal = false"></i>
      </h2>
      <span slot="body">내용을 입력하세요</span>
    </modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      //추가해서 로컬에 저장
      if (this.newTodoItem !== "") {
        //this.$emit("addTodoItem", this.newTodoItem);
        const text = this.newTodoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      //지우기
      this.newTodoItem = "";
    },
  },
  components: {
    //향상된 객체 리터럴 방식을 이용해서 객체의 인자와 값이 일치하면 선언만
    Modal,
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  width: 80%;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>