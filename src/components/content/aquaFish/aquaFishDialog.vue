<template>
  <v-dialog v-model="displayFicheFish" fullscreen>
    <v-container fluid>
      <v-card>
        <v-row style="width: 100%;">
          <v-col cols="8">
            <v-img :src="imageFish" :height="`${100}%`" />
          </v-col>
          <v-col cols="4" d-flex justify-center>
            <v-row>
              <v-col cols>
                <v-card-title class="pa-0">{{fish.commun_name}}</v-card-title>
                <v-card-title class="pa-0 font-italic body-2">{{fish.latin_name}}</v-card-title>
              </v-col>
              <v-col cols="1">
                <v-btn icon @click="closeDialog()">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="tableFish body-2">
              <v-col class="d-flex flex-column align-center justify-space-between">
                <div>Groupe : {{fish.category_name}}</div>
                <div>Individu min : {{fish.individual_mini}}</div>
                <div>Régime : {{fish.regime}}</div>
                <div>Prix : {{fish.price}}€</div>
              </v-col>
              <v-col class="d-flex flex-column align-center justify-space-between">
                <div>PH : {{fish.PH}} / GH : {{fish.GH}}</div>
                <div>Température : {{fish.heat}}</div>
                <div>Volume aqua : {{fish.vol_mini}}</div>
                <div>Taille : {{fish.size}}</div>
              </v-col>
            </v-row>
            <div>
              <v-card-text v-html="fish.detail" class="px-0 body-2"></v-card-text>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-dialog>
</template>
<script>
export default {
  props: ["displayFicheFish", "fish"],
  computed: {
    imageFish() {
      return `${this.$store.state.url_image}${this.fish.file_id}`;
    }
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog", false);
    }
  }
};
</script>
<style scoped>
</style>
