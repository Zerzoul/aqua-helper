<template>
  <div>
    <v-card :class="`ml-${depth}`" class="mb-5">
      <v-card-title>{{comment.author}}</v-card-title>
      <v-card-text>{{comment.content}}</v-card-text>
      <v-card-text>{{comment.date}}</v-card-text>

      <v-card-actions>
        <v-btn @click="answerToThisComment()">Répondre</v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <content-article-comment
        v-for="(answer, index) in comment.answers"
        :key="index"
        :comment="answer"
        :depth="12"
      />
    </div>
    
    <v-expansion-panels v-if="answer" v-model="value">
      <v-expansion-panel>
        <v-row justify="center" class="px-12">
          <v-col cols="7">
            <v-expansion-panel-content>
              <v-card-title class="px-0">Répondre ?</v-card-title>
              <content-article-comment-form :postId="postId" :answerPostId="comment.id" />
            </v-expansion-panel-content>
          </v-col>
        </v-row>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import ContentArticleCommentForm from "./contentArticleCommentForm";

export default {
  name: "contentArticleComment",
  components: {
    ContentArticleCommentForm
  },
  props: ["comment", "depth", "postId"],
  data: () => ({
    answer: false,
    value: 1
  }),
  methods: {
    answerToThisComment() {
      console.log(this.value);
      this.answer = true;
      this.value = 0;
    }
  }
};
</script>

<style>
</style>