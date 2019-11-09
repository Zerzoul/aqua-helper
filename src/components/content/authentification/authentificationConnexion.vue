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
    <bottom-sheet-component v-if="errorConnection" :btnStyle="'error'" :message="errorMessage" :actionBtn="'Terminer'" @event="closeDialog"/>
<bottom-sheet-component v-if="successConnection" :btnStyle="'success'" :message="successMessage" :actionBtn="'Continuer'" @event="redirect"/>
  </div>
</template>

<script>
import axios from '../../../axios';
import BottomSheetComponent from './../../tools/bottomSheetComponent';
export default {
  name: "AuthentificationConnexion",
    components:{
    BottomSheetComponent,
  },
  data: () => ({
    errorConnection: false,
    successConnection: false,
    valid: true,
    email: "",
    password: "",
    rules: {
      required: val => !!val || "Champs requis",
      email: val => /.+@.+\..+/.test(val) || "L'adresse mail doit être valide"
    },
    connexionInvalide: "",
    errorMessage: "Une erreur est survenue. Veuillez réessayer plus tard. Excusez-nous des problèmes occasionnés.",
    successMessage: "Voues êtes connecté. Vous allez être maintenant redirigé vers le blog.",
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
            this.successConnection = true;
          }
        }).catch(err => {
          console.log("error", err.data.data);
          this.dialog = true;
        });
    },
    redirect(){
      const auth = this.$store.getters.isAuthenticated;
      if(auth){
        document.location.href="/";
        this.successConnection = false;
      }
    },
    closeDialog(){
      this.errorConnection = false;
    }
  }
};
</script>

<style>
</style>