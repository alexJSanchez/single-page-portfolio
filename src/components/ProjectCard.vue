<script setup>
import { useStyleStore } from '../stores/styles.js'

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

const projects = [
  {
    id: 1,
    title: 'Skaterboarder assistant',
    image: '../assets/image-skaterapp.PNG',
    tech: 'HTML CSS JAVASCRIPT TAILWIND VITE',
    descHtml:
      'Skateboarder assistant app that <span class="underline">uses user geo location to find the closest skatable spot</span>. Additional quality of life features like weather, time, and trick of the day.',
    projectUrl: 'https://skaterapp.vercel.app/',
    codeUrl: 'https://github.com/alexJSanchez/skaterapp'
  },
  {
    id: 2,
    title: 'Photographer blog design',
    image: '../assets/photosnap.jpg',
    tech: 'HTML CSS JAVASCRIPT REACT',
    descHtml:
      'A simple design for a <span class="underline">photographer blog page</span> built in react with tailwind css',
    projectUrl: 'https://photoblog-chi.vercel.app/',
    codeUrl: 'https://github.com/alexJSanchez/photoblog'
  },
  {
    id: 3,
    title: 'Asylum Grant Tracker',
    image: '../assets/image-asylum.PNG',
    tech: 'HTML CSS JAVASCRIPT REACT REDUX',
    descHtml:
      'Built the login and display chart for <span class="underline">labs repository project.</span>',
    projectUrl: '#',
    codeUrl: 'https://github.com/alexJSanchez/asylum-rg-fe-starter'
  }
]
</script>

<template>
  <div class="projects-header">
    <h2 class="title">Projects</h2>
    <div>
      <a href="#contact" class="contact-link" :style="linkStyle">Contact Me</a>
    </div>
  </div>

  <div v-for="project in projects" :key="project.id" class="project-grid">
    <img class="project-image" :src="project.image" :alt="project.title" />
    <p class="project-title">{{ project.title }}</p>
    <p class="project-tech">{{ project.tech }}</p>
    <h5 class="project-desc" v-html="project.descHtml"></h5>

    <div class="project-actions">
      <a
        class="btn"
        :style="{ color: store.colors.orochimaru }"
        :href="project.projectUrl"
        target="_blank"
        rel="noopener"
        >View Project</a
      >
      <a
        class="btn"
        :style="{ color: store.colors.orochimaru }"
        :href="project.codeUrl"
        target="_blank"
        rel="noopener"
        >View Code</a
      >
    </div>
  </div>
</template>
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

.project-grid {
  display: grid;
  grid-template-rows: auto;
  padding: 0 1rem;
  margin-bottom: 2rem;
  gap: 0.5rem;
}
.project-image {
  width: 100%;
  grid-column: 1 / -1;
}
.project-title {
  font-size: 1.5rem;
  line-height: 32px;
  margin: 1rem 0;
}
.project-tech {
  font-size: 1rem;
  color: var(--tech-text, #d9d9d9);
}
.project-desc {
  grid-column: 1 / -1;
}
.underline {
  text-decoration: underline #4ee1a0;
}
.btn {
  display: inline-block;
  margin: 0.5rem 0;
  font-family: spaceFontMed;
  background: transparent;
  padding-bottom: 0.3rem;
  border-bottom: solid 2px #4ee1a0;
  letter-spacing: 2px;
  line-height: 26px;
  text-decoration: none;
  color: white;
}
.btn-left {
  grid-column: 1 / 3;
}
.btn-right {
  grid-column: 4 / 7;
}

.contact-link {
  text-decoration: none;
}
</style>
