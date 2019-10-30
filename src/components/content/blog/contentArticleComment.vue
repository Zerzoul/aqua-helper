<template>
  <div>
    <v-card :class="`ml-${depth}`" class="mb-5">
      <v-card-title>{{comment.author}}</v-card-title>
      <v-card-text>{{comment.content}}</v-card-text>
      <v-card-text>{{comment.date}}</v-card-text>
    </v-card>
  
    <div  >
      <content-article-comment v-for="(answer, index) in comment.answers" :key="index" :comment="answer" :depth="12"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentArticleComment",
  props: ["comment", "depth"],

};
</script>

<style>
</style>