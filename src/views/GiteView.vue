<script setup>
import { useRoute } from "vue-router";
import { gites } from "../data/gites";

const route = useRoute();

const gite = gites.find(
  (g) => g.id === route.params.id
);
</script>

<template>
  <div v-if="gite">
    <h1>{{ gite.nom }}</h1>

    <img
      :src="gite.image"
      :alt="gite.nom"
    />

    <p>{{ gite.description }}</p>

    <a
      :href="gite.airbnb"
      target="_blank"
      rel="noopener"
      class="btn"
    >
      Réserver sur Airbnb
    </a>
  </div>

  <div v-else>
    <h1>Gîte introuvable</h1>
  </div>
</template>