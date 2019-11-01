<template>
  <div>
    <v-card :class="`ml-${depth}`" class="mb-5">
      <v-card-title>{{comment.author}}</v-card-title>
      <v-card-text>{{comment.content}}</v-card-text>
      <v-card-text>{{comment.date}}</v-card-text>

      <v-card-actions v-if="comment.answerCommentId === null">
        <v-btn @click="answerToThisComment()" v-if="!answer">Répondre</v-btn>
        <v-btn @click="closeThisAnswer()" v-else>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <content-article-comment-block
        v-for="(answer, index) in comment.answers"
        :key="index"
        :comment="answer"
        :depth="12"
        @eventComment="eventComment"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "contentArticleCommentBlock",
  props: ["comment", "depth", "postId", "closeAll"],
  data: () => ({
    answer: false,
  }),
  methods: {
    answerToThisComment(e) {
      console.log("answer", e);
      const getCommentId = this.getCommentId();
      if (!this.answer) {
        this.answer = true;
        this.$emit("eventComment", {
          answer: this.answer,
          getCommentId: getCommentId
        });
      }
    },
    closeThisAnswer(e) {
      console.log("close", e);
      if (this.answer) {
        this.answer = false;
        this.$emit("eventComment", this.answer);
      }
    },
    getCommentId() {
      const commentId =
        this.comment.answerCommentId === null
          ? this.comment.id
          : this.comment.answer_comment_id;
      return commentId;
    },
    eventComment(val){
        this.$emit("eventComment", val);
    }
  }
};
</script>

<style>
</style>