<template>
  <div>
    <v-img class="white--text align-end" height="370px" :src="getImage">
      <v-card-title class="display-1" >{{ billet.title }}</v-card-title>
    </v-img>
    <v-card-text>
      <div>
        <span v-html="billet.content"></span>
      </div>
    </v-card-text>
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