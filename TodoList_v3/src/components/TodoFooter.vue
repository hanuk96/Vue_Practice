<template>
  <div>
    <span> <i class="far fa-trash-alt" v-on:click="clearTodo"></i></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sampleData: "",
    };
  },
  methods: {
    clearTodo() {
      //this.$emit("clearAll");
      this.$store.commit("clearAllItems");
    },
  },
};
</script>