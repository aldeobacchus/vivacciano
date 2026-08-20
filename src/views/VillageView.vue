<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HoverCard from '../components/ui/HoverCard.vue'

import { Store, Flame, Wine, Coffee, Ticket, ShoppingBag, Gamepad2, Pizza, PartyPopper, Cherry, Church, Trees, Leaf, Car, Bus, BusFront, CarTaxiFront, Flower2, MapPin, Info, Utensils, Plane, Train, Hammer } from 'lucide-vue-next'

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

const places = [
  { key: 'cantina', icon: Store },
  { key: 'komodo', icon: Wine },
  { key: 'alkhaffe', icon: Coffee },
  { key: 'achillopolis', icon: Ticket },
  { key: 'pizzeria', icon: Pizza }
]

const artisans = [
  { key: 'giuseppe', icon: Hammer }
]

const events = [
  { key: 'kap', icon: PartyPopper },
  { key: 'cerises', icon: Cherry },
  { key: 'patronali', icon: Church },
  { key: 'parc', icon: Trees },
  { key: 'artichaut', icon: Leaf }
]

const villageImages = [
  "/images/village/acciano-1.jpeg",
  "/images/village/acciano-2.jpeg",
  "/images/village/acciano-3.jpeg",
  "/images/village/acciano-4.jpeg",
  "/images/village/acciano-5.jpeg",
  "/images/village/acciano-6.jpeg",
  "/images/village/acciano-7.jpeg",
  "/images/village/acciano-8.jpeg",
  "/images/village/acciano-9.jpeg",
  "/images/village/acciano-10.jpeg",
  "/images/village/acciano-11.jpeg",
  "/images/village/acciano-12.jpeg",
  "/images/village/acciano-13.jpeg",
  "/images/village/acciano-14.jpeg",
  "/images/village/acciano-15.jpeg",
  "/images/village/acciano-picnic.jpeg",
  "/images/village/acciano-street.jpeg",
  "/images/village/acciano-street2.jpeg",
  "/images/village/acciano-street3.jpeg",
  "/images/village/acciano-street4.jpeg",
  "/images/village/acciano-street5.jpeg",
  "/images/village/acciano-streetname.jpeg",
  "/images/village/acciano-view.jpeg",
  "/images/village/acciano3.jpg"
]
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
        <div class="space-y-4 animate-slide-in-right">
          <div class="relative group rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/village/acciano-view.jpeg"
              alt="Acciano"
              class="w-full h-[230px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <!-- OVERLAY CAPTION -->
            <div class="absolute bottom-0 inset-x-0 z-10 p-3 md:p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white backdrop-blur-[2px]">
              <div class="flex items-center gap-2.5">
                <p class="text-sm font-light text-slate-100 drop-shadow-sm">
                  {{ $t('village.history.windowView') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMENT VENIR -->
    <section class="bg-negroni-200 py-20">
      <div class="max-w-5xl mx-auto px-6">

        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.access.title') }}
        </p>
        <h2 class="text-3xl md:text-4xl font-light text-slate-800 text-center mb-12">
          {{ $t('village.access.subtitle') }}
        </h2>

        <div class="space-y-8">

          <!-- 1. EN AVION -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div class="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
              <div class="p-3 bg-orange-50 text-[#B05A2F] rounded-xl shrink-0">
                <Plane class="w-7 h-7" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-800">{{ $t('village.access.plane.title') }}</h3>
                <p class="text-sm text-slate-600 leading-relaxed mt-0.5">{{ $t('village.access.plane.desc') }}</p>
              </div>
            </div>

            <!-- 4 Options depuis l'aéroport -->
            <div class="grid md:grid-cols-2 gap-4">
              <!-- En bus -->
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <Bus class="w-6 h-6 text-[#B05A2F] shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-slate-800 text-sm mb-1">{{ $t('village.access.bus.title') }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('village.access.bus.desc') }}</p>
                </div>
              </div>

              <!-- Location de voiture -->
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <Car class="w-6 h-6 text-[#B05A2F] shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-slate-800 text-sm mb-1">{{ $t('village.access.carRental.title') }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('village.access.carRental.desc') }}</p>
                </div>
              </div>

              <!-- Navette Bellacciano -->
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <BusFront class="w-6 h-6 text-[#B05A2F] shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-slate-800 text-sm mb-1">{{ $t('village.access.shuttle.title') }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('village.access.shuttle.desc') }}</p>
                </div>
              </div>

              <!-- En taxi -->
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                <CarTaxiFront class="w-6 h-6 text-[#B05A2F] shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-slate-800 text-sm mb-1">{{ $t('village.access.taxi.title') }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('village.access.taxi.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. VÉHICULE PERSONNEL & 3. EN TRAIN -->
          <div class="grid md:grid-cols-2 gap-6">

            <!-- Véhicule personnel -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-orange-50 text-[#B05A2F] rounded-xl shrink-0">
                  <Car class="w-7 h-7" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-800 mb-2">{{ $t('village.access.ownCar.title') }}</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">{{ $t('village.access.ownCar.desc') }}</p>
                </div>
              </div>
            </div>

            <!-- En train (déconseillé) -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-amber-50 text-amber-700 rounded-xl shrink-0">
                  <Train class="w-7 h-7" />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <h3 class="text-lg font-bold text-slate-800">{{ $t('village.access.train.title') }}</h3>
                    <span class="px-2.5 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full">
                      {{ $t('village.access.train.badge') }}
                    </span>
                  </div>
                  <p class="text-sm text-slate-600 leading-relaxed">{{ $t('village.access.train.desc') }}</p>
                </div>
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
          <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-6 font-medium">
            {{ $t('village.welcome.title') }}
          </p>
          <p class="text-lg text-slate-600 leading-relaxed">
            {{ $t('village.welcome.desc') }}
          </p>
        </div>
        <div class="lg:col-span-2 flex flex-col gap-4 animate-slide-in-right">
          <HoverCard contentClass="bg-white p-6 border border-slate-50 flex items-center gap-4">
            <Flower2 class="w-8 h-8 text-[#B05A2F]" />
            <p class="text-slate-700 font-medium">{{ $t('village.welcome.flowers') }}</p>
          </HoverCard>
        </div>
      </div>
    </section>

    <!-- INFORMATIONS PRATIQUES -->
    <section class="bg-negroni-200 py-20">
      <div class="max-w-5xl mx-auto px-6">

        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-12 font-medium text-center">
          {{ $t('village.practical.title') }}
        </p>

        <div class="grid md:grid-cols-3 gap-6">

          <!-- Localisation -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <MapPin class="w-10 h-10 text-[#B05A2F] mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.locationTitle') }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.location') }}
            </p>
          </HoverCard>

          <!-- Repas -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <Utensils class="w-10 h-10 text-[#B05A2F] mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.breakfast.title') }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.breakfast.desc') }}
            </p>
          </HoverCard>

          <!-- Parking -->
          <HoverCard contentClass="bg-white/80 backdrop-blur-sm p-6 border border-white text-center">
            <Car class="w-10 h-10 text-[#B05A2F] mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.parking.title') }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm">
              {{ $t('village.practical.parking.desc') }}
            </p>
          </HoverCard>

        </div>
      </div>
    </section>

    <!-- COMMERCES & VIE LOCALE -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.places.title') }}
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <HoverCard v-for="place in places" :key="place.key" contentClass="bg-white p-6 border border-slate-100 shadow-sm h-full flex flex-col gap-3 hover:shadow-md transition-shadow">
            <component :is="place.icon" class="w-8 h-8 text-[#B05A2F]" />
            <h3 class="text-lg font-semibold text-slate-800">{{ $t('village.places.' + place.key + '.title') }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ $t('village.places.' + place.key + '.desc') }}</p>
          </HoverCard>
        </div>
      </div>
    </section>

    <!-- ARTISANS -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.artisans.title') }}
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <HoverCard v-for="artisan in artisans" :key="artisan.key" contentClass="bg-white p-6 border border-slate-100 shadow-sm h-full flex flex-col gap-3 hover:shadow-md transition-shadow">
            <component :is="artisan.icon" class="w-8 h-8 text-[#B05A2F]" />
            <h3 class="text-lg font-semibold text-slate-800">{{ $t('village.artisans.' + artisan.key + '.title') }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ $t('village.artisans.' + artisan.key + '.desc') }}</p>
          </HoverCard>
        </div>
      </div>
    </section>

    <!-- EVENEMENTS -->
    <section class="bg-slate-50 py-20">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
          {{ $t('village.events.title') }}
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <HoverCard v-for="event in events" :key="event.key" contentClass="bg-white p-6 border border-slate-100 shadow-sm h-full flex flex-col gap-3 hover:shadow-md transition-shadow">
            <component :is="event.icon" class="w-8 h-8 text-[#B05A2F]" />
            <h3 class="text-lg font-semibold text-slate-800">{{ $t('village.events.' + event.key + '.title') }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ $t('village.events.' + event.key + '.desc') }}</p>
          </HoverCard>
        </div>
      </div>
    </section>

    <!-- ACTIVITÉS -->
    <section class="max-w-5xl mx-auto px-6 py-20 text-center">
      <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-6 font-medium">
        {{ $t('village.activities.title') }}
      </p>
      <p class="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
        {{ $t('village.activities.desc') }}
      </p>
      <BaseButton to="/contact" variant="primary">
        {{ $t('nav.contact') }}
      </BaseButton>
    </section>

    <!-- GALERIE (EN BAS DE PAGE) -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
      <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
        {{ $t('village.gallery.title') }}
      </p>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-8">
        <div v-for="(img, idx) in villageImages" :key="idx" class="break-inside-avoid">
          <img :src="img" class="w-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" loading="lazy" />
        </div>
      </div>
    </section>

  </div>
</template>