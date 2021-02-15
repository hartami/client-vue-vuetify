<template>
  <v-container>
    <v-main>
     <div class="block">
      <h2 class="text-center">TERMS OF USE</h2>
          <p>Fulfil this form to join us as an artist. If you have any question, don't hesitate to contact us at info.artspedia@gmail.com</p>
      </div>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "Terms",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/Logo Artspedia.png"),
          name: 'Aprilia Hartami',
          title: 'CEO'
        },
        {
          id: 2,
          src: require("../assets/Logo Artspedia.png"),
          name: 'A.C Arsyadi',
          title: 'CTO'
        },
        {
          id: 3,
          src: require("../assets/Logo Artspedia.png"),
          name: 'Sara Indyra',
          title: 'CMO'
        }
      ]
    };
  }
};
</script>
