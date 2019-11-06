<template>
  <div>
    <h2>Connection</h2>

    <v-form ref="form">
      <v-text-field
        label="Email"
        outlined
        v-model="email"
        :rules="[rules.required, rules.email]"
        :error-messages="connexionInvalide"
        required
        class="my-2"
      />
      <v-text-field
        label="Mot de passe"
        outlined
        :error-messages="connexionInvalide"
        v-model="password"
        :rules="[rules.required]"
        type="password"
        required
        class="my-2"
      />
      <v-btn :disabled="!valid" color="success" @click="connexion" class="my-2">connection</v-btn>
    </v-form>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Impossible de vous connecter.
        </v-card-title>

        <v-card-text>
          Une erreur est survenue.
          Veuillez réessayer plus tard.
          Excusez-nous des désagréments.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Réessayer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from '../../../axios';
export default {
  name: "AuthentificationConnexion",
  data: () => ({
    dialog: false,
    valid: true,
    email: "",
    password: "",
    rules: {
      required: val => !!val || "Champ requis",
      email: val => /.+@.+\..+/.test(val) || "L'adresse mail doit être valide"
    },
    connexionInvalide: ""
  }),
  methods: {
    async connexion(e) {
      e.preventDefault();
      await axios({
        method: "POST",
        url: "/authentification",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then(async (response) => {
          if(response.data.error){
            this.connexionInvalide = response.data.error;
          } else {
            await this.$store.dispatch("setSessionStorage", response.data.pseudo);
            this.redirect();
          }
        }).catch(err => {
          console.log("error", err.data.data);
          this.dialog = true;
          // this.connexionInvalide = err.data;
        });
    },
    redirect(){
      const auth = this.$store.getters.isAuthenticated;
      if(auth){
        this.$router.push({ name: 'profile',  redirect: '/profile'});
      }
    }
  }
};
</script>

<style>
</style>