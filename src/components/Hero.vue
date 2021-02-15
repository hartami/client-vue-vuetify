<template>
<v-container>
   <div class="heroBlock">
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title" 
          align="center"
          justify="center"
          >
        <div>{{ item.title }} </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
   </div>
   </v-container>
</template>

<script>
export default {
  name: "Hero",

  data () {
      return {
        items: [
          {
            src: require('../assets/cities/frankfurt.jpg'),
            title: 'Frankfurt'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: "Berlin"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
             title: "Helsinki"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title:"Jakarta"
          },
        ],
      }
    }
  

};
</script>
