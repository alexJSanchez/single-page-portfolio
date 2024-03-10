<script>
import { useStyleStore } from '../stores/styles.js'

export default {
  setup() {
    const store = useStyleStore()

    return { store }
  }
}
</script>
<template>
  <div style="margin: 2.5rem 1rem; display: flex; justify-content: space-between">
    <h2 style="font-family: spaceFontBold; font-size: 2rem">Projects</h2>
    <div>
      <button
        :style="{
          color: store.colors.orochimaru,
          borderStyle: 'none',
          backgroundColor: 'transparent',
          paddingBottom: '0.3rem',
          borderBottom: 'solid 2px #4ee1a0',
          letterSpacing: '2px',
          lineHeight: '26px'
        }"
      >
        CONTACT ME
      </button>
    </div>
  </div>
  <div style="display: grid; grid-template-rows: 4; grid-template-columns: 8; padding: 0 1rem">
    <img
      style="width: 100%; grid-column-start: 1; grid-column-end: 8"
      src="../assets/layoutImages/thumbnail-project-1-small.webp"
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
<style></style>
