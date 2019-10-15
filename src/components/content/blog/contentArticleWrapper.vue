<template>
  <v-container>
    <v-row>
      <v-card>
        <content-article-billet :billet="getTheArticle" />
        <v-divider />
        <v-row justify="center" class="px-12">
          <v-col cols-5>
            <content-article-comment />
          </v-col>
        </v-row>
        <v-divider />
        <v-row justify="center" class="px-12">
          <v-col cols-5>
            <content-article-comment-form />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ContentArticleBillet from "./contentArticleBillet";
import ContentArticleCommentForm from "./contentArticleCommentForm";
export default {
  name: "ContentArticleWrapper",
  components: {
    ContentArticleBillet,
    ContentArticleCommentForm
  },
  props: ["id"],
  data: () => ({
    image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  }),
  computed: {
    getTheArticle() {
      const article = this.$store.getters.getSelectedBillet(this.id);
      console.log(article);
      return article;
    }
  }
};
</script>