<template>
  <footer class="bg-slate-900 text-white mt-12 relative overflow-hidden">
    <!-- Motif décoratif subtil -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#B05A2F] rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B05A2F] rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16 relative z-10 grid gap-12 md:grid-cols-3">
      <!-- Marque -->
      <div class="space-y-4">
        <h3 class="text-2xl font-bold" style="font-family: 'Playfair Display', Georgia, serif;">
          les Case di Jérôme
        </h3>
        <p class="text-sm text-slate-300 leading-relaxed max-w-sm">
          {{ $t('contact.tagline') }}
        </p>
      </div>

      <!-- Navigation -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold tracking-wide uppercase text-slate-400 text-sm">
          {{ $t('contact.navigation') }}
        </h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li>
            <RouterLink to="/" class="hover:text-white transition-colors duration-200 flex items-center gap-2">
              <span class="text-[#B05A2F]">›</span> {{ $t('nav.home') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/village" class="hover:text-white transition-colors duration-200 flex items-center gap-2">
              <span class="text-[#B05A2F]">›</span> {{ $t('nav.village') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-white transition-colors duration-200 flex items-center gap-2">
              <span class="text-[#B05A2F]">›</span> {{ $t('nav.contact') }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold tracking-wide uppercase text-slate-400 text-sm">
          {{ $t('contact.title') }}
        </h3>
        <div class="space-y-2 text-sm text-slate-300">
          <p class="flex items-start gap-3">
            <span class="text-[#B05A2F] mt-0.5">✉</span>
            <span>
              <span class="block text-xs text-slate-500 uppercase">{{ $t('contact.emailLabel') }}</span>
              <a :href="`mailto:${$t('contact.emailAddress')}`" class="hover:text-white transition-colors">
                {{ $t('contact.emailAddress') }}
              </a>
            </span>
          </p>
          <p class="flex items-start gap-3">
            <span class="text-[#B05A2F] mt-0.5">☏</span>
            <span>
              <span class="block text-xs text-slate-500 uppercase">{{ $t('contact.phoneLabel') }}</span>
              <a :href="`tel:${$t('contact.phone')}`" class="hover:text-white transition-colors">
                {{ $t('contact.phone') }}
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-slate-800 relative z-10">
      <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {{ new Date().getFullYear() }} — les Case di Jérôme. {{ $t('footer.allRightsReserved', 'Tous droits réservés.') }}</p>
        <p class="mt-2 md:mt-0">
          Conçu avec <span class="text-[#B05A2F]">♥</span> en Italie
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
