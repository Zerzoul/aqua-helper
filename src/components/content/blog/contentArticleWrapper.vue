<template>
  <v-container>
    <v-row>
      <v-card>
        <content-article-billet :billet="getTheArticle" />
        <v-divider />
        <v-row justify="center" class="px-12">
          <v-col cols="9">
            <content-article-comment
              v-for="(comment, index) in comments()"
              :key="index"
              :comment="comment"
              :depth="0"
              :postId="id"
            />
          </v-col>
        </v-row>
        <v-divider />
        <v-row justify="center" class="px-12">
          <v-col cols="7">
            <v-row>
              <v-card-title class="px-0">Laisser un commentaire ?</v-card-title>
            </v-row>
            <content-article-comment-form :postId="id" :answerPostId="null" />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ContentArticleBillet from "./contentArticleBillet";
import ContentArticleComment from "./contentArticleComment";
import ContentArticleCommentForm from "./contentArticleCommentForm";
export default {
  name: "ContentArticleWrapper",
  components: {
    ContentArticleBillet,
    ContentArticleComment,
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
    }
  },
  methods: {
    comments() {
      const comments = this.$store.getters.getComment(this.id);
      return comments;
    }
  }
};
</script>