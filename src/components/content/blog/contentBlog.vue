<template>
  <div>
    <v-container fluid pa-0>
      <v-row>
        <header-slider />
      </v-row>
    </v-container>
    <v-container :fluid="removesViewport">
      <v-row justify="center">
        <v-col md="10">
          <content-blog-articles
            v-for="(billet, index) in getBillet()"
            :key="index"
            :billet="billet"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContentBlogArticles from "./contentBlogArticles";
import HeaderSlider from "../slider/headerSlider";
export default {
  name: "ContentBlog",
  components: {
    ContentBlogArticles,
    HeaderSlider
  },

  methods: {
    getBillet() {
      const billets = this.$store.state.billets;
      return billets;
    }
  }
};
</script>
