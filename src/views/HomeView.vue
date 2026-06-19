<script setup>
import { gites } from "../data/gites"
</script>

<template>
  <div>

    <!-- HERO -->
    <section class="relative h-[90vh] flex items-center justify-center text-white">

      <!-- IMAGE BACKGROUND -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/village/acciano.jpg');"
      ></div>

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- CONTENT -->
      <div class="relative text-center max-w-3xl px-6 animate-fade-in">

        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Séjournez au cœur de l'Italie
        </h1>

        <p class="mt-4 text-lg md:text-xl text-white/90">
          Découvrez nos gîtes authentiques entre nature, calme et soleil.
        </p>

        <div class="mt-8 flex justify-center gap-4 flex-wrap">

          <RouterLink
            to="#gites"
            class="btn btn-primary"
          >
            Découvrir les gîtes
          </RouterLink>

          <RouterLink
            to="/village"
            class="btn btn-outline-white"
          >
            Le village
          </RouterLink>

        </div>

      </div>
    </section>

    <!-- SECTION GÎTES -->
    <section id="gites" class="max-w-7xl mx-auto px-6 py-20">

      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800">
          Nos gîtes
        </h2>
        <p class="text-slate-500 mt-2">
          Chaque logement a son charme unique
        </p>
      </div>

      <!-- GRID -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        <article
          v-for="(gite, index) in gites"
          :key="gite.id"
          class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300
                 hover:-translate-y-1 animate-fade-up"
          :style="{ animationDelay: index * 100 + 'ms' }"
        >

          <!-- IMAGE -->
          <div class="h-56 overflow-hidden">
            <img
              :src="gite.image"
              :alt="gite.nom"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-5">

            <h3 class="text-xl font-semibold text-slate-800">
              {{ gite.nom }}
            </h3>

            <p class="text-slate-500 mt-2 text-sm">
              {{ gite.description }}
            </p>

            <div class="mt-5 flex justify-between items-center">

              <RouterLink
                :to="`/gites/${gite.id}`"
                class="text-orange-700 font-medium hover:underline"
              >
                Voir le gîte
              </RouterLink>

              <a
                :href="gite.airbnb"
                target="_blank"
                class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Réserver
              </a>

            </div>

          </div>

        </article>

      </div>
    </section>

    <!-- BLOC EXPERIENCE -->
    <section class="bg-stone-100 py-20">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-3xl md:text-4xl font-bold text-slate-800">
          Une expérience authentique
        </h2>

        <p class="mt-4 text-slate-600 leading-relaxed">
          Entre champs de lavande, villages perchés et marchés provençaux,
          profitez d’un séjour paisible dans un cadre naturel exceptionnel.
        </p>

        <div class="mt-10 grid md:grid-cols-3 gap-6">

          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="font-semibold mt-2">Nature</h3>
            <p class="text-sm text-slate-500 mt-1">
              Randonnées, paysages et calme
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="font-semibold mt-2">Soleil</h3>
            <p class="text-sm text-slate-500 mt-1">
              Climat méditerranéen idéal
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="font-semibold mt-2">Authenticité</h3>
            <p class="text-sm text-slate-500 mt-1">
              Gîtes de charme rénovés
            </p>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>