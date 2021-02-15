<template>
    <v-container>
    <v-footer>
      <v-card flat class="text-center">
        <p></p>
        <v-card-text justify="center">
          <v-btn v-for="page in pages" :key="page" text rounded class="my-2" :href="page.link">
            {{ page.name }}
           </v-btn>
        </v-card-text>

        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.id" class="mx-4" icon>
            <a :href="icon.link">
            <v-icon size="24px">{{ icon.src }}</v-icon> </a>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
          We are ArtsPedia, a platform to empower local artists. Our platform shows profiles and contacts of various artists, such as photographers, make-up artists, tattoo artists, dancers, musicians, and other categories of passionate artists. We also regularly promotes artists in our social media and blog. Feel free to ask and contact us here.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Artspedia</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",

   data () {
      return {
        icons: [
          { 
            id: 1,
            src: 'mdi-facebook',
            link:'https://www.facebook.com/artspedia.platform/'
          },
          {
            id: 2,
            src: 'mdi-twitter',
            link:'https://www.facebook.com/artspedia.platform/'
          },
          {
            id: 3,
            src: 'mdi-linkedin',
            link:'https://www.facebook.com/artspedia.platform/'
          },
          {
            id: 4,
            src: 'mdi-instagram',
            link:'https://www.instagram.com/artspedia.platform/'
          }
        ],
      pages: [
        {
          name:'About Us',
          link:'/about'
        },
        {
          name:'Contact',
          link:'/contact'
        }, 
        {
          name:'Blog',
          link:'/blog'
        }, 
        {
          name:'Terms of Use',
          link:'/terms'
        }, 
        {
          name:'Data Protection',
          link:'/dataprotection'
        }, 
        {
          name:'Impressum',
          link:'/impressum'
        }, 
      ]
      }
    }

};
</script>
