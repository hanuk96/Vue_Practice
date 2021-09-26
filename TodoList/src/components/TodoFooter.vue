<template>
  <div>
    <span> <i class="far fa-trash-alt" v-on:click="clearTodo"></i></span>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdated() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    clearTodo() {
      localStorage.clear();
    },
  },
};
</script>