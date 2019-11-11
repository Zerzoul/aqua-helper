<template>
  <v-app-bar class="px-5 py-3 accent" dark :min-height="80">
    <v-row wrap align="center" justify="center">
      <v-col>
        <router-link tag="div" to="/aqua-helper/" class="header-link">
          <img src="./../../assets/logo-aqua-helper.png" />
        </router-link>
      </v-col>
      <v-menu v-if="!isDesktop">
        <template v-slot:activator="{ on }">
        <v-btn
        text
        icon
          dark
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
        <header-navigation :isDesktop="isDesktop"/>
      </v-menu>
      <header-navigation v-else :isDesktop="isDesktop"/>
    </v-row>
  </v-app-bar>
</template>
<script>
import HeaderNavigation from "./headerNavigation.vue";
export default {
  components: {
    HeaderNavigation
  },
  computed:{
        isDesktop() {
      return this.$vuetify.breakpoint.smAndDown ? false : true;
    }
  }
  
};
</script>