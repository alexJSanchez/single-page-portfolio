<script setup></script>
<template>
  <div class="experience-root">
    <div class="divider"></div>
    <ul class="experience-list">
      <!--expirience section-->
      <li class="experience-grid">
        <h2 class="experience-title">6 Years Experience</h2>

        <div class="icon icon-html">
          <img src="../assets/icon-html.png" class="skill-img" />
        </div>

        <div class="icon icon-css">
          <img src="../assets/icon-css.svg" class="skill-img" />
        </div>

        <div class="icon icon-js">
          <img src="../assets/icon-javascript.svg" class="skill-img js-img" />
        </div>
      </li>
      <!--stack section-->
      <li class="stack-item">
        <div class="stack-wrapper">
          <img src="../assets/mernStack.png" class="stack-img" />
          <div class="stack-shadow"></div>
        </div>

        <h4 class="stack-title">M.E.R.N</h4>
      </li>
      <!--skills section-->
      <li class="skills-grid">
        <div class="skill">
          <img src="../assets/icon-php.svg" class="skill-icon" />
          <h5>PHP</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-vuejs2.svg" class="skill-icon skill-icon--vue" />
          <h5>Vue</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-python.svg" class="skill-icon" />
          <h5>Python</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-redux.svg" class="skill-icon" />
          <h5>Redux</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-cypress.svg" class="skill-icon skill-icon--circle" />
          <h5>Cypress</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-figma.svg" class="skill-icon" />
          <h5>Figma</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-nodejs.svg" class="skill-icon" />
          <h5>NodeJs</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-git.svg" class="skill-icon" />
          <h5>Git</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-mysql.svg" class="skill-icon" />
          <h5>MySql</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-agile.png" class="skill-icon" />
          <h5>Agile</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-jira.png" class="skill-icon" />
          <h5>Jira</h5>
        </div>
        <div class="skill">
          <img src="../assets/icon-notion.png" class="skill-icon skill-icon--white" />
          <h5>Notion</h5>
        </div>
      </li>
    </ul>
    <div class="divider"></div>
  </div>
</template>
<style scoped>
.experience-root {
  margin-top: 3rem;
  color: #4ee1a0;
}
.divider {
  background-color: #ffffff;
  padding: 1px;
  margin: 1rem;
  opacity: 0.5;
}
.experience-list {
  text-align: center;
  list-style: none;
  padding: 0;
}
.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.experience-title {
  grid-column: 2 / 5;
  grid-row: 1;
  font-size: 1.5rem;
  margin-bottom: 25px;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-html {
  grid-column: 2 / 3;
  grid-row: 2;
}
.icon-css {
  grid-column: 4 / 5;
  grid-row: 2;
}
.icon-js {
  grid-column: 3 / 4;
  grid-row: 3;
}
.skill-img {
  width: 100%;
  max-width: 100px;
  border-radius: 10%;
  box-shadow:
    0 0 5px 10px rgba(255, 255, 255, 0.3),
    inset 0 0 10px 10px rgba(255, 255, 255, 0.3);
}
.js-img {
  max-width: 75px;
  max-height: 100px;
}
.stack-item {
  margin: 3rem;
}
.stack-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.stack-img {
  width: 100%;
  max-width: 8rem;
  max-height: 8rem;
}
.stack-shadow {
  width: 8rem;
  height: 8rem;
  position: absolute;
  border-radius: 30%;
  box-shadow:
    0 0 2px 2px rgba(255, 255, 255, 0.3),
    inset 0 0 20px 20px rgba(255, 255, 255, 0.3);
  transform: rotate(45deg);
}
.stack-title {
  margin-top: 20px;
  font-size: 1.5rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  justify-content: space-around;
  align-items: flex-end;
  gap: 1rem;
  color: #4ee1a0;
}
.skill {
  text-align: center;
}
.skill-icon {
  width: 100%;
  max-width: 3rem;
}
.skill-icon--vue {
  max-width: 3.4rem;
  padding-bottom: 2px;
}
.skill-icon--circle {
  background-color: #fff;
  border-radius: 50%;
}
.skill-icon--white {
  background-color: #fff;
}
</style>
