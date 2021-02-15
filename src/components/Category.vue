<template>
  <div class="block galleryBlock">
    <v-container> 
        <h2 class="text-center" align="center">Categories</h2>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="6" sm="4"
          >
            <v-img
              :src= "item.src"
              aspect-ratio="1"
              class="grey lighten-2"
            >
     
            <template>
                <v-row
                  class="fill-height title"
                  align="center"
                  justify="center"
                >    
                  <div class="white--text">{{ item.title }}</div>   
                </v-row>
            </template> 
            </v-img>
          </v-col>
        </v-row>
  </v-container>
</div>  
</template>

<script>
export default {
  name: "Category",

     data () {
      return {
        items: [
          { 
            id: 1,
            src: require('../assets/categories/musician.jpg'),
            title:"Musicians"
          },
          {
            id: 2,
            src: require('../assets/categories/Singing.jpg'),
            title:"Singers"
          },
          {
            id: 3,
            src: require('../assets/categories/Dancing.jpg'),
            title:"Dancers"
          },
          {
            id: 4,
            src: require('../assets/categories/Photography.jpg'),
            title:"Photographers"
          },
          {
            id: 5,
            src: require('../assets/categories/Videography.jpg'),
            title:"Videographers"
          },
          {
            id: 6,
            src: require('../assets/categories/Acting & Modeling.jpg'),
            title:"Actors & Models"
          },
          {
            id: 7,
            src: require('../assets/categories/Performing artists.jpg'),
            title:"Other Performing Arts"
          },
          {
            id: 8,
            src: require('../assets/categories/Makeup by Yans.jpg'),
            title:"Makeup Artists"
          },
          {
            id: 9,
            src: require('../assets/categories/Painting.jpg'),
            title:"Painters"
          },
        ],
      }
    }
};
</script>
<style scoped>
 
</style>