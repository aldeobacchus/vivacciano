<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { Users, BedDouble, ShowerHead, MapPin, Coffee, Car, Mail, Utensils } from "lucide-vue-next"
import HoverCard from "../components/ui/HoverCard.vue"
import GiteCarousel from "../components/GiteCarousel.vue"
import { gites } from "../data/gites"

const route = useRoute()

const gite = computed(() =>
  gites.find((g) => g.id === route.params.id)
)

const showAmenities = ref(false)
</script>

<template>
  <div v-if="gite" class="max-w-6xl mx-auto px-6 py-10">

    <!-- =====================
         CAROUSEL IMAGES
    ====================== -->
    <div class="animate-fade-up">
      <GiteCarousel :images="gite.images" :alt-title="gite.nom" />
    </div>

    <!-- =====================
         HEADER
    ====================== -->
    <div class="mt-8">

      <h1 class="text-3xl md:text-4xl font-bold text-slate-800">
        {{ gite.nom }}
      </h1>

      <p class="mt-4 text-lg md:text-xl text-slate-700 font-medium leading-relaxed bg-orange-50/50 p-4 sm:p-6 rounded-xl border border-orange-100/80 shadow-sm">
        {{ $t('gites_data.' + gite.id + '.longDescription') }}
      </p>

    </div>

    <!-- =====================
         INFOS
    ====================== -->
    <div class="grid md:grid-cols-3 gap-6 mt-8 animate-slide-in-right">

      <HoverCard contentClass="bg-white p-5 border border-slate-50 flex items-center justify-center gap-3">
        <Users class="w-6 h-6 text-slate-400" />
        <span class="font-medium text-slate-700">{{ gite.maxPersons }} {{ $t('gite.persons', gite.maxPersons) }}</span>
      </HoverCard>

      <HoverCard contentClass="bg-white p-5 border border-slate-50 flex items-center justify-center gap-3">
        <BedDouble class="w-6 h-6 text-slate-400" />
        <span class="font-medium text-slate-700">{{ gite.bedrooms }} {{ $t('gite.bedrooms', gite.bedrooms) }}</span>
      </HoverCard>

      <HoverCard contentClass="bg-white p-5 border border-slate-50 flex items-center justify-center gap-3">
        <ShowerHead class="w-6 h-6 text-slate-400" />
        <span class="font-medium text-slate-700">{{ gite.bathrooms }} {{ $t('gite.bathrooms', gite.bathrooms) }}</span>
      </HoverCard>

    </div>

    <!-- =====================
         DESCRIPTION & AILES
    ====================== -->
    <div class="mt-10 space-y-6">



      <!-- SECTIONS AILES (si Gran Gigante) -->
      <div v-if="gite.wings && gite.wings.length" class="mt-8 bg-orange-50/60 border border-orange-100 rounded-2xl p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-slate-800 mb-2">
          {{ $t('gites_data.' + gite.id + '.wingsTitle') }}
        </h3>
        <p class="text-slate-600 text-sm mb-6">
          {{ $t('gites_data.' + gite.id + '.wingsDesc') }}
        </p>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-white p-5 rounded-xl border border-orange-100/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <h4 class="font-bold text-slate-800 text-lg">
                  {{ $t('gites_data.' + gite.id + '.wingGigante') }}
                </h4>
                <span class="px-3 py-1 bg-orange-100 text-[#B05A2F] text-xs font-semibold rounded-full">
                  {{ $t('gites_data.' + gite.id + '.wingGiganteBadge') }}
                </span>
              </div>
              <ul class="space-y-2 text-slate-600 text-sm">
                <li
                  v-for="(feature, idx) in ($tm('gites_data.' + gite.id + '.wingGiganteFeatures') || [])"
                  :key="idx"
                  class="flex items-center gap-2"
                >
                  <span class="text-[#B05A2F] font-semibold text-xs">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <router-link
                :to="`/reservation?gite=${gite.id}&wing=gigante`"
                class="inline-flex items-center gap-1 text-sm font-semibold text-[#B05A2F] hover:text-[#964a25] transition-colors"
              >
                <span>{{ $t('reservation.bookThisWing') }}</span>
                <span aria-hidden="true">&rarr;</span>
              </router-link>
            </div>
          </div>

          <div class="bg-white p-5 rounded-xl border border-orange-100/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <h4 class="font-bold text-slate-800 text-lg">
                  {{ $t('gites_data.' + gite.id + '.wing26') }}
                </h4>
                <span class="px-3 py-1 bg-orange-100 text-[#B05A2F] text-xs font-semibold rounded-full">
                  {{ $t('gites_data.' + gite.id + '.wing26Badge') }}
                </span>
              </div>
              <ul class="space-y-2 text-slate-600 text-sm">
                <li
                  v-for="(feature, idx) in ($tm('gites_data.' + gite.id + '.wing26Features') || [])"
                  :key="idx"
                  class="flex items-center gap-2"
                >
                  <span class="text-[#B05A2F] font-semibold text-xs">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <router-link
                :to="`/reservation?gite=${gite.id}&wing=26`"
                class="inline-flex items-center gap-1 text-sm font-semibold text-[#B05A2F] hover:text-[#964a25] transition-colors"
              >
                <span>{{ $t('reservation.bookThisWing') }}</span>
                <span aria-hidden="true">&rarr;</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-orange-200/60 text-sm text-slate-600 font-medium text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{{ $t('gites_data.' + gite.id + '.wingsBookingNote') }}</span>
          <router-link
            :to="`/reservation?gite=${gite.id}&wing=all`"
            class="text-xs font-semibold text-[#B05A2F] hover:underline"
          >
            {{ $t('reservation.bookEntireHouse') }} &rarr;
          </router-link>
        </div>
      </div>

    </div>

    <!-- ÉQUIPEMENTS -->
    <div class="mt-12">

      <h2 class="text-2xl font-semibold text-slate-800 mb-6">
        {{ $t('gite.equipment') }}
      </h2>


      <div class="relative">

        <!-- LISTE -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 overflow-hidden transition-all duration-500"
          :class="showAmenities ? 'max-h-[2000px]' : 'max-h-48'"
        >

          <HoverCard
            v-for="amenity in gite.amenities"
            :key="amenity"
            contentClass="bg-white border border-slate-100 p-4 flex items-center gap-3"
          >
            <span class="text-[#B05A2F]">✓</span>
            <span class="text-slate-600 font-medium">{{ $t('amenities.' + amenity) }}</span>
          </HoverCard>

          <HoverCard
            v-for="item in gite.extraAmenities || []"
            :key="item"
            contentClass="bg-orange-50 border border-orange-100 p-4 flex items-center gap-3"
          >
            <span class="text-[#B05A2F]">★</span>
            <span class="text-orange-900 font-medium">{{ item }}</span>
          </HoverCard>

          <!-- TERRASSE CARD (inside the grid, spanning full width) -->
          <div v-if="gite.amenities && gite.amenities.includes('terrace')" class="md:col-span-2 lg:col-span-3 bg-white rounded-xl p-6 border border-slate-100 shadow-sm mt-2 relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
            <h3 class="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2 relative z-10">
              La Terrasse
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Chaises longues</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Table (6-10 pers.)</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Parasol</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Auvent</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Plancha électrique</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Mini-four</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Évier extérieur</span>
              </div>
              <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span class="text-[#B05A2F]">✓</span>
                <span class="text-sm font-medium text-slate-700">Vaisselle</span>
              </div>
            </div>
          </div>

        </div>

        <!-- DÉGRADÉ -->
        <div
          v-if="!showAmenities"
          class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FAFAFA] pointer-events-none"
        />
      </div>

      <!-- BOUTON -->
      <div class="mt-6 flex justify-center">
        <button
          @click="showAmenities = !showAmenities"
          class="btn btn-outline cursor-pointer"
        >
          {{ showAmenities ? $t('gite.seeLess') : $t('gite.seeMore') }}
        </button>
      </div>

    </div>

    <!-- =====================
         INFORMATIONS PRATIQUES
    ====================== -->
    <div class="mt-12 bg-negroni-200 rounded-xl p-8 mb-8">
      <p class="uppercase tracking-[0.3em] text-sm text-[#B05A2F] mb-4 font-medium text-center">
        {{ $t('village.practical.title') }}
      </p>
      <h2 class="text-2xl md:text-3xl font-light text-slate-800 text-center mb-8">
        {{ $t('village.practical.title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- Localisation -->
        <a v-if="gite.geolocation" :href="gite.geolocation" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md hover:border-orange-200 transition-all cursor-pointer">
          <MapPin class="w-10 h-10 text-[#B05A2F] mb-4" />
          <p class="text-slate-600 leading-relaxed text-sm mb-4">
            {{ $t('village.practical.location') }}
          </p>
          <span class="mt-auto px-5 py-2.5 bg-[#B05A2F] text-white rounded-full text-sm font-medium hover:bg-[#964a25] transition-colors shadow-sm inline-flex items-center gap-2">
            Voir sur la carte
          </span>
        </a>
        <div v-else class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
          <MapPin class="w-10 h-10 text-[#B05A2F] mb-4" />
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ $t('village.practical.location') }}
          </p>
        </div>

        <!-- Repas -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
          <Utensils class="w-10 h-10 text-[#B05A2F] mb-4" />
          <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.breakfast.title') }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ $t('village.practical.breakfast.desc') }}
          </p>
        </div>

        <!-- Parking -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
          <Car class="w-10 h-10 text-[#B05A2F] mb-4" />
          <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ $t('village.practical.parking.title') }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ $t('village.practical.parking.desc') }}
          </p>
        </div>

      </div>
    </div>

    <!-- =====================
         RESERVATION & CTA
    ====================== -->
    <div class="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-orange-50/50 border border-orange-100 rounded-2xl">

      <div>
        <h3 class="text-xl font-bold text-slate-800">
          {{ $t('gite.book_email') }}
        </h3>
        <p class="text-sm text-slate-600 mt-1">
          Demandez votre séjour directement par formulaire ou réservez via les plateformes.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-2 md:mt-0">
        <router-link
          :to="`/reservation?gite=${gite.id}`"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-full bg-[#B05A2F] hover:bg-[#964a25] shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        >
          <Mail class="w-5 h-5" />
          {{ $t('gite.book_email') }}
        </router-link>

        <a
          :href="gite.airbnb"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-full bg-[#FF5A5F] hover:bg-[#E34A4F] shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.26 5.063-10.745 7.18-14.856l.513-.973C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.677-.605 2.435l-.003.344C4.5 27.434 6.108 29 8.5 29c1.865 0 3.864-1.127 5.733-3.023l.182-.19.102-.112.507-.584.492.56.096.103.189.196C17.65 27.87 19.648 29 21.5 29c2.392 0 4-1.566 4-4.475l-.005-.386c-.046-.774-.21-1.393-.65-2.518l-.29-.72C23.633 18.72 19.55 10.15 17.585 6.273l-.538-1.04C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.22 0 1.654 1.227 3.206 3.149 3.206 3.073 0 4.756-2.51 4.756-4.524 0-1.274-.694-2.122-1.71-2.451l-.226-.063c-.347-.076-.872-.114-1.332-.128l-.337-.02zm-.314 1.996h.226c.414.01.764.043 1.05.08l.17.027.067.017c.504.144.75.52.75.992 0 1.156-1.005 2.509-2.735 2.509-1.042 0-1.636-.783-1.636-1.522 0-.875.586-1.782 1.41-1.992l.142-.03.17-.03.155-.02.23-.03z"/>
          </svg>
          {{ $t('gite.book_airbnb') }}
        </a>
        <a
          :href="gite.booking"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-full bg-[#003580] hover:bg-[#002253] shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <span class="font-serif font-bold text-lg leading-none tracking-tight -mb-0.5">B.</span>
          {{ $t('gite.book_booking') }}
        </a>
      </div>

    </div>

  </div>

  <!-- fallback -->
  <div v-else class="text-center py-20">
    <h1 class="text-xl">{{ $t('gite.notFound') }}</h1>
  </div>
</template>