<script>
import { useStyleStore } from '../stores/styles.js'
export default {
  setup() {
    const store = useStyleStore()
    const linkStyle = {
      color: store.colors.orochimaru,
      fontFamily: 'spaceFontBold',
      borderStyle: 'none',
      backgroundColor: 'transparent',
      paddingBottom: '0.3rem',
      borderBottom: 'solid 2px #4ee1a0',
      letterSpacing: '2px',
      lineHeight: '26px',
      textDecoration: 'none'
    }
    return { store, linkStyle }
  }
}
</script>
<template>
  <!--first project-->
  <div class="projects-header">
    <h2 class="title">Projects</h2>
    <div>
      <a href="#contact" class="contact-link" :style="linkStyle">Contact Me</a>
    </div>
  </div>
  <div
    style="
      display: grid;
      grid-template-rows: 4;
      grid-template-columns: 8;
      padding: 0 1rem;
      margin-bottom: 2rem;
    "
  >
    <img
      style="width: 100%; grid-column-start: 1; grid-column-end: 8"
      src="../assets/image-skaterapp.PNG"
    />
    <p
      style="
        grid-column-start: 1;
        grid-column-end: 8;
        grid-row-start: 2;
        font-size: 1.5rem;
        line-height: 32px;
        margin: 1rem 0;
      "
    >
      Skaterboarder assistant
    </p>
    <p style="grid-column-start: 1; grid-row-start: 3; grid-column-end: 8; font-size: 1rem">
      HTML CSS JAVASCRIPT TAILWIND VITE
    </p>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '1',
        gridRowStart: '4',
        gridColumnEnd: '3'
      }"
    >
      <a style="text-decoration: none; color: white" href="https://skaterapp.vercel.app/"
        >View Project</a
      >
    </button>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '4',
        gridRowStart: '4',
        gridColumnEnd: '7'
      }"
    >
      <a
        style="text-decoration: none; color: white"
        href="https://github.com/alexJSanchez/skaterapp"
        >View Code</a
      >
    </button>
  </div>
  <!--second project-->
  <div
    style="
      display: grid;
      grid-template-rows: 4;
      grid-template-columns: 8;
      padding: 0 1rem;
      margin-bottom: 2rem;
    "
  >
    <img
      style="width: 100%; grid-column-start: 1; grid-column-end: 8"
      src="../assets/image-asylum.PNG"
    />
    <p
      style="
        grid-column-start: 1;
        grid-column-end: 8;
        grid-row-start: 2;
        font-size: 1.5rem;
        line-height: 32px;
        margin: 1rem 0;
      "
    >
      Asylum Grant Tracker
    </p>
    <p style="grid-column-start: 1; grid-row-start: 3; grid-column-end: 8; font-size: 1rem">
      HTML CSS JAVASCRIPT REACT REDUX
    </p>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '1',
        gridRowStart: '4',
        gridColumnEnd: '3'
      }"
    >
      View Project
    </button>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '4',
        gridRowStart: '4',
        gridColumnEnd: '7'
      }"
    >
      <a
        style="text-decoration: none; color: white"
        href="https://github.com/alexJSanchez/asylum-rg-fe-starter"
        >View code</a
      >
    </button>
  </div>
  <!--third project-->
  <div
    style="
      display: grid;
      grid-template-rows: 4;
      grid-template-columns: 8;
      padding: 0 1rem;
      margin-bottom: 2rem;
    "
  >
    <img
      style="width: 100%; grid-column-start: 1; grid-column-end: 8"
      src="../assets/layoutImages/thumbnail-project-3-small.webp"
    />
    <p
      style="
        grid-column-start: 1;
        grid-column-end: 8;
        grid-row-start: 2;
        font-size: 1.5rem;
        line-height: 32px;
        margin: 1rem 0;
      "
    >
      Design Portfolio
    </p>
    <p style="grid-column-start: 1; grid-row-start: 3; grid-column-end: 8; font-size: 1rem">
      HTML CSS
    </p>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '1',
        gridRowStart: '4',
        gridColumnEnd: '3'
      }"
    >
      View Project
    </button>
    <button
      :style="{
        color: store.colors.orochimaru,
        margin: '.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        gridColumnStart: '4',
        gridRowStart: '4',
        gridColumnEnd: '7'
      }"
    >
      View Code
    </button>
  </div>
</template>
<style>
.projects-header {
  margin: 2.5rem 1rem;
  display: flex;
  justify-content: space-between;
}

.title {
  font-family: spaceFontBold;
  font-size: 2rem;
}
</style>
