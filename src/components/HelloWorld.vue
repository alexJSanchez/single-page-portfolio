<script setup>
import { useStyleStore } from '../stores/styles.js'
const style = useStyleStore()
</script>

<template>
  <div class="helloWorld">
    <div><p v-bind:style="style.typography.headingM">AlexSanchez</p></div>
    <ul class="imageIconStyle">
      <li><img class="imageIcon" src="../assets/icon-linkedin.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-frontend-mentor.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-github.svg" /></li>
      <li><img class="imageIcon" src="../assets/icon-twitter.svg" /></li>
    </ul>
    <div style="position: relative">
      <img class="ringImage" src="../assets/pattern-rings.svg" alt="" />
      <img class="headerImage" src="../assets/image-profile-mobile.webp" />
      <img class="circleImage" src="../assets/pattern-circle.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.ringImage {
  width: 150%; /* Adjust as needed */
  position: absolute;
  top: 10%;
  left: -20%;
  transform: translate(-55%, 10%);
  z-index: -1;
}
.circleImage {
  width: 45%; /* Adjust as needed */
  max-width: 238px;
  position: absolute;
  top: 10%;
  left: 65%;
  transform: translate(70%, 120%);
  z-index: -1;
  opacity: 30%;
}
.headerImage {
  max-width: 65%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 0;
}
.imageIcon {
  max-width: 100%;
  height: auto;
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
