<script>
  import { ref } from "vue";
  import Counter from "!/components/Counter.vue";
  
  export default {
    components: {
      Counter,
    },
  };
</script>

<template>
  <main>
    <span>Hi 👋🏼</span>
    <Counter/>
  </main>
</template>
