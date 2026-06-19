<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { gites } from "../data/gites"

const route = useRoute()

const gite = computed(() =>
  gites.find((g) => g.id === route.params.id)
)

// carousel
const currentImage = ref(0)

function nextImage() {
  if (!gite.value) return
  currentImage.value =
    (currentImage.value + 1) % gite.value.images.length
}

function prevImage() {
  if (!gite.value) return
  currentImage.value =
    (currentImage.value - 1 + gite.value.images.length) %
    gite.value.images.length
}
</script>

<template>
  <div v-if="gite" class="max-w-6xl mx-auto px-6 py-10">

    <!-- =====================
         CAROUSEL IMAGES
    ====================== -->
    <div class="relative rounded-none overflow-hidden shadow-lg">

      <img
        :src="gite.images[currentImage]"
        class="w-full h-[60vh] object-cover"
        :alt="gite.nom"
      />

      <!-- controls -->
      <button
        @click="prevImage"
        class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2"
      >
        ‹
      </button>

      <button
        @click="nextImage"
        class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2"
      >
        ›
      </button>

      <!-- dots -->
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        <span
          v-for="(img, i) in gite.images"
          :key="i"
          class="w-2 h-2 rounded-full"
          :class="i === currentImage ? 'bg-white' : 'bg-white/40'"
        />
      </div>

    </div>

    <!-- =====================
         HEADER
    ====================== -->
    <div class="mt-8">

      <h1 class="text-3xl md:text-4xl font-bold text-slate-800">
        {{ gite.nom }}
      </h1>

      <p class="text-slate-500 mt-2">
        {{ gite.shortDescription }}
      </p>

    </div>

    <!-- =====================
         INFOS
    ====================== -->
    <div class="grid md:grid-cols-3 gap-4 mt-6">

      <div class="bg-white p-4 border">
        👥 {{ gite.maxPersons }} personnes
      </div>

      <div class="bg-white p-4 border">
        🛏 {{ gite.bedrooms }} chambres
      </div>

      <div class="bg-white p-4 border">
        🚿 {{ gite.bathrooms }} salles de bain
      </div>

    </div>

    <!-- =====================
         DESCRIPTION
    ====================== -->
    <div class="mt-10 space-y-6">

      <p class="text-slate-700 leading-relaxed">
        {{ gite.longDescription }}
      </p>

    </div>

    <!-- =====================
         PRIX + CTA
    ====================== -->
    <div class="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div class="text-2xl font-semibold text-slate-800">
        {{ gite.price }}€ / nuit
      </div>

      <a
        :href="gite.airbnb"
        target="_blank"
        class="btn btn-primary"
      >
        Réserver sur Airbnb
      </a>

    </div>

  </div>

  <!-- fallback -->
  <div v-else class="text-center py-20">
    <h1 class="text-xl">Gîte introuvable</h1>
  </div>
</template>