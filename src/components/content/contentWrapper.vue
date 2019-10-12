<template>
  <v-container>
    <v-layout>
      <v-flex>
        <content-billet-article
        v-for="(billet, index) in getBillet()"
        :key="index"
        :billet="billet"/>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContentBilletArticle from "./contentBilletArticle";
export default {
  name: "ContentWrapper",
  components: {
    ContentBilletArticle
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
