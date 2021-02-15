<template>
  <v-container>
    <v-main>
     <div class="block">
      <h2 class="text-center">REGISTER AS AN ARTIST</h2>
          <p>Fulfil this form to join us as an artist. If you have any question, don't hesitate to contact us at info.artspedia@gmail.com</p>
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
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "Registration",
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
