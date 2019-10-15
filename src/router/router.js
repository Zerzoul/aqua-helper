import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from '../components/content/blog/contentBlog.vue'
import article from '../components/content/blog/contentArticleWrapper.vue'
import aquaFish from '../components/content/aquaFish/aquaFishWrapper.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: "/",
            name: "billets",
            component: blog,
        },
        {
            path: "/blog/:id",
            name: "article",
            props: true,
            component: article,
        },
        {
            path: "/aquafish",
            name: "aquaFish",
            component: aquaFish,
        },
    ]
})