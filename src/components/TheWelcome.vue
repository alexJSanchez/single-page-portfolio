<script setup></script>

<template>
  <div class="helloWorld">
    <div style="text-align: center">
      <ul class="imageIconStyle">
        <li>
          <a href="https://www.linkedin.com/in/qasanchez/"
            ><img class="imageIcon" src="../assets/icon-linkedin.svg"
          /></a>
        </li>
        <li>
          <a href="https://github.com/alexJSanchez"
            ><img class="imageIcon" src="../assets/icon-github.svg"
          /></a>
        </li>
      </ul>
      <img class="headerImage" src="../assets/alex-pic.png" />
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
        Nice to meet you! I'm <span style="color: #4ee1a0">Alex Sanchez</span>
      </p>
      <p
        style="
          font-family: Arial, Helvetica, sans-serif;
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: aliceblue;
          line-height: 26px;
          color: #d9d9d9;
        "
      >
        Based in Newyork, A Skateborder passionate about front-end developement. With over 20 years
        of customer sevice. I look to using tech to better help athletes achieve professional goals
        with technology.
      </p>
      <a
        href="#contact"
        style="
          color: aliceblue;
          border-style: none;
          font-family: spaceFontBold;
          background-color: transparent;
          border-bottom: solid 2px #4ee1a0;
          text-decoration-line: none;
          letter-spacing: 2px;
          line-height: 26px;
          padding: 1rem 2rem;
          font-size: 1.2rem;
        "
        >Contact Me
      </a>
    </div>
  </div>
</template>

<style scoped>
.headerImage {
  max-width: 60%;
  filter: grayscale(90%);
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
