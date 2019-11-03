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
  </div>
</template>

<script>
import axios from '../../../axios';
export default {
  name: "AuthentificationConnexion",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    rules: {
      required: val => !!val || "Champ requis",
      email: val => /.+@.+\..+/.test(val) || "L'adresse mail doit être valide"
    },
    connexionInvalide: ""
  }),
  computed: {
  },
  methods: {
    async connexion() {
      await axios({
        method: "POST",
        url: "/authentification",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then(async (response) => {
          console.log(response.data);
          // this.connexionInvalide = err.data;
        }).catch(err => {
          console.log("error", err.data.data);
          // this.connexionInvalide = err.data;
        });
    }
  }
};
</script>

<style>
</style>