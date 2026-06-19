<template>
  <div>

    <!-- HEADER -->
    <AppHeader />

    <!-- CONTENU DES PAGES -->
    <main>
      <RouterView />
    </main>

    <!-- FOOTER -->
    <footer>
      <div >

        <div>
          <h3>Nos gîtes</h3>
          <p>
            Séjours authentiques au cœur de la nature.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
            <li><RouterLink to="/village" class="hover:text-white">Le village</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            Email : contact@gites.fr <br />
            Téléphone : 06 XX XX XX XX
          </p>
        </div>

      </div>

      <div>
        © {{ new Date().getFullYear() }} - Gîtes du village
      </div>
    </footer>

  </div>
</template>

<script setup>
import { RouterView } from "vue-router"
import AppHeader from "./components/AppHeader.vue"
</script>