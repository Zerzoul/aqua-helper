import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from '../components/content/blog/contentBlog.vue'
import article from '../components/content/blog/contentArticleWrapper.vue'
import aquaFish from '../components/content/aquaFish/aquaFishWrapper.vue'
import connexion from '../components/content/authentification/authentificationWrapper.vue'
import registration from '../components/content/authentification/registrationWrapper.vue'

import module from '../store/module'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "billets",
      component: blog
    },
    {
      path: "/blog/:id",
      name: "article",
      props: true,
      component: article
    },
    {
      path: "/aquafish",
      name: "aquaFish",
      component: aquaFish
    },
    {
      path: "/connexion",
      name: "connexion",
      component: connexion,
    },
    {
      path: "/registration",
      name: "registration",
      component: registration,
    }
  ]
});

