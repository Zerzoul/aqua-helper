<template>
  <v-card
    flat
    dark
    height="250"
    min-width="400"
    class="my-5 d-flex flex-column justify-space-around"
  >
    <v-img class="white--text align-center" height="250px" :src="image">
      <div class="content-billet-wrapper">
        <v-card-title>{{billet.title}}</v-card-title>
        <v-card-text>
          <div>
            <span v-html="billetContent"></span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text>
            <router-link :to="setTheUrl">Lire l'article</router-link>
          </v-btn>
        </v-card-actions>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ContentBilletArticle",
  props: ["billet"],
  data: () => ({
    image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  }),
  computed: {
    billetContent() {
      const breakpoint = this.$vuetify.breakpoint;
      const subLength = breakpoint.xsAndDown ? 100 : 250;
      const subStr = this.billet.content.substring(0, subLength);
      return subStr + "...";
    },
    setTheUrl(){
      return this.billet.id;
    }
  }
};
</script>

<style>
.content-billet-wrapper {
  display: block;
  width: 50%;
  height: 100%;
}
</style>