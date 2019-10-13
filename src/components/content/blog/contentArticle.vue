<template>
  <v-container>
    <v-layout>
      <v-card>
        <v-card-title>{{getTheArticle.title}}</v-card-title>
        <v-card-text>
          <div>
            <span v-html="getTheArticle.content"></span>
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    getTheArticle() {
      console.log(this.$route.params.id);
      const article = this.$store.getters.getSelectedBillet(
        this.$route.params.id
      );
      return article[0];
    }
  }
};
</script>