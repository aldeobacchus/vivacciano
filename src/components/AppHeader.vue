<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex justify-between h-16 items-center">

        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-2xl md:text-3xl font-semibold tracking-wide text-orange-500"
          style="font-family: 'Georgia', serif;"
        >
          Viv’acciano
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

            <button class="text-slate-700 hover:text-orange-700 font-medium">
              Nos gîtes
            </button>

            <div
              class="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition"
            >
              <RouterLink
                v-for="gite in gites"
                :key="gite.id"
                :to="`/gites/${gite.id}`"
                class="block px-4 py-2 text-sm hover:bg-orange-50"
              >
                {{ gite.nom }}
              </RouterLink>
            </div>

          </div>

          <RouterLink
            to="/village"
            class="text-slate-700 hover:text-orange-700 font-medium"
          >
            Le village
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-slate-700 hover:text-orange-700 font-medium"
          >
            Nous contacter
          </RouterLink>

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
            Nos gîtes
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
          Le village
        </RouterLink>

        <RouterLink
          to="/contact"
          class="block py-2 text-slate-700"
          @click="closeMenu"
        >
          Nous contacter
        </RouterLink>

      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { gites } from "../data/gites"

const mobileMenu = ref(false)
const openGites = ref(false)

function closeMenu() {
  mobileMenu.value = false
  openGites.value = false
}
</script>