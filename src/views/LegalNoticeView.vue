<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Building2, User, FileText, Server, Scale, ExternalLink, ArrowLeft, MapPin } from 'lucide-vue-next'

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
    <!-- HERO HEADER -->
    <section class="relative h-[32vh] min-h-[220px] flex items-center justify-center text-white overflow-hidden bg-slate-900">
      <div
        class="absolute inset-0 bg-cover bg-center scale-110 will-change-transform opacity-30"
        :style="{
          backgroundImage: `url('/images/village/acciano-view.jpeg')`,
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
      
      <div class="relative text-center max-w-3xl px-6 animate-fade-in z-10">
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight">
          Mentions légales
        </h1>
        <p class="mt-3 text-sm md:text-base text-slate-300 max-w-xl mx-auto">
          Informations légales et réglementaires relatives au site Bell'Acciano
        </p>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <!-- Back Link -->
      <div class="mb-8">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#B05A2F] transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>{{ $t('reservation.backHome', 'Retour à l\'accueil') }}</span>
        </RouterLink>
      </div>

      <div class="space-y-8">
        <!-- Société & Éditeur -->
        <div class="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-50 text-[#B05A2F] flex items-center justify-center shrink-0">
              <Building2 class="w-6 h-6" />
            </div>
            <div class="space-y-4 flex-1">
              <div>
                <h2 class="text-xl font-bold text-slate-900">Éditeur du site & Informations sur l'entreprise</h2>
                <p class="text-slate-500 text-sm mt-1">Identification légale de la société éditrice</p>
              </div>

              <div class="grid sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Raison sociale</span>
                  <span class="font-medium text-slate-800">Société JABÈS SARL</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Capital social</span>
                  <span class="font-medium text-slate-800">10 000 €uros</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl sm:col-span-2 flex items-start gap-2.5">
                  <MapPin class="w-4 h-4 text-[#B05A2F] mt-0.5 shrink-0" />
                  <div>
                    <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Siège social</span>
                    <span class="font-medium text-slate-800">1 rue de Châteaudun, 75009 Paris, France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Direction & Immatriculation -->
        <div class="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-50 text-[#B05A2F] flex items-center justify-center shrink-0">
              <FileText class="w-6 h-6" />
            </div>
            <div class="space-y-4 flex-1">
              <div>
                <h2 class="text-xl font-bold text-slate-900">Direction & Immatriculation</h2>
                <p class="text-slate-500 text-sm mt-1">Informations d'enregistrement et statutaire</p>
              </div>

              <div class="grid sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Gérant</span>
                  <span class="font-medium text-slate-800">Jérôme Jabès</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Code APE</span>
                  <span class="font-medium text-slate-800">4777Z</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">RCS</span>
                  <span class="font-medium text-slate-800">Paris B 786 490 938 (immatriculation le 28/05/1984)</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Numéro SIRET</span>
                  <span class="font-medium text-slate-800">786 490 938 00101</span>
                </div>
                <div class="p-3.5 bg-slate-50 rounded-xl sm:col-span-2">
                  <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">N° de TVA Intracommunautaire</span>
                  <span class="font-medium text-slate-800">FR12 786 490 938</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hébergeur -->
        <div class="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-50 text-[#B05A2F] flex items-center justify-center shrink-0">
              <Server class="w-6 h-6" />
            </div>
            <div class="space-y-3 flex-1">
              <div>
                <h2 class="text-xl font-bold text-slate-900">Hébergement du site</h2>
                <p class="text-slate-500 text-sm mt-1">Fournisseur d'hébergement web</p>
              </div>

              <div class="p-4 bg-slate-50 rounded-xl text-sm text-slate-700 leading-relaxed">
                <p>
                  L'hébergeur du Site est la société <strong>Netlify, Inc.</strong>,<br />
                  située au 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.
                </p>
                <div class="mt-2">
                  <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-xs text-[#B05A2F] hover:underline font-medium"
                  >
                    <span>https://www.netlify.com</span>
                    <ExternalLink class="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Résolution en ligne des litiges -->
        <div class="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-50 text-[#B05A2F] flex items-center justify-center shrink-0">
              <Scale class="w-6 h-6" />
            </div>
            <div class="space-y-3 flex-1">
              <div>
                <h2 class="text-xl font-bold text-slate-900">Résolution en ligne des litiges</h2>
                <p class="text-slate-500 text-sm mt-1">Plateforme de règlement en ligne des litiges (RLL)</p>
              </div>

              <p class="text-sm text-slate-700 leading-relaxed">
                La Commission Européenne met à la disposition des consommateurs une plateforme de résolution en ligne des litiges (plateforme de RLL).
              </p>

              <div class="pt-1">
                <a
                  href="http://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm text-[#B05A2F] hover:underline font-medium underline-offset-4"
                >
                  <span>Accéder à la plateforme de RLL (http://ec.europa.eu/consumers/odr/)</span>
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
