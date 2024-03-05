<script setup>
  import { ref } from "vue";
  // the ! prefix is an alias for the ui folder
  import Counter from "!/components/Counter.vue";
</script>

<template>
  <main>
    <span>Hi 👋🏼</span>
    <Counter/>
  </main>
</template>
