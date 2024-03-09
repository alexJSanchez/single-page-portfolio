<script setup></script>
<template>
  <div style="margin-top: 3rem">
    <div style="background-color: #4ee1a0; padding: 1px; margin: 1rem"></div>
    <ul style="text-align: center; list-style: none">
      <li
        style="
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        "
      >
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
          "
        >
          <img
            src="../assets/icon-html.png"
            style="
              width: 100%;
              max-width: 100px; /* Adjust the max-width as needed */
              border-radius: 10%;
              box-shadow:
                0 0 5px 10px rgba(255, 255, 255, 0.3),
                inset 0 0 10px 10px rgba(255, 255, 255, 0.3); /* Multiple shadows including the background shadow */
            "
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column-start: 4;
            grid-column-end: 5;
            grid-row-start: 1;
          "
        >
          <img
            src="../assets/icon-css.svg"
            style="
              width: 100%;
              max-width: 100px; /* Adjust the max-width as needed */
              border-radius: 10%;
              box-shadow:
                0 0 5px 10px rgba(255, 255, 255, 0.3),
                inset 0 0 10px 10px rgba(255, 255, 255, 0.3); /* Multiple shadows including the background shadow */
            "
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 2;
          "
        >
          <img
            src="../assets/icon-javascript.svg"
            style="
              width: 100%;
              max-width: 75px; /* Adjust the max-width as needed */
              max-height: 100px;
              border-radius: 10%;
              box-shadow:
                0 0 5px 10px rgba(255, 255, 255, 0.3),
                inset 0 0 10px 10px rgba(255, 255, 255, 0.3); /* Multiple shadows including the background shadow */
            "
          />
        </div>
        <h2
          style="
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 3;
            margin-top: 20px;
            font-size: 1.8rem;
          "
        >
          4Years
        </h2>
      </li>
      <li style="margin: 1rem">
        <div
          style="display: flex; position: relative; justify-content: center; align-items: center"
        >
          <img
            src="../assets/mernStack.png"
            style="
              width: 100%;
              max-width: 8rem; /* Adjust the max-width as needed */
              max-height: 8rem;
            "
          />
          <div
            style="
              width: 8rem;
              height: 8rem;
              position: absolute;
              border-radius: 30%;
              box-shadow:
                0 0 2px 2px rgba(255, 255, 255, 0.3),
                inset 0 0 20px 20px rgba(255, 255, 255, 0.3); /* Multiple shadows including the background shadow */
              transform: rotate(45deg); /* Rotate the box shadow by 45 degrees */
            "
          ></div>
        </div>
        <h2
          style="
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 3;
            margin-top: 20px;
            font-size: 1.8rem;
          "
        >
          4Years
        </h2>
      </li>
      <li>
        <div
          style="display: flex; justify-content: center; margin-top: 1rem; flex-direction: column"
        >
          <h2 style="font-size: 2rem; color: white">Accessibility</h2>
          <p style="color: #d9d9d9">4 year experience</p>
        </div>
      </li>
      <li>
        <div
          style="display: flex; justify-content: center; margin-top: 1rem; flex-direction: column"
        >
          <h2 style="font-size: 2rem; color: white">React</h2>
          <p style="color: #d9d9d9">4 year experience</p>
        </div>
      </li>
      <li>
        <div
          style="display: flex; justify-content: center; margin-top: 1rem; flex-direction: column"
        >
          <h2 style="font-size: 2rem; color: white">Sql/MongoDb</h2>
          <p style="color: #d9d9d9">4 year experience</p>
        </div>
      </li>
    </ul>
    <div style="background-color: #4ee1a0; padding: 1px; margin: 1rem"></div>
  </div>
</template>
<style></style>
