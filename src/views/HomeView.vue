<script setup>
import { gites } from "../data/gites"
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
    ticking = true
  }
}

import HoverCard from '../components/ui/HoverCard.vue'

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>

    <!-- HERO -->
    <section class="relative h-[100dvh] flex items-center justify-center text-white overflow-hidden">

      <!-- IMAGE BACKGROUND -->
      <div
        class="absolute inset-0 bg-cover bg-center scale-125 will-change-transform"
        :style="{
          backgroundImage: `url('/images/village/acciano-upscale.jpg')`,
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
          filter: `blur(${Math.min(12, 0.5 + scrollY * 0.015)}px) brightness(0.95)`
        }"
      ></div>

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>

      <!-- CONTENT -->
      <div class="relative text-center max-w-3xl px-6 animate-fade-in">

        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          {{ $t('home.hero.title') }}
        </h1>

        <p class="mt-4 text-lg md:text-xl text-white/90">
          {{ $t('home.hero.subtitle') }}
        </p>

        <div class="mt-8 flex justify-center gap-4 flex-wrap">

          <BaseButton
            to="#gites"
            variant="primary"          >
            {{ $t('home.discover') }}
          </BaseButton>

          <BaseButton
            to="/village"
            variant="outline-white"
          >
            {{ $t('nav.village') }}
          </BaseButton>

        </div>

      </div>
    </section>

    <!-- SECTION GÎTES -->
    <section id="gites" class="max-w-7xl mx-auto px-6 py-20">

      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800">
          {{ $t('home.gites.title') }}
        </h2>
        <p class="text-slate-500 mt-2">
          {{ $t('home.gites.subtitle') }}
        </p>
      </div>

      <!-- GRID -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        <HoverCard
          as="article"
          v-for="(gite, index) in gites"
          :key="gite.id"
          class="animate-fade-up"
          :style="{ animationDelay: index * 100 + 'ms' }"
        >

          <!-- IMAGE -->
          <router-link :to="`/gites/${gite.id}`" class="block h-56 overflow-hidden">
            <img
              :src="gite.images[0]"
              :alt="gite.nom"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </router-link>

          <!-- CONTENT -->
          <div class="p-5 bg-white">

            <h3 class="text-xl font-semibold text-slate-800">
              {{ gite.nom }}
            </h3>

            <p class="text-slate-500 mt-2 text-sm">
              {{ $t('gites_data.' + gite.id + '.shortDescription') }}
            </p>

            <div class="mt-5 flex justify-center items-center">

              <BaseButton
                :to="`/gites/${gite.id}`"
                variant="link"
                class="relative z-50"
              >
                {{ $t('home.gites.viewGite') }}
              </BaseButton>

            </div>

          </div>

        </HoverCard>

      </div>
    </section>

    <!-- LE VILLAGE -->
    <section class="py-24 bg-negroni-200">

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- TEXTE -->
          <div>

            <p class="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
              {{ $t('home.village.title') }}
            </p>

            <h2 class="text-4xl md:text-6xl font-light text-slate-800 leading-tight">
              Acciano,
            </h2>
            <h2 class="text-4xl md:text-6xl italic font-light text-slate-800 leading-tight">
              {{ $t('home.village.acciano') }}
            </h2>
            

            <p class="mt-8 text-lg text-slate-600 leading-relaxed">
              {{ $t('home.village.desc1') }}
            </p>

            <p class="mt-4 text-lg text-slate-600 leading-relaxed">
              {{ $t('home.village.desc2') }}
            </p>

            <div class="mt-10">
              <BaseButton
                to="/village"
                variant="primary"
              >
                {{ $t('home.village.discover') }}
              </BaseButton>
            </div>

          </div>

          <!-- IMAGE -->
          <div class="relative">

            <img
              src="/images/village/acciano2.jpg"
              alt="Village d'Acciano"
              class="w-full h-[500px] object-cover rounded-2xl shadow-xl animate-slide-in-right"
            />

          </div>

        </div>

      </div>

    </section>

  </div>
</template>