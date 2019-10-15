<template>
  <v-container>
    <v-row xs>
      <v-col>
        <v-card>
          <v-card-title>Aqua Fish</v-card-title>
          <v-row wrap class="px-1 ">
            <aqua-fishe-fish v-for="fish in getFishes" :key="fish.id" :fish="fish" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AquaFisheFish from "./aquaFisheFish";
export default {
  name: "aquaFishWrapper",

  components: {
    AquaFisheFish
  },
  computed: {
    getFishes() {
      return this.$store.state.fishesListe;
    }
  }
};
</script>

<style>
</style>