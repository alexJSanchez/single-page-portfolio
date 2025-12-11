<script>
import emailjs from '@emailjs/browser'
const emailKey = import.meta.env.VITE_API_KEY
export default {
  data() {
    return {
      apikey: import.meta.env.API_KEY
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_h26cbok', 'contact_form', this.$refs.form, {
          publicKey: emailKey
        })
        .then(() => {
          console.log('SUCCESS!')
        })
        .catch((err) => {
          console.log('Error:', err)
        })
    }
  }
}
</script>
<template>
  <div class="divider"></div>
  <div class="contact-header">
    <h2 class="contact-title">Contact</h2>
    <p class="contact-desc">
      I would love to hear about your project and how I could help. Please fill in the form, and
      I’ll get back to you as soon as possible.
    </p>
  </div>
  <form id="contact" class="contact-form" ref="form" @submit.prevent="sendEmail">
    <label class="label">Name</label>
    <input class="form-input" placeholder="Full Name" type="text" name="user_name" />

    <label class="label">Email</label>
    <input class="form-input" placeholder="Email address" type="email" name="user_email" />

    <label class="label">Message</label>
    <textarea
      class="form-textarea"
      placeholder="(max200)"
      maxlength="200"
      name="message"
    ></textarea>

    <label class="label">Phone</label>
    <input
      id="phone"
      name="contact_number"
      type="tel"
      maxlength="10"
      placeholder="Enter your phone number"
      class="form-input"
    />

    <input class="submit-btn" type="submit" value="Send" />
  </form>
</template>
<style scoped>
.divider {
  background-color: #ffffff;
  padding: 1px;
  margin: 2rem 1rem;
  opacity: 0.5;
}
.contact-header {
  text-align: center;
  padding: 0 1rem;
}
.contact-title {
  font-size: 2rem;
}
.contact-desc {
  text-align: center;
  color: #d9d9d9;
}
.contact-form {
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.label {
  margin: 1rem 0 0.5rem 0;
  color: #d9d9d9;
}
.form-input {
  color: #d9d9d9;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  border-bottom: solid 1px white;
  padding: 0.2rem 1rem;
}
.form-textarea {
  background-color: transparent;
  border: none;
  border-bottom: solid 1px white;
  font-size: 1rem;
  color: #d9d9d9;
  padding: 0 1rem;
}
.submit-btn {
  margin: 2.5rem 0;
  font-family: spaceFontMed;
  border-style: none;
  background-color: transparent;
  padding-bottom: 0.3rem;
  border-bottom: solid 2px #4ee1a0;
  letter-spacing: 2px;
  line-height: 26px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
