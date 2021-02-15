<template>
  <v-container>
    <v-main>
     <div class="block">
        <h2 class="text-center">CONTACT US</h2>
        <p>Feel free to contact us at info.artspedia@gmail.com or via this form.</p>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
          </v-form>
        </v-container>
      </div>
      <div class="block googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.010191527773!2d8.676410751251415!3d50.589763885097234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc58c1320e418d%3A0xf0613f71f3f915c4!2sOstanlage%202%2C%2035390%20Gie%C3%9Fen!5e0!3m2!1sen!2sde!4v1608309181569!5m2!1sen!2sde" width="100%" height="450" ></iframe>
      </div>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 1000) || "Name must be less than 1000 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 0) || "Message must be more than 0 characters"
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>