<template>
<div>
<v-card>
  <v-card-title>{{comment.author}}</v-card-title>
  <v-card-text>{{comment.content}}</v-card-text>
  <v-card-text>{{comment.date}}</v-card-text>
</v-card>
<template v-if="comment.answer_comment_id">
<content-article-comment comment="comment" />
</template>
</div>
</template>

<script>
export default {
  name: "ContentArticleComment",
  props:['comment'],
  computed: {
    validationForm() {
      console.log(this.textField);
    }
  }
};
</script>

<style>
</style>