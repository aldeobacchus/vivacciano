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
    <section class="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center scale-125 will-change-transform"
        :style="{
          backgroundImage: `url('/images/village/acciano-upscale.jpg')`,
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
          filter: `blur(${Math.min(12, 2 + scrollY * 0.015)}px) brightness(0.95)`
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      <div class="relative text-center max-w-3xl px-6 animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          {{ $t('contact.title') }}
        </h1>
        <p class="mt-4 text-lg md:text-xl text-white/90">
          {{ $t('contact.subtitle') }}
        </p>
      </div>
    </section>

    <!-- COORDONNÉES -->
    <section class="max-w-4xl mx-auto px-6 py-20">

      <div class="grid md:grid-cols-2 gap-8">

        <!-- CARTE TÉLÉPHONES (Italie & France) -->
        <HoverCard contentClass="bg-white p-8 border border-slate-50 flex flex-col items-center text-center gap-6">
          <span class="text-4xl">📞</span>
          
          <div class="space-y-4">
            <div>
              <h2 class="text-xl text-slate-800">{{ $t('contact.phoneLabel') }}</h2>
              <a
                :href="'tel:' + $t('contact.phone').replace(/\s/g, '')"
                class="text-xl text-[#B05A2F] font-medium hover:underline underline-offset-4 transition"
              >
                {{ $t('contact.phone') }}
              </a>
            </div>

            <div>
              <h2 class="text-xl text-slate-800">{{ $t('contact.emergencyLabel') }}</h2>
              <a
                :href="'tel:' + $t('contact.emergency').replace(/\s/g, '')"
                class="text-xl text-[#B05A2F] font-medium hover:underline underline-offset-4 transition"
              >
                {{ $t('contact.emergency') }}
              </a>
            </div>
          </div>
        </HoverCard>

        <!-- CARTE EMAIL -->
        <HoverCard contentClass="bg-white p-8 border border-slate-50 flex flex-col items-center text-center gap-6">
          <span class="text-4xl">✉️</span>
          <h2 class="text-xl font-semibold text-slate-800">{{ $t('contact.emailLabel') }}</h2>
          <a
            :href="'mailto:' + $t('contact.emailAddress')"
            class="text-xl text-[#B05A2F] font-medium hover:underline underline-offset-4 transition"
          >
            {{ $t('contact.emailAddress') }}
          </a>
          <BaseButton
            :href="'mailto:' + $t('contact.emailAddress') + '?subject=' + encodeURIComponent($t('contact.emailSubject'))"
            variant="primary"
          >
            {{ $t('contact.sendEmail') }}
          </BaseButton>
        </HoverCard>

      </div>

    </section>

    <!-- SECTION ACCÈS RAPIDE -->
    <section class="bg-negroni-200 py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-light text-slate-800 mb-4">
          {{ $t('village.access.title') }}
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed mb-8">
          {{ $t('village.access.airport') }}
        </p>
        <BaseButton to="/village" variant="primary">
          {{ $t('home.village.discover') }}
        </BaseButton>
      </div>
    </section>

  </div>
</template>