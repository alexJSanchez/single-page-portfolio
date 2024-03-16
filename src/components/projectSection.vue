<template>
  <div class="projects-header">
    <h2 class="title">Projects</h2>
    <div>
      <a href="#contact" class="contact-link" :style="linkStyle">Contact Me</a>
    </div>
  </div>
</template>

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

<style scoped>
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
