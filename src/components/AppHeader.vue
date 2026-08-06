<template>
  <header class="glass-effect sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex justify-between h-16 items-center">

        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-xl md:text-2xl font-bold tracking-wide text-[#B05A2F] hover:opacity-80 transition-opacity"
          style="font-family: 'Playfair Display', Georgia, serif;"
        >
          Bell'Acciano
        </RouterLink>

        <!-- BURGER BUTTON (mobile) -->
        <button
          class="md:hidden p-2 rounded-md text-slate-700"
          @click="mobileMenu = !mobileMenu"
        >
          <Menu class="w-6 h-6" />
        </button>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-8">

          <!-- NOS MAISONS DROPDOWN -->
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
            <button class="text-slate-700 hover:text-[#B05A2F] font-medium flex items-center gap-1.5 uppercase cursor-pointer py-1 px-2 rounded-md hover:bg-slate-50 transition">
              <span class="text-base">{{ locale === 'fr' ? '🇫🇷' : locale === 'en' ? '🇬🇧' : '🇮🇹' }}</span>
              <span class="text-sm font-semibold">{{ locale }}</span>
              <span class="text-[10px] text-slate-400 transition-transform group-hover:rotate-180">▼</span>
            </button>
            <div
              class="absolute right-0 mt-1 w-36 bg-white border border-slate-100 rounded-xl shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200 z-50 py-1.5 overflow-hidden"
            >
              <button
                @click="changeLocale('fr')"
                class="flex items-center gap-2.5 w-full text-left px-3.5 py-2 text-sm hover:bg-orange-50/80 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600 bg-orange-50/50': locale === 'fr' }"
              >
                <span class="text-base">🇫🇷</span>
                <span>Français</span>
              </button>
              <button
                @click="changeLocale('en')"
                class="flex items-center gap-2.5 w-full text-left px-3.5 py-2 text-sm hover:bg-orange-50/80 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600 bg-orange-50/50': locale === 'en' }"
              >
                <span class="text-base">🇬🇧</span>
                <span>English</span>
              </button>
              <button
                @click="changeLocale('it')"
                class="flex items-center gap-2.5 w-full text-left px-3.5 py-2 text-sm hover:bg-orange-50/80 text-slate-700 transition cursor-pointer"
                :class="{ 'font-semibold text-orange-600 bg-orange-50/50': locale === 'it' }"
              >
                <span class="text-base">🇮🇹</span>
                <span>Italiano</span>
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

        <!-- NOS MAISONS (mobile dropdown) -->
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
        <div class="pt-4 border-t border-slate-200 mt-2 flex gap-2 justify-start items-center">
          <span class="text-sm text-slate-500 pl-1 mr-1"><Globe class="w-4 h-4" /></span>
          <button
            @click="changeLocale('fr'); closeMenu()"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition cursor-pointer border"
            :class="locale === 'fr' ? 'bg-orange-500 text-white font-medium border-orange-500 shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100'"
          >
            <span>🇫🇷</span>
            <span>FR</span>
          </button>
          <button
            @click="changeLocale('en'); closeMenu()"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition cursor-pointer border"
            :class="locale === 'en' ? 'bg-orange-500 text-white font-medium border-orange-500 shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100'"
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
          <button
            @click="changeLocale('it'); closeMenu()"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition cursor-pointer border"
            :class="locale === 'it' ? 'bg-orange-500 text-white font-medium border-orange-500 shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100'"
          >
            <span>🇮🇹</span>
            <span>IT</span>
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
import { Globe, Menu } from "lucide-vue-next"
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