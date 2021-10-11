<template>
  <div>
    <span> <i class="far fa-trash-alt" v-on:click="clearTodo"></i></span>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      sampleData: "",
    };
  },
  methods: {
    ...mapMutations({ clearTodo: "clearAllItems" }),
  },
};
</script>