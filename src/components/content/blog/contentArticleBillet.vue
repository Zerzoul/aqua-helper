<template>
  <div>
    <v-img class="white--text align-end" height="370px" :src="getImage" :min-width="`${100}%`">
      <v-card-title class="accent">
        <v-container pa-0>
        <v-row class="px-5" align="center" justify="space-between">
          <span class="display-1">{{ billet.title }}</span>
          <span class="caption">{{ billet.date_create }}</span>
        </v-row>
        </v-container>
      </v-card-title>
    </v-img>
    <v-container>
      <v-card-text>
        <div>
          <span v-html="billet.content"></span>
        </div>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["billet"],
  computed: {
    getImage() {
      const url = this.$store.state.url_image;
      return url + this.billet.file_id;
    }
  }
};
</script>
