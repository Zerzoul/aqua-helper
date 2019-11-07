<template>
  <div>
    <v-row justify="center">
      <v-col md="5" sm="10" class="pa-0">
        <v-card>
          <v-col class="py-5">
            <registration-form />
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RegistrationForm from "./registrationForm.vue";
export default {
  name: "RegistrationWrapper",
  components: {
    RegistrationForm
  },
};
</script>

<style>
</style>