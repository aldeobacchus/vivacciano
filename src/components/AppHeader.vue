<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex justify-between h-16 items-center">

        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-xl md:text-2xl font-semibold tracking-wide text-[#B05A2F]"
          style="font-family: 'Cormorant Garamond', Georgia, serif;"
        >
          les Case di Jérôme
        </RouterLink>

        <!-- BURGER BUTTON (mobile) -->
        <button
          class="md:hidden p-2 rounded-md text-slate-700"
          @click="mobileMenu = !mobileMenu"
        >
          ☰
        </button>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-8">

          <!-- NOS GÎTES DROPDOWN -->
          <div class="relative group">

            <button class="text-slate-700 hover:text-[#B05A2F] font-medium flex items-center gap-1 cursor-pointer">
              {{ $t('nav.gites') }}
              <span class="text-xs transition-transform group-hover:rotate-180">▼</span>
            </button>

            <div
              class="absolute left-0 mt-2 w-56 bg-white border border-slate-100 rounded-lg shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200 z-50 py-1"
            >
              <RouterLink
                v-for="gite in gites"
                :key="gite.id"
                :to="`/gites/${gite.id}`"
                class="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 transition cursor-pointer"
              >
                {{ gite.nom }}
              </RouterLink>
            </div>

          </div>

          <RouterLink
            to="/village"
            class="text-slate-700 hover:text-[#B05A2F] font-medium"
          >
            {{ $t('nav.village') }}
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-slate-700 hover:text-[#B05A2F] font-medium"
          >
            {{ $t('nav.contact') }}
          </RouterLink>

          <!-- SELECTEUR DE LANGUE (desktop) -->
          <div class="relative group">
            <button class="text-slate-700 hover:text-[#B05A2F] font-medium flex items-center gap-1 uppercase cursor-pointer">
              🌐 {{ locale }}
              <span class="text-xs transition-transform group-hover:rotate-180">▼</span>
            </button>
            <div
              class="absolute right-0 mt-2 w-28 bg-white border border-slate-100 rounded-lg shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200 z-50 py-1"
            >
              <button
                @click="changeLocale('fr')"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600': locale === 'fr' }"
              >
                Français
              </button>
              <button
                @click="changeLocale('en')"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600': locale === 'en' }"
              >
                English
              </button>
              <button
                @click="changeLocale('it')"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600': locale === 'it' }"
              >
                Italiano
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- MOBILE MENU -->
      <div
        v-if="mobileMenu"
        class="md:hidden pb-4 space-y-2"
      >

        <!-- NOS GÎTES (mobile dropdown) -->
        <div>
          <button
            class="w-full text-left py-2 font-medium text-slate-700"
            @click="openGites = !openGites"
          >
            {{ $t('nav.gites') }}
          </button>

          <div v-if="openGites" class="pl-4 space-y-1">
            <RouterLink
              v-for="gite in gites"
              :key="gite.id"
              :to="`/gites/${gite.id}`"
              class="block py-1 text-sm text-slate-600"
              @click="closeMenu"
            >
              {{ gite.nom }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/village"
          class="block py-2 text-slate-700"
          @click="closeMenu"
        >
          {{ $t('nav.village') }}
        </RouterLink>

        <RouterLink
          to="/contact"
          class="block py-2 text-slate-700"
          @click="closeMenu"
        >
          {{ $t('nav.contact') }}
        </RouterLink>

        <!-- SELECTEUR DE LANGUE (mobile) -->
        <div class="pt-4 border-t border-slate-200 mt-2 flex gap-3 justify-start items-center">
          <span class="text-sm text-slate-500 pl-1">🌐</span>
          <button
            @click="changeLocale('fr'); closeMenu()"
            class="px-3 py-1 rounded text-sm transition cursor-pointer"
            :class="locale === 'fr' ? 'bg-orange-500 text-white font-medium' : 'bg-slate-100 text-slate-700'"
          >
            FR
          </button>
          <button
            @click="changeLocale('en'); closeMenu()"
            class="px-3 py-1 rounded text-sm transition cursor-pointer"
            :class="locale === 'en' ? 'bg-orange-500 text-white font-medium' : 'bg-slate-100 text-slate-700'"
          >
            EN
          </button>
          <button
            @click="changeLocale('it'); closeMenu()"
            class="px-3 py-1 rounded text-sm transition cursor-pointer"
            :class="locale === 'it' ? 'bg-orange-500 text-white font-medium' : 'bg-slate-100 text-slate-700'"
          >
            IT
          </button>
        </div>

      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n"
import { gites } from "../data/gites"

const { locale } = useI18n()

const mobileMenu = ref(false)
const openGites = ref(false)

function changeLocale(lang) {
  locale.value = lang
  localStorage.setItem("locale", lang)
}

function closeMenu() {
  mobileMenu.value = false
  openGites.value = false
}
</script>