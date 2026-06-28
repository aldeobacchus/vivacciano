<template>
  <div class="min-h-screen flex flex-col bg-stone-50 text-slate-800">

    <!-- HEADER -->
    <AppHeader class="sticky top-0 z-50 bg-white shadow-sm" />

    <!-- CONTENU DES PAGES -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-white mt-12">
      <div class="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">

        <div>
          <h3 class="text-lg font-semibold mb-2" style="font-family: 'Cormorant Garamond', Georgia, serif;">les Case di Jérôme</h3>
          <p class="text-sm text-slate-300">
            {{ $t('contact.tagline') }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('contact.navigation') }}</h3>
          <ul class="space-y-1 text-sm text-slate-300">
            <li><RouterLink to="/" class="hover:text-white">{{ $t('nav.home') }}</RouterLink></li>
            <li><RouterLink to="/village" class="hover:text-white">{{ $t('nav.village') }}</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white">{{ $t('nav.contact') }}</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('contact.title') }}</h3>
          <p class="text-sm text-slate-300">
            {{ $t('contact.emailLabel') }} : {{ $t('contact.emailAddress') }} <br />
            {{ $t('contact.phoneLabel') }} : {{ $t('contact.phone') }}
          </p>
        </div>

      </div>

      <div class="border-t border-slate-700 text-center py-4 text-xs text-slate-400">
                © {{ new Date().getFullYear() }} — les Case di Jérôme
      </div>
    </footer>

  </div>
</template>

<script setup>
import { RouterView } from "vue-router"
import AppHeader from "./components/AppHeader.vue"
</script>