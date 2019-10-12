<template>
  <v-app>
    <v-content >
      <aqua-gate/>
    </v-content>
  </v-app>
</template>

<script>
import AquaGate from './components/aquaGate';

export default {
  name: 'App',
  components: {
    AquaGate,
  },
  data: () => ({
    //
  }),
};
</script>
