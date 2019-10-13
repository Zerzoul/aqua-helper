<template>
<v-app-bar class="px-5 accent" dark>
<v-toolbar-title>Logo aqua-helper</v-toolbar-title>
<div class="flex-grow-1"></div>
     <v-btn text>
       <router-link to="/" >Blog</router-link>
      </v-btn>
     <v-btn text>
       <router-link to="/aquafish" >AquaFish</router-link>
      </v-btn>
      <v-btn text>
       <router-link to="/connexion" >Connexion</router-link>
      </v-btn>
</v-app-bar>
</template>
<script>
export default {
    
}
</script>