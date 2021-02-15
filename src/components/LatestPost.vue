<template>
  <v-container>
    <div class="block latestPostBlock">
          <h2 class="text-center" align="center">Blog: Latest Post</h2>
          <v-row>
              <v-col v-for="item in items" :key="item.id" cols="12" md="4">
                <v-card outlined class="mx-auto">
                  <v-img class="white--text align-end" height="200px" :src="item.src">
                      <v-card-title>{{ item.title }}</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0">{{ item.topic }}</v-card-subtitle>
                  <v-card-text class="text--primary">
                      <div>{{ item.description }}</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn color="primary" text>More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
          </v-row>
  </div>  
</v-container>
</template>

<script>
export default {
  name: "LatestPost",

     data () {
      return {
        items: [
          { 
            id: 1,
            src: require('../assets/categories/Photography.jpg'),
            title:"Photography: A Space for Expression",
            topic: "City Photography",
            description:"In the last 3 years photography has been an important part of my life. It gives me a space for expression"
          },
          {
            id: 2,
            src: require('../assets/categories/Dancing.jpg'),
            title:"A Mindful Dancer of Berlin",
            topic: "Contemporary Dance",
            description:"In the last 3 years photography has been an important part of my life. It gives me a space for expression"

          },
          {
            id: 3,
            src: require('../assets/categories/Photography.jpg'),
            title:"Makeup Artist",
            topic:"Female Makeup",
            description:"I love to bring confidence to women through my work:"
          },
          
        ],
      }
    }
};
</script>
