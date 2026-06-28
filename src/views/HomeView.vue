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
              :src="gite.images[0]"
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
              {{ $t('gites_data.' + gite.id + '.shortDescription') }}
            </p>

            <div class="mt-5 flex justify-between items-center">

              <BaseButton
                :to="`/gites/${gite.id}`"
                variant="link"
              >
                {{ $t('home.gites.viewGite') }}
              </BaseButton>

              <BaseButton
                :href="gite.airbnb"
                variant="primary"
                size="sm"
              >
                {{ $t('home.gites.book') }}
              </BaseButton>

            </div>

          </div>

        </article>

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
              class="w-full h-[500px] object-cover shadow-lg"
            />

          </div>

        </div>

      </div>

    </section>

  </div>
</template>