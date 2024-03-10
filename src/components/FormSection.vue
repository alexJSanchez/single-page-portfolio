<script></script>
<template>
  <div style="background-color: #ffffff; padding: 1px; margin: 1rem; opacity: 0.5"></div>
  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 1rem">
    <h2 style="font-size: 2rem">Contact</h2>
    <p style="text-align: center">
      I would love to hear about your project and how I could help. Please fill in the form, and
      I’ll get back to you as soon as possible.
    </p>
    <form style="display: flex; flex-direction: column; justify-content: flex-start; width: 100%">
      <label for="name" style="margin: 1.5rem 2rem">NAME</label>
      <input
        name="name"
        type="text"
        style="
          color: #d9d9d9;
          background-color: transparent;
          border: none;
          font-size: 1rem;
          border-bottom: solid 1px white;
          padding: 0.2rem 1rem;
        "
      />
      <label for="email" style="margin: 1.5rem 2rem">EMAIL</label>
      <input
        name="email"
        type="text"
        style="
          color: #d9d9d9;
          font-size: 1rem;
          background-color: transparent;
          border: none;
          border-bottom: solid 1px white;
          padding: 0rem 1rem;
        "
      />
      <label for="message" style="margin: 1rem 2rem 3rem">MESSAGE</label>
      <input
        name="message"
        type="text"
        style="
          background-color: transparent;
          border: none;
          border-bottom: solid 1px white;
          font-size: 1rem;
          color: #d9d9d9;
          padding: 0rem 1rem;
        "
      />
    </form>
    <div style="display: flex; align-self: flex-end">
      <input
        type="submit"
        value="Send Message"
        :style="{
          margin: '.5rem 0',
          fontFamily: 'spaceFontMed',
          borderStyle: 'none',
          backgroundColor: 'transparent',
          paddingBottom: '0.3rem',
          borderBottom: 'solid 2px #4ee1a0',
          letterSpacing: '2px',
          lineHeight: '26px',
          color: 'white',
          textTransform: 'uppercase'
        }"
      />
    </div>
  </div>
</template>
<style></style>
