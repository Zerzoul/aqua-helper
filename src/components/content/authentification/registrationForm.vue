<template>
  <div>
    <h2>Inscription</h2>

    <v-form ref="form" v-model="valid">
      <v-text-field
        label="Nom d'utilisateur"
        outlined
        v-model="pseudo"
        :rules="[rules.required]"
        :error-messages="messageError.pseudoAlreadyUse"
        required
        class="my-2"
      />
      <v-text-field
        label="Email"
        outlined
        v-model="email"
        :rules="[rules.required, rules.email]"
        :error-messages="messageError.emailInvalid"
        type="email"
        required
        class="my-2"
      />
      <v-text-field
        label="Mot de passe"
        outlined
        v-model="password"
        :rules="[rules.required]"
        type="password"
        required
        class="my-2"
      />
      <v-text-field
        label="Confimation Mot de passe"
        outlined
        :error-messages="isTheSamePsw"
        v-model="confirmPassword"
        :rules="[rules.required]"
        type="password"
        required
        class="my-2"
      />
      <v-btn :disabled="!valid" color="success" @click="registration" class="my-2">Envoyer</v-btn>
    </v-form>
    <bottom-sheet-component v-if="hasBeenRegistrated" :message="successMessage" :actionBtn="'terminer'" @event="redirectionAfterRegistrated"/>
  </div>
</template>

<script>
import axios from "../../../axios";
import BottomSheetComponent from './../../tools/bottomSheetComponent';
export default {
  name: "RegistrationForm",
  components:{
    BottomSheetComponent,
  },
  data: () => ({
    dialog: false,
    valid: true,
    hasBeenRegistrated: false,
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
    rules: {
      required: val => !!val || "Champs requis",
      email: val => /.+@.+\..+/.test(val) || "L'adresse mail doit être valide"
    },
    messageError: {
      emailInvalid: "",
      pseudoAlreadyUse: "",
      isTheSamePsw: "Les mots de passe ne sont pas identiques.",
    },
    successMessage: "Votre inscription c'est déroulé avec succés."
  }),
  computed:{
      isTheSamePsw(){
          const errorMessage = this.password !== this.confirmPassword ? this.messageError.isTheSamePsw : "";
          return errorMessage;
      }
  },
  methods: {
    async registration(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        await axios({
          method: "POST",
          url: "/registration",
          data: {
            pseudo: this.pseudo,
            email: this.email,
            password: this.password
          }
        })
          .then(async response => {
            const data = response.data;
            if(data === true){
              this.hasBeenRegistrated = true;
            } else {
              this.messageError.emailInvalid = data.errorEmail;
              this.messageError.pseudoAlreadyUse = data.errorPseudo;
            }
          })
          .catch(err => {
            console.log("error", err.data.data);
          });
      }
      
    },
    redirectionAfterRegistrated(){
      if(this.hasBeenRegistrated){
        document.location.href="/aqua-helper/connexion";
      }
    }
  }
};
</script>

<style>
</style>