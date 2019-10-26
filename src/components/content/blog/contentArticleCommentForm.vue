<template>
  <div>
    <v-row>
      <v-card-title class="px-0">Laisser un commentaire ?</v-card-title>
    </v-row>
    <v-row>
      <v-textarea solo label="Default style" :value="textField"></v-textarea>
    </v-row>
    <v-row>
      <div>
        <v-btn v-on:click="validationForm()">Envoyé</v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContentArticleCommentForm",
  data: () => ({
    textField: ""
  }),
  computed: {
    validationForm() {
      console.log(this.textField);
    }
  }
};
</script>

<style>
</style>