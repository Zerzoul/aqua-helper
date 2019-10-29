<template>
  <v-container fluid pa-0 background>
    <v-row>
      <header-navigation />
    </v-row>
    <v-row>
      <header-slider />
    </v-row>
    <v-container :fluid="removesViewport" class="px-1">
        <router-view v-if="itemHasBeenLoaded" />
    </v-container>
  </v-container>
</template>

<script>
import HeaderNavigation from "./template/headerNavigation";
import HeaderSlider from "./slider/headerSlider";
export default {
  name: "aquagate",
  components: {
    HeaderNavigation,
    HeaderSlider
  },
  data: () => ({
    itemHasBeenLoaded: false
  }),
  async created() {
    await this.fetchFishes();
    await this.fetchBillets();
    await this.fetchComments();
    this.itemHasBeenLoaded = true;
  },
  methods: {
    fetchFishes() {
      this.$store.dispatch("fetchFishes");
    },
    fetchBillets() {
      this.$store.dispatch("fetchBillets");
    },
    fetchComments(){
      this.$store.dispatch("fetchComments");
    }
  },
  computed: {
    getTheCount() {
      return this.$store.state.articles;
    },
    removesViewport(){
      return this.$vuetify.breakpoint.smAndDown ? true : false;
    }
  }
}
</script>
<style>
p,
h1 {
  background: none !important;
}
li {
  list-style-type: none;
  color: #fff;
  font-weight: 500;
}
</style>
