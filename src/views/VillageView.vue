<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HoverCard from '../components/ui/HoverCard.vue'

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
    <section class="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center scale-125 will-change-transform"
        :style="{
          backgroundImage: `url('/images/village/acciano-upscale.jpg')`,
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
          filter: `blur(${Math.min(12, 2 + scrollY * 0.015)}px) brightness(0.95)`
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
      <div class="relative text-center max-w-3xl px-6 animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          {{ $t('village.hero.title') }}
        </h1>
        <p class="mt-4 text-lg md:text-xl text-white/90">
          {{ $t('village.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- HISTOIRE & PATRIMOINE -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium">
            {{ $t('village.history.title') }}
          </p>
          <h2 class="text-3xl md:text-5xl font-light text-slate-800 leading-tight">
            Acciano,
          </h2>
          <h2 class="text-3xl md:text-5xl italic font-light text-slate-800 leading-tight mb-8">
            {{ $t('home.village.acciano') }}
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed">
            {{ $t('village.history.desc') }}
          </p>
        </div>
        <div class="relative">
            <img
              src="/images/village/acciano2.jpg"
              alt="Acciano"
              class="w-full h-[400px] object-cover rounded-2xl shadow-xl animate-slide-in-right"
            />
        </div>
      </div>
    </section>

    <!-- COMMENT VENIR -->
    <section class="bg-negroni-200 py-20">
      <div class="max-w-5xl mx-auto px-6">

        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.access.title') }}
        </p>
        <h2 class="text-3xl md:text-4xl font-light text-slate-800 text-center mb-4">
          {{ $t('village.access.airport') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6 mt-12">

          <!-- En voiture -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">🚗</span>
              <div>
                <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.access.car.title') }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ $t('village.access.car.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- En bus -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">🚌</span>
              <div>
                <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.access.bus.title') }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ $t('village.access.bus.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Navette -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">🚐</span>
              <div>
                <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.access.shuttle.title') }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ $t('village.access.shuttle.desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Taxi -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">🚕</span>
              <div>
                <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.access.taxi.title') }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ $t('village.access.taxi.desc') }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- VOTRE ARRIVÉE -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <div class="lg:col-span-3">
          <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium">
            {{ $t('village.welcome.title') }}
          </p>
          <h2 class="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            {{ $t('village.welcome.title') }}
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed">
            {{ $t('village.welcome.desc') }}
          </p>
        </div>
        <div class="lg:col-span-2 flex flex-col gap-4 animate-slide-in-right">
          <HoverCard contentClass="bg-white p-6 border border-slate-50 flex items-center gap-4">
            <span class="text-3xl">🌸</span>
            <p class="text-slate-700 font-medium">{{ $t('village.welcome.flowers') }}</p>
          </HoverCard>
        </div>
      </div>
    </section>

    <!-- INFORMATIONS PRATIQUES -->
    <section class="bg-negroni-200 py-20">
      <div class="max-w-5xl mx-auto px-6">

        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.practical.title') }}
        </p>
        <h2 class="text-3xl md:text-4xl font-light text-slate-800 text-center mb-12">
          {{ $t('village.practical.title') }}
        </h2>

        <div class="grid md:grid-cols-3 gap-6">

          <!-- Localisation -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <span class="text-4xl block mb-4">📍</span>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.location') }}
            </p>
          </HoverCard>

          <!-- Petit-déjeuner -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <span class="text-4xl block mb-4">☕</span>
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.breakfast.title') }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.breakfast.desc') }}
            </p>
          </HoverCard>

          <!-- Parking -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <span class="text-4xl block mb-4">🅿️</span>
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.parking.title') }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.parking.desc') }}
            </p>
          </HoverCard>

        </div>
      </div>
    </section>

    <!-- ACTIVITÉS -->
    <section class="max-w-5xl mx-auto px-6 py-20 text-center">
      <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium">
        {{ $t('village.activities.title') }}
      </p>
      <h2 class="text-3xl md:text-4xl font-light text-slate-800 mb-6">
        {{ $t('village.activities.title') }}
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
        {{ $t('village.activities.desc') }}
      </p>
      <BaseButton to="/contact" variant="primary">
        {{ $t('nav.contact') }}
      </BaseButton>
    </section>

  </div>
</template>