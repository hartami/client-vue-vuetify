<template>
  <v-container> 
    <v-toolbar flat>     
      <v-img
          alt="Artspedia Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/Logo Artspedia.png')"
          transition="scale-transition"
          width="40"
        />
      <v-toolbar-title text>Artspedia</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
          <v-btn text>
            <router-link to="/"> Home </router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/registration"> Register </router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/blog"> Blog </router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/jobs-offers"> Jobs & Offers </router-link>
          </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
  })
};
</script>
