<template>
  <div>
    <v-row>
      <v-col>
        <v-card-title>Laisser un commentaire ?</v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-textarea solo label="Default style" :value="textField"></v-textarea>
    </v-row>
    <v-row>
      <div>
        <v-btn v-on:click="validationForm()">Submit</v-btn>
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