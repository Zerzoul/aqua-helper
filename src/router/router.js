
import blog from '../components/content/blog/contentBlog.vue'
import article from '../components/content/blog/contentArticleWrapper.vue'
import aquaFish from '../components/content/aquaFish/aquaFishWrapper.vue'
import connexion from '../components/content/authentification/authentificationWrapper.vue'
import registration from '../components/content/authentification/registrationWrapper.vue'

export const routes = [
         {
           path: "/aqua-helper/",
           name: "billets",
           component: blog
         },
         {
           path: "/aqua-helper/blog/:id",
           name: "article",
           props: true,
           component: article
         },
         {
           path: "/aqua-helper/aquafish",
           name: "aquaFish",
           component: aquaFish
         },
         {
           path: "/aqua-helper/connexion",
           name: "connexion",
           component: connexion
         },
         {
           path: "/aqua-helper/registration",
           name: "registration",
           component: registration
         }
       ];

