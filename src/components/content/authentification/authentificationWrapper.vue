<template>
  <div>
    <v-row justify="center">
      <v-col md="5" sm="10" class="pa-0">
        <v-card>
          <v-col class="pa-5">
            <authentification-connexion />
            <v-card-actions class="pa-0">
              <router-link tag="button" :to="'/aqua-helper/registration'">
                <v-btn>Créer un compte</v-btn>
              </router-link>
            </v-card-actions>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AuthentificationConnexion from "./authentificationConnexion.vue";
export default {
  name: "AuthentificationWrapper",
  components: {
    AuthentificationConnexion
  },
};
</script>

<style>
</style>