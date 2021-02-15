<template>
  <v-container>
    <v-content>
      <search-area/>
      <hero/>
      <category/>
      <latest-post/>
    </v-content>
  </v-container>
</template>

<script>
import SearchArea from "../components/SearchArea";
import Hero from "../components/Hero";
import Category from "../components/Category";
import LatestPost from "../components/LatestPost";

export default {
  name: "Home",
  components: {
    SearchArea,
    Hero,
    Category,
    LatestPost  
  }
};
</script>
