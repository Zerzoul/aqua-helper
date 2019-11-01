<template>
  <div>
    <div>
      <content-article-comment-block :comment="comment" :depth="0" @eventComment="eventComment" />
    </div>
    <div>
      <v-expansion-panels v-if="displayAnswer" v-model="value">
        <v-expansion-panel>
          <v-row justify="center" class="px-12">
            <v-col cols="7">
              <v-expansion-panel-content>
                <v-card-title class="px-0">Répondre ?</v-card-title>
                <content-article-comment-form :postId="postId" :answerPostId="getCommentId" />
              </v-expansion-panel-content>
            </v-col>
          </v-row>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import ContentArticleCommentForm from "./contentArticleCommentForm";
import ContentArticleCommentBlock from "./contentArticleCommentBlock";

export default {
  name: "contentArticleComment",
  components: {
    ContentArticleCommentForm,
    ContentArticleCommentBlock
  },
  props: ["comment", "depth", "postId"],
  data: () => ({
    value: 1,
    getCommentId: null,
    displayAnswer: false
  }),
  methods: {
    eventComment(val) {
      console.log(val);
      if (val.answer) {
        this.value = 0;
        this.displayAnswer = true;
        this.getCommentId = val.getCommentId;
      } else {
        this.value = 1;
        this.displayAnswer = false;
        this.getCommentId = null;
      }
    }
  }
};
</script>

<style>
</style>