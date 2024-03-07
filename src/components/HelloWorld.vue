<script setup>
import { useStyleStore } from '../stores/styles.js'
const style = useStyleStore()
</script>

<template>
  <div class="helloWorld">
    <p v-bind:style="style.typography.body">AlexSanchez</p>
    <ul class="imageIconStyle">
      <li><img class="imageIcon" src="../assets/icon-linkedin.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-frontend-mentor.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-github.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-twitter.svg" /></li>
    </ul>
  </div>
</template>

<style scoped>
.imageIcon {
  width: 20px;
  height: 20px;
}
.imageIconStyle {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  list-style: none;
}
.helloWorld {
  text-align: center;
  font-family: 'spaceFontMed';
  margin: 1rem;
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
