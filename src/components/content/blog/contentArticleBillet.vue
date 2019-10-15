<template>
<div>
        <v-img class="white--text align-end" height="200px" :src="image">
          <v-card-title>{{ billet.title }}</v-card-title>
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
    data: () => ({
    image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  }),

};
</script>