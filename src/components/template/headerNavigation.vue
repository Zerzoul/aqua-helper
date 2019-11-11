<template>
 <v-col :class="[{'d-flex flex-wrap justify-end' : isDesktop}, 'accent']">
    <router-link tag="li" to="/aqua-helper/" class="header-link">
      <v-btn text class="white--text">Blog</v-btn>
    </router-link>

    <router-link tag="li" to="/aqua-helper/aquafish" class="header-link">
      <v-btn text class="white--text">AquaFish</v-btn>
    </router-link>

    <router-link v-if="!isConnected" tag="li" to="/aqua-helper/connexion" class="header-link">
      <v-btn text class="white--text">Connexion</v-btn>
    </router-link>
    <span v-else tag="li" @click="logOut()" class="header-link">
      <v-btn text class="white--text">Deconnexion</v-btn>
    </span>
  </v-col>
</template>
<script>
export default {
  props:['isDesktop'],
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
      document.location.href = "/aqua-helper/connexion";
    }
  },
  computed: {
    isConnected() {
      return this.$store.getters.isAuthenticated;
    },

  }
};
</script>
