<template>
  <v-app>
    <v-app-bar app flat max-height="65" color="white">
       <Header/>
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import Hero from "./components/Hero";
import Category from "./components/Category";
import LatestPost from "./components/LatestPost";
import Footer from "./components/Footer";


export default {
  name: "App",

  components: {
    Header,
    SearchArea,
    Hero,
    Category,
    LatestPost,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
