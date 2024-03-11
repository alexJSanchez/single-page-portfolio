<script>
import emailjs from '@emailjs/browser'

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_h26cbok', 'contact_form', this.$refs.form, {
          publicKey: 'GDrTSqxGJ4HIhTYVd'
        })
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    }
  }
}
</script>
<template>
  <div style="background-color: #ffffff; padding: 1px; margin: 2rem 1rem; opacity: 0.5"></div>
  <div style="text-align: center; padding: 0rem 1rem">
    <h2 style="font-size: 2rem">Contact</h2>
    <p style="text-align: center">
      I would love to hear about your project and how I could help. Please fill in the form, and
      I’ll get back to you as soon as possible.
    </p>
  </div>
  <form
    style="
      display: flex;
      padding: 0rem 1rem;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
    "
    ref="form"
    @submit.prevent="sendEmail"
  >
    <label style="margin: 0rem 0rem">Name</label>
    <input
      style="
        color: #d9d9d9;
        background-color: transparent;
        border: none;
        font-size: 1rem;
        border-bottom: solid 1px white;
        padding: 0.2rem 1rem;
      "
      placeholder="Full Name"
      type="text"
      name="user_name"
    />
    <label style="margin: 1rem 0rem">Email</label>
    <input
      style="
        color: #d9d9d9;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        border-bottom: solid 1px white;
        padding: 0rem 1rem;
      "
      placeholder="Email address"
      type="email"
      name="user_email"
    />
    <label style="margin: 1rem 0rem">Message</label>
    <textarea
      style="
        background-color: transparent;
        border: none;
        border-bottom: solid 1px white;
        font-size: 1rem;
        color: #d9d9d9;
        padding: 0rem 1rem;
      "
      placeholder="(max200)"
      maxlength="200"
      name="message"
    ></textarea>
    <label style="margin: 1rem 0rem">Phone</label>
    <input
      id="phone"
      name="contact_number"
      type="tel"
      maxlength="10"
      placeholder="Enter your phone number"
      style="
        color: #d9d9d9;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        border-bottom: solid 1px white;
        padding: 0.5rem 1rem;
      "
    />
    <input
      :style="{
        margin: '2.5rem 0',
        fontFamily: 'spaceFontMed',
        borderStyle: 'none',
        backgroundColor: 'transparent',
        paddingBottom: '0.3rem',
        borderBottom: 'solid 2px #4ee1a0',
        letterSpacing: '2px',
        lineHeight: '26px',
        color: 'white',
        textTransform: 'uppercase',
        cursor: 'pointer'
      }"
      type="submit"
      value="Contact Me"
    />
  </form>
</template>
<!--
  <div style="background-color: #ffffff; padding: 1px; margin: 1rem; opacity: 0.5"></div>
  <div style="display: flex; flex-direction: column; align-items: center; padding: 0 1rem">
    <h2 style="font-size: 2rem">Contact</h2>
    <p style="text-align: center">
      I would love to hear about your project and how I could help. Please fill in the form, and
      I’ll get back to you as soon as possible.
    </p>
    <form style="display: flex; flex-direction: column; justify-content: flex-start; width: 100%">
      <label for="name" style="margin: 1.5rem 2rem">Name</label>
      <input
        id="name"
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
      <label for="email" style="margin: 1.5rem 2rem">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        style="
          color: #d9d9d9;
          font-size: 1rem;
          background-color: transparent;
          border: none;
          border-bottom: solid 1px white;
          padding: 0rem 1rem;
        "
      />
      <label for="message" style="margin: 1rem 2rem 3rem">Message</label>
      <textarea
        id="message"
        name="message"
        style="
          background-color: transparent;
          border: none;
          border-bottom: solid 1px white;
          font-size: 1rem;
          color: #d9d9d9;
          padding: 0rem 1rem;
        "
      ></textarea>
      <input
        type="submit"
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
          textTransform: 'uppercase',
          cursor: 'pointer'
        }"
      />
    </form>-->
