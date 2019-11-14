<template>
  <v-card
    flat
    dark
    :height="`${responsiveContentBilletHeight}%`"
    min-width="100"
    class="my-5 d-flex flex-column justify-space-around"
  >
    <template>
      <v-img
        class="white--text align-center"
        :height="responsiveContentImageHeight"
        :src="getImages"
      >
        <div :class="contentBilletWrapper">
          <div class="set-background-color full-height">
            <v-row class="px-10 full-height" >
              <v-card-title class="headline">{{billet.title}}</v-card-title>
              <v-card-text class="body-2">
                <div>
                  <span v-html="billetContent"></span>
                </div>
              </v-card-text>
              <v-card-actions>
                <router-link tag="button" :to="setTheUrl">
                  <v-btn text>Lire l'article</v-btn>
                </router-link>
              </v-card-actions>
            </v-row>
          </div>
        </div>
      </v-img>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "ContentBilletArticle",
  props: ["billet"],
  data: () => ({
    imageHasBeenLoaded: false
  }),
  computed: {
    billetContent() {
      const breakpoint = this.$vuetify.breakpoint;
      const subLength = breakpoint.smAndDown ? 100 : 250;
      const subStr = this.billet.content.substring(0, subLength);
      return subStr + "...";
    },
    setTheUrl() {
      return "/aqua-helper/blog/" + this.billet.id;
    },
    getImages() {
      if (this.billet.file_id) {
        const url = this.$store.state.url_image;
        return url + this.billet.file_id;
      }
    },
    contentBilletWrapper() {
      return this.$vuetify.breakpoint.xsOnly
        ? "content-billet-wrapper-phone"
        : "content-billet-wrapper";
    },
    responsiveContentBilletHeight() {
      return this.$vuetify.breakpoint.xsOnly ? 38 : 250;
    },
        responsiveContentImageHeight() {
      return this.$vuetify.breakpoint.xsOnly ? 100 : 250;
    }
  }
};
</script>

<style>
.content-billet-wrapper {
  display: block;
  width: 50%;
  height: 250px;
  background-color: rgba(38, 50, 56, 0.5);
}
.content-billet-wrapper-phone {
  display: block;
  width: 100%;
  height: 100px;
  background-color: rgba(38, 50, 56, 0.5);
}

</style>