<template>
  <div>
    <v-row>
      <v-col sm="12" class="pt-0">
        <v-card>
          <content-article-billet :billet="getTheArticle" />
          <v-divider />
          <v-row justify="center" class="px-3">
            <v-col md="8" sm="12">
              <content-article-comment-section
                v-for="(comment, index) in comments"
                :key="index"
                :comment="comment"
                :postId="id"
              />
            </v-col>
          </v-row>
          <v-divider />
          <v-row justify="center" class="px-12">
            <v-col sm="10">
              <v-row>
                <v-card-title class="px-0">Laisser un commentaire ?</v-card-title>
              </v-row>
              <content-article-comment-form :postId="id" :answerCommentId="null" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContentArticleBillet from "./contentArticleBillet";
import ContentArticleCommentSection from "./contentArticleCommentSection";
import ContentArticleCommentForm from "./contentArticleCommentForm";
export default {
  name: "ContentArticleWrapper",
  components: {
    ContentArticleBillet,
    ContentArticleCommentSection,
    ContentArticleCommentForm
  },
  props: ["id"],
  data: () => ({
    image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  }),
  computed: {
    getTheArticle() {
      const article = this.$store.getters.getSelectedBillet(this.id);
      return article;
    },
    comments() {
      const comments = this.$store.getters.getComment(this.id);
      return comments;
    },
  }
};
</script>