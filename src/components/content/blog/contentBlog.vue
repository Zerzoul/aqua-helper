<template>
  <v-container>
    <v-layout>
      <v-flex>
        <content-blog-billets
        v-for="(billet, index) in getBillet()"
        :key="index"
        :billet="billet"/>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContentBlogBillets from "./contentBlogBillets";
export default {
  name: "ContentBlog",
  components: {
    ContentBlogBillets
  },
  methods: {
    getBillet() {
      const billets = this.$store.state.billets;
      console.log(billets);
      return billets;
    }
  }
};
</script>
