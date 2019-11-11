<template>
  <v-container fluid pa-0 background class="block-wrapper">
    <v-row>
      <header-navigation-wrapper />
    </v-row>
        <router-view v-if="itemHasBeenLoaded" />
  </v-container>
</template>

<script>
import HeaderNavigationWrapper from "./template/headerNavigationWrapper";
export default {
  name: "aquagate",
  components: {
    HeaderNavigationWrapper,

  },
  data: () => ({
    itemHasBeenLoaded: false
  }),
  async created() {
    await this.fetchFishes();
    await this.fetchBillets();
    await this.fetchComments();
    await this.isStillConnected();
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
    },
    isStillConnected(){
      this.$store.dispatch("stillConnected");
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
.block-wrapper{
  min-height: 100%;
}
</style>
