<template>
  <v-col cols>
    <v-card :width="200
 ">
      <v-img :src="imageFish" aspect-ratio="1.7" contain>
        <v-row align-content="end">
          <v-col>{{fish.commun_name}}</v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "aquaFisheFish",
  props: ["fish"],
  data: () => ({
    url: "http://localhost:80/admin-system/api/image_entity/"
  }),
  computed: {
    imageFish() {
      return `${this.url}${this.fish.file_id}`;
    }
  }
};
</script>

<style>
</style>