<template>
  <v-app-bar class="px-5 accent" dark>
    <v-container>
      <v-layout>
        <v-toolbar-title>Logo aqua-helper</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn text>
          <router-link tag="li" to="/" class="header-link">Blog</router-link>
        </v-btn>
        <v-btn text>
          <router-link tag="li" to="/aquafish" class="header-link">AquaFish</router-link>
        </v-btn>
        <v-btn text>
          <router-link tag="li" to="/connexion" class="header-link">Connexion</router-link>
        </v-btn>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {};
</script>