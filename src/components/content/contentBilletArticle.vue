<template>
  <v-card flat dark height="250" min-width="400" class="mx-auto d-flex flex-column justify-space-around">
    <v-img scr="https://www.aquarium-tregastel.com/fileadmin/_processed_/csm_petitefille_dos_55ddefd06a.jpg" height="200px">
      <div class="content-billet-wrapper">
        <v-card-title>{{billet.title}}</v-card-title>
        <v-card-text>
          <div v-html="billetContent" class="content-truncate"></div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text>Lire l'article</v-btn>
        </v-card-actions>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ContentBilletArticle",
  props: ["billet"],
  computed: {
    billetContent() {
      const subStr = this.billet.content.substring(0, 150);
      return subStr + "...";
    }
  }
};
</script>

<style>
.content-billet-wrapper {
  display: block;
  width: 50%;
  height: 100%;
}
.content-truncate {
  height: 60px;
  text-overflow: ellipsis;
}
</style>