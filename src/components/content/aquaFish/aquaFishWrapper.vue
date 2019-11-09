<template>
<div>
  <v-container pa-0>
    <v-row>
      <v-col class="pa-0">
        <v-card>
          <v-card-title>Fiche poisson :</v-card-title>
          <v-row wrap class="px-1 ">
            <aqua-fish-thumbnail v-for="fish in getFishes" :key="fish.id" :fish="fish" @display-fish-fiche="getTheFish"/>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <AquaFishDialog v-if="displayFicheFish" :displayFicheFish="displayFicheFish" :fish="fish" @close-dialog="closeDialog"/>  
  </div>
</template>

<script>
import AquaFishThumbnail from "./aquaFishThumbnail";
import AquaFishDialog from "./aquaFishDialog";
export default {
  name: "aquaFishWrapper",
  components: {
    AquaFishThumbnail,
    AquaFishDialog
  },
  data:() => ({
    displayFicheFish: false,
    fish: null,
  }),
  computed: {
    getFishes() {
      return this.$store.state.fishesListe;
    }
  },
  methods:{
    getTheFish(val){
      if(val){
        this.fish = val;
        this.displayFicheFish = true;
      }
    },
    closeDialog(val){
      this.fish = null;
      this.displayFicheFish = false;
    }
  }
};
</script>

<style>
</style>