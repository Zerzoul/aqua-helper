<template>
  <div>
    <v-card :class="`ml-${depth}`" class="mb-5">
      <v-row class="px-7" align="center" justify="space-between">
        <v-card-title class="pa-0">{{comment.author}}</v-card-title>
        <span>{{comment.date}}</span>
      </v-row>
      <v-card-text class="pb-2">{{comment.content}}</v-card-text>

      <v-card-actions v-if="comment.answerCommentId === null">
        <v-btn @click="answerToThisComment()" v-if="!displayAnswer">Répondre</v-btn>
        <v-btn @click="closeThisAnswer()" v-else icon>
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
  props: ["comment", "depth", "postId", "closeAll", "displayAnswer"],
  data: () => ({
    answer: false,
  }),
  methods: {
    answerToThisComment(e) {
      console.log("this.answer", this.answer);
      const getCommentId = this.getCommentId();
      if (!this.displayAnswer) {
        this.answer = true;
        this.$emit("eventComment", {
          answer: this.answer,
          getCommentId: getCommentId
        });
      }
    },
    closeThisAnswer(e) {
      console.log("close", e);
      if (this.displayAnswer) {
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
    eventComment(val) {
      this.$emit("eventComment", val);
    }
  }
};
</script>

<style>
</style>