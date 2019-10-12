<template>
  <v-container fluid pa-0>
    <v-layout>
      <header-navigation/>
    </v-layout>
    <v-layout>
      <header-slider/>
    </v-layout>
    <v-layout>
     <v-flex v-for="articles in getTheCount" :key="articles.id">
       <div>{{ articles.commun_name }}</div>
       </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HeaderNavigation from "./template/headerNavigation";
import HeaderSlider from "./slider/headerSlider";
export default {
  name: 'aquagate',
  components:{
    HeaderNavigation,
    HeaderSlider,
  },
  data: () => ({
    itemHasBeenLoaded: false,
  }),
  async created(){
    await this.fetchFishes();
    this.itemHasBeenLoaded = true;
  },
  methods:{
    fetchFishes(){
      this.$store.dispatch("fetchFishes");  
    }
  },
  computed:{
    getTheCount(){
      return this.$store.state.articles;
    }
  }
};
</script>
