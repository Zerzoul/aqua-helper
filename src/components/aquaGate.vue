<template>
  <v-container>
    <v-layout>
     <v-flex v-for="articles in getTheCount" :key="articles.id">
       <div>{{ articles.commun_name }}</div>
       </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
  }),
  created(){
     this.$store.dispatch("fetchArticles");
  },
  computed:{
    getTheCount(){
      return this.$store.state.articles;
    }
  }
};
</script>
