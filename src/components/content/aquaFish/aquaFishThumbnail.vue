<template>
  <v-col tag="button" @click="displayFicheList()">
    <v-hover v-slot:default="{ hover }">
      <v-card :width="200" class="mx-auto">
        <v-img :src="imageFish" :aspect-ratio="1.7" contain class="align-end">
          <v-expand-transition>
            <div
            v-if="hover"
              class="d-flex justify-center align-center transition-fast-in-fast-out accent display-4 white--text opacity"
              style="height: 94px;"
            >
              <v-icon dark>mdi-eye-outline</v-icon>
            </div>
          </v-expand-transition>
          <div>
            <v-row justify="center" class="accent white--text">
              <span>{{fish.commun_name}}</span>
            </v-row>
          </div>
        </v-img>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "aquaFisheFish",
  props: ["fish"],
  computed: {
    imageFish() {
      return `${this.$store.state.url_image}${this.fish.file_id}`;
    }
  },
  methods: {
    displayFicheList() {
      console.log(this.fish);
      this.$emit("display-fish-fiche", this.fish);
    }
  }
};
</script>

<style scoped>
.opacity{
  opacity: 0.8;
}
</style>