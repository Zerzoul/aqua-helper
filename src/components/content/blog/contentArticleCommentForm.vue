<template>
  <div>
    <v-row>
      <v-textarea solo clearable :counter="255" :error-messages="errorMessage" v-model="textField"></v-textarea>
    </v-row>
    <v-row>
      <div>
        <v-btn v-on:click="validationForm()">Envoyé</v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
import axios from '../../../axios';
export default {
  name: "ContentArticleCommentForm",
  props: ["postId", "answerPostId"],
  data: () => ({
    textField: null,
    errorMessage: [],
    error: false
  }),
  methods: {
    validationForm() {
      const comment = this.textField;
      if (comment === null) {
        this.errorMessage.push(
          "Compléter le champ, pour laisser un commentaire."
        );
        return;
      }
      if (comment.length > 255) {
        this.errorMessage.push(
          "Votre commentaire est trop long. il doit être de moins de 255 caratcère."
        );
        return;
      }
      this.addThisComment();
    },
   async addThisComment() {
      await axios({
        method: "POST",
        url: "/newcom",
        data: {
          postId: this.postId,
          answerPostId: this.answerPostId,
          author: "zerzoul", // TODO replace by localsession storage.
          content: this.textField
        },
      }).then((response) => {
           console.log(response.data);
           this.$store.dispatch("addComment", response.data);
        }).catch(err => {
          console.log("error", err);
        });
    }
  }
};
</script>

<style>
</style>