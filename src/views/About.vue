<template>
  <v-container>
    <v-main>
     <div class="block">
        <h2 class="text-center">ABOUT ARTSPEDIA</h2>
          <p>ArtsPedia aims to empower artists around the world through a local- and community-based platform. This vision came from the personal experience of Aprilia, one of Artspedia's founders. Aprilia is a software engineer who is living in many different cities of Indonesia and Europe. Every time she moved to a new city, she joined Facebook groups or foreigners/expatriates. In the Facebook groups she found that sometimes people looks for certain arts services for their events or needs. They wanted to know recommended photographers, videographers, or make-up artists of their cities. Sometimes they have to search randomly in other social medias. On the other side, artists also were trying to promote their artworks and services in social media. Aprilia started to think about a specific platform for those artists.  </p>
          <p>In the year of 2020 the corona pandemic started to challenge many people, including artists.  Aprilia wanted to help this situation by researching her old idea of a specific platform for artists. She started to tell the idea to her friends,  artists and fellow engineers. She gained useful insights, suggestions and critics. In the end of 2020, Ace Arsyadi and Sara Indyra joined Aprilia to execute the idea. Sara has an educational background in business administration while Ace has IT professional background, like Aprilia. They have competencies, potencies and spirits to work as a team with Aprilia.</p>
          <p>The team started to work by choosing "ArtsPedia" for the platform's name and conducting more research with artists. The research has showed positive results and feedback from Artists. The team are now working on more research and web development. At the same time, the team also promotes artists and their works  regularly in Instagram and Facebook.</p>
          <p>With a solid team, we gonna make ArtsPedia successful and bring benefits for artists and society. Feel free to contact us!</p>
        <div class="block">
          <h2 class="text-center">Our Teams</h2>
          <v-row>
            <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
              <v-card flat tile class="mx-auto">
                <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
                <v-card-text class="text--primary text-center">
                  <div class="title">{{ item.name }}</div>
                  <p>{{ item.title }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "About",
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
        },
        {
          id: 4,
          src: require("../assets/Logo Artspedia.png"),
          name: 'Karisma',
          title: 'Web Developer'
        },
        {
          id: 5,
          src: require("../assets/Logo Artspedia.png"),
          name: 'Benjamin Heimann',
          title: 'Designer & Marketer'
        }
      ]
    };
  }
};
</script>
