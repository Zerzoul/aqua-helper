<template>
  <v-app-bar class="px-5 accent" dark>
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col cols="2" class="pa-1">
          <img src="./../../assets/logo-aqua-helper.png" />
        </v-col>

        <v-col cols="10" class="d-flex justify-end">
          <v-btn text>
            <router-link tag="li" to="/" class="header-link">Blog</router-link>
          </v-btn>
          <v-btn text>
            <router-link tag="li" to="/aquafish" class="header-link">AquaFish</router-link>
          </v-btn>
          <v-btn text>
            <router-link v-if="!isConnected" tag="li" to="/connexion" class="header-link">Connexion</router-link>
            <span v-else tag="li" @click="logOut()" class="header-link">Deconnexion</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    isConnected() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
      document.location.href = "/connexion";
    }
  }
};
</script>