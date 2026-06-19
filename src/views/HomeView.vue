<script setup>
import { gites } from "../data/gites";
</script>

<template>
  <section class="hero">
    <h1>Bienvenue dans nos gîtes</h1>
    <p>Découvrez nos hébergements au cœur de la région.</p>
  </section>

  <section>
    <h2>Nos gîtes</h2>

    <div class="gites-grid">
      <article
        v-for="gite in gites"
        :key="gite.id"
      >
        <img
          :src="gite.image"
          :alt="gite.nom"
        />

        <h3>{{ gite.nom }}</h3>

        <p>{{ gite.description }}</p>

        <RouterLink :to="`/gites/${gite.id}`">
          Voir le gîte
        </RouterLink>
      </article>
    </div>
  </section>
</template>