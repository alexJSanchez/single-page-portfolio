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
</template>
<style></style>
