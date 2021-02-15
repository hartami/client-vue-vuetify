import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
//import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./scss/main.scss";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Terms from "./views/Terms.vue";
import DataProtection from "./views/DataProtection.vue";
import Impressum from "./views/Impressum.vue";
import Registration from "./views/Registration.vue";
import Blog from "./views/Blog.vue";
import JobsOffers from "./views/Jobs & Offers.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/terms', component: Terms },
    { path: '/dataprotection', component: DataProtection },
    { path: '/impressum', component: Impressum },
    { path: '/registration', component: Registration },
    { path: '/blog', component: Blog },
    { path: '/jobs-offers', component: JobsOffers },
    { path: '*', component: NotFound }
  ],
  mode: 'history'
 
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
