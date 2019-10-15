<template>
  <div>
    <v-row>
      <v-card-title>Laisser un commentaire ?</v-card-title>
    </v-row>
    
    <v-textarea
      solo
      label="Default style"
      :value="textField"
    >
    </v-textarea>
    <div>
        <v-btn v-on:click="validationForm()" >Submit</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentArticleCommentForm",
  data:() => ({
      textField: "",
  }),
  computed:{
      validationForm(){
          console.log(this.textField);
      }
  }
};
</script>

<style>
</style>