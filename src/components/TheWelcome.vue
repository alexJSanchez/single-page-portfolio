<script setup>
import { useStyleStore } from '../stores/styles.js'
const style = useStyleStore()
</script>

<template>
  <div class="helloWorld">
    <div style="text-align: center">
      <ul class="imageIconStyle">
        <li><img class="imageIcon" src="../assets/icon-linkedin.svg" /></li>
        <li><img class="imageIcon" src="../assets/icon-frontend-mentor.svg" /></li>
        <li><img class="imageIcon" src="../assets/icon-github.svg" /></li>
        <li><img class="imageIcon" src="../assets/icon-twitter.svg" /></li>
      </ul>
      <img class="headerImage" src="../assets/image-profile-mobile.webp" />
    </div>
    <div class="headerText">
      <p
        style="
          font-family: spaceFontMed;
          font-size: 2.2rem;
          line-height: 40px;
          letter-spacing: -28.41;
          color: #d9d9d9;
        "
      >
        Nice to meet you! Alex Sanchez
      </p>
      <p
        style="
          font-family: Arial, Helvetica, sans-serif;
          margin-top: 10px;
          color: aliceblue;
          line-height: 26px;
          color: #d9d9d9;
        "
      >
        Based in Newyork, I'm a front-end developer passionate about building accesible web apps
        that users love
      </p>
      <button
        style="
          color: aliceblue;
          margin-top: 1.25rem;
          border-style: none;
          background-color: transparent;
          border-bottom: solid 2px #4ee1a0;
          letter-spacing: 2px;
          line-height: 26px;
        "
      >
        CONTACT ME
      </button>
    </div>
  </div>
</template>

<style scoped>
.headerImage {
  max-width: 60%;
  transform: translateY(-20%);
}
.headerText {
  margin: 0 1.5rem;
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
  margin-top: 1rem;
}
</style>
