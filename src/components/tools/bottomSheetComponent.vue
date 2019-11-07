<template>
  <div>
    <v-bottom-sheet v-model="sheet" persistent>
      <v-sheet height="150" class="text-center py-5">
          <v-btn @click="event" color="success" class="mb-2">{{ actionBtn }}</v-btn>
          <div class="subtitle-1">{{ message }}</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  props: ["actionBtn", "message"],
  data: () => ({
    sheet: true
  }),
  methods: {
    event() {
      this.$emit("event");
      this.sheet = false;
    }
  }
};
</script>