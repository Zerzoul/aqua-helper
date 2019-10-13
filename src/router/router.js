import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from '../components/content/blog/contentBlog.vue'
import article from '../components/content/blog/contentArticle.vue'

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
    ]
})