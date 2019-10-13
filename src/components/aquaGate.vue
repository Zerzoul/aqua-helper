<template>
  <v-container fluid pa-0 accent>
    <v-layout>
      <header-navigation/>
    </v-layout>
    <v-layout>
      <header-slider/>
    </v-layout>
    <v-layout>
     <router-view v-if="itemHasBeenLoaded"/>
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
    HeaderSlider
  },
  data: () => ({
    itemHasBeenLoaded: false,
  }),
  async created(){
    await this.fetchFishes();
    await this.fetchBillets();
    this.itemHasBeenLoaded = true;
  },
  methods:{
    fetchFishes(){
      this.$store.dispatch("fetchFishes");  
    },
    fetchBillets(){
      this.$store.dispatch("fetchBillets");  
    }
  },
  computed:{
    getTheCount(){
      return this.$store.state.articles;
    }
  }
};
</script>
<style>
p, h1 {
background: none !important;
}
</style>
