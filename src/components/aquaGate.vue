<template>
  <v-container fluid pa-0 accent>
    <v-layout>
      <header-navigation/>
    </v-layout>
    <v-layout>
      <header-slider/>
    </v-layout>
    <v-layout>
     <content-wrapper />
    </v-layout>
  </v-container>
</template>

<script>
import HeaderNavigation from "./template/headerNavigation";
import HeaderSlider from "./slider/headerSlider";
import ContentWrapper from "./content/contentWrapper";
export default {
  name: 'aquagate',
  components:{
    HeaderNavigation,
    HeaderSlider,
    ContentWrapper
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
