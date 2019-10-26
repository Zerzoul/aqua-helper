<template>
  <v-row justify="center">
    <v-col md="10">
      <content-blog-articles v-for="(billet, index) in getBillet()" :key="index" :billet="billet" @imageLoaded="imageLoaded"/>
    </v-col>
  </v-row>
</template>

<script>
import ContentBlogArticles from "./contentBlogArticles";
export default {
  name: "ContentBlog",
  components: {
    ContentBlogArticles
  },

  methods: {
    getBillet() {
      const billets = this.$store.state.billets;
      return billets;
    },
  }
};
</script>
