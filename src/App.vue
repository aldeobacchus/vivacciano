<template>
  <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800">

    <!-- HEADER -->
    <AppHeader />

    <!-- CONTENU DES PAGES -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- FOOTER -->
    <AppFooter />

  </div>
</template>

<script setup>
import { RouterView } from "vue-router"
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
</script>