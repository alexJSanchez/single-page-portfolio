<script setup>
import { useStyleStore } from '../stores/styles.js'
const style = useStyleStore()
</script>

<template>
  <div class="helloWorld"><p v-bind:style="style.typography.body">AlexSanchez</p></div>
</template>

<style scoped>
.helloWorld {
  text-align: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
