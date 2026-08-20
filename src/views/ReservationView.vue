<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Mail, Calendar, Users, Phone, User, Home, CheckCircle2, AlertCircle, Send, ArrowLeft, Layers } from 'lucide-vue-next'
import { gites } from '../data/gites'

const route = useRoute()
const { t } = useI18n()

const form = ref({
  giteId: '',
  wing: 'all',
  name: '',
  email: '',
  phone: '',
  arrival: '',
  departure: '',
  guests: '2',
  message: ''
})

const status = ref('idle') // 'idle' | 'submitting' | 'success' | 'error'
const errorMessage = ref('')

const selectedGiteObject = computed(() => {
  return gites.find(g => g.id === form.value.giteId) || null
})

const hasWings = computed(() => {
  return !!(selectedGiteObject.value && selectedGiteObject.value.wings && selectedGiteObject.value.wings.length)
})

const maxGuests = computed(() => {
  if (selectedGiteObject.value?.id === 'gg') {
    if (form.value.wing === 'gigante') return 2
    if (form.value.wing === '26') return 6
    return 6
  }
  return selectedGiteObject.value?.maxPersons || 6
})

watch(() => form.value.wing, () => {
  if (Number(form.value.guests) > maxGuests.value) {
    form.value.guests = String(maxGuests.value)
  }
})

watch(() => form.value.giteId, (newGiteId) => {
  if (newGiteId !== 'gg') {
    form.value.wing = 'all'
  }
  if (Number(form.value.guests) > maxGuests.value) {
    form.value.guests = String(maxGuests.value)
  }
})

function initFromRoute() {
  const queryGite = route.query.gite
  const queryWing = route.query.wing
  if (queryGite && gites.some(g => g.id === queryGite)) {
    form.value.giteId = queryGite
  } else if (gites.length > 0) {
    form.value.giteId = gites[0].id
  }
  if (queryWing && ['all', 'gigante', '26'].includes(queryWing)) {
    form.value.wing = queryWing
  }
}

onMounted(() => {
  initFromRoute()
})

watch(() => route.query, () => {
  initFromRoute()
})

const selectedWingLabel = computed(() => {
  if (!selectedGiteObject.value || !hasWings.value) return ''
  if (form.value.wing === 'gigante') return t('reservation.wings.giganteTitle') + ' (2 couchages)'
  if (form.value.wing === '26') return t('reservation.wings.wing26Title') + ' (4-6 couchages)'
  return t('reservation.wings.allTitle') + ' (6 couchages)'
})

const targetEmail = '0f9941f3392a314408f215d10290be65'

async function handleSubmit() {
  status.value = 'submitting'
  errorMessage.value = 'An error occurred during the reservation'

  const giteName = selectedGiteObject.value ? selectedGiteObject.value.nom : 'Non spécifié'
  const formulaLabel = selectedWingLabel.value

  const payload = {
    _subject: `[Vivacciano] Nouvelle réservation - ${giteName}${hasWings.value ? ` (${formulaLabel})` : ''} (${form.value.name})`,
    _replyto: form.value.email,
    _captcha: 'false',
    _template: 'table',
    'Maison sélectionnée': giteName,
    ...(hasWings.value ? { 'Formule / Aile': formulaLabel } : {}),
    'Nom complet': form.value.name,
    'Email de contact': form.value.email,
    'Téléphone': form.value.phone || 'Non renseigné',
    'Date d\'arrivée': form.value.arrival,
    'Date de départ': form.value.departure,
    'Nombre de personnes': form.value.guests,
    'Message': form.value.message || 'Aucun message particulier'
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      status.value = 'success'
    } else {
      throw new Error('Erreur lors de l\'envoi du formulaire.')
    }
  } catch (err) {
    console.error('Erreur réservation:', err)
    // Fallback attempt with FormData
    try {
      const formData = new FormData()
      Object.keys(payload).forEach(key => formData.append(key, payload[key]))
      const fbResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
      if (fbResponse.ok) {
        status.value = 'success'
        return
      }
    } catch (e) {
      // Ignore
    }
    status.value = 'error'
    errorMessage.value = 'Une erreur est survenue lors de l\'envoi. Veuillez vérifier votre connexion ou réessayer.'
  }
}

function resetForm() {
  status.value = 'idle'
  form.value.message = ''
}
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">

      <!-- RETOUR -->
      <div class="mb-6">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#B05A2F] transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          {{ $t('reservation.backHome') }}
        </router-link>
      </div>

      <!-- HEADER -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-[#B05A2F] mb-4">
          <Mail class="w-6 h-6" />
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
          {{ $t('reservation.title') }}
        </h1>
        <p class="mt-3 text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
          {{ $t('reservation.subtitle') }}
        </p>
      </div>

      <!-- CARTE SUCCÈS -->
      <div v-if="status === 'success'" class="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm text-center animate-fade-up">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 class="w-10 h-10" />
        </div>
        <h2 class="text-2xl font-bold text-slate-800 mb-3">
          {{ $t('reservation.successTitle') }}
        </h2>
        <p class="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
          {{ $t('reservation.successMessage') }}
        </p>

        <!-- RÉCAPITULATIF DE LA DEMANDE -->
        <div v-if="selectedGiteObject" class="bg-slate-50 rounded-xl p-5 mb-8 text-left border border-slate-100 max-w-lg mx-auto">
          <h3 class="font-semibold text-slate-800 text-sm uppercase tracking-wider mb-3 text-slate-500">
            {{ $t('reservation.summaryTitle') }}
          </h3>
          <div class="space-y-2 text-sm text-slate-700">
            <div class="flex justify-between">
              <span class="text-slate-500">{{ $t('reservation.summaryHouse') }} :</span>
              <span class="font-medium text-slate-900">{{ selectedGiteObject.nom }}</span>
            </div>
            <div v-if="hasWings" class="flex justify-between">
              <span class="text-slate-500">{{ $t('reservation.summaryOption') }} :</span>
              <span class="font-medium text-slate-900">{{ selectedWingLabel }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">{{ $t('reservation.summaryName') }} :</span>
              <span class="font-medium text-slate-900">{{ form.name }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">{{ $t('reservation.summaryDates') }} :</span>
              <span class="font-medium text-slate-900">Du {{ form.arrival }} au {{ form.departure }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">{{ $t('reservation.summaryGuests') }} :</span>
              <span class="font-medium text-slate-900">{{ form.guests }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton @click="resetForm" variant="outline">
            {{ $t('reservation.sendNew') }}
          </BaseButton>
          <BaseButton to="/" variant="primary">
            {{ $t('reservation.backHome') }}
          </BaseButton>
        </div>
      </div>

      <!-- FORMULAIRE -->
      <div v-else class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-fade-up">

        <!-- BANNIÈRE ERREUR -->
        <div v-if="status === 'error'" class="bg-red-50 border-b border-red-100 p-4 flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle class="w-5 h-5 shrink-0 text-red-500" />
          <span>{{ errorMessage || $t('reservation.errorMessage') }}</span>
        </div>

        <form @submit.prevent="handleSubmit" class="p-6 sm:p-10 space-y-6">

          <!-- SÉLECTION DU GÎTE -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Home class="w-4 h-4 text-[#B05A2F]" />
              {{ $t('reservation.selectGite') }}
            </label>
            <select
              v-model="form.giteId"
              required
              class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
            >
              <option v-for="g in gites" :key="g.id" :value="g.id">
                {{ g.nom }}
              </option>
            </select>
          </div>

          <!-- SÉLECTION DE L'AILE (Si Gran Gigante) -->
          <div v-if="hasWings" class="p-5 bg-orange-50/50 rounded-2xl border border-orange-100/90 space-y-3 animate-fade-up">
            <label class="block text-sm font-semibold text-slate-800 flex items-center gap-2">
              <Layers class="w-4 h-4 text-[#B05A2F]" />
              {{ $t('reservation.selectWing') }}
            </label>
            <div class="grid sm:grid-cols-3 gap-3">
              <!-- Option Totalité -->
              <button
                type="button"
                @click="form.wing = 'all'"
                class="p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between"
                :class="form.wing === 'all' ? 'bg-white border-[#B05A2F] ring-2 ring-[#B05A2F]/20 shadow-sm' : 'bg-white/70 border-slate-200/80 hover:border-orange-200 hover:bg-white'"
              >
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-sm text-slate-800">{{ $t('reservation.wings.allTitle') }}</span>
                    <span v-if="form.wing === 'all'" class="w-2.5 h-2.5 rounded-full bg-[#B05A2F]"></span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('reservation.wings.allDesc') }}</p>
                </div>
                <span class="mt-3 inline-block text-[11px] font-semibold text-[#B05A2F] bg-orange-100/90 px-2.5 py-1 rounded-full self-start">
                  {{ $t('reservation.wings.allBadge') }}
                </span>
              </button>

              <!-- Option Aile Gigante -->
              <button
                type="button"
                @click="form.wing = 'gigante'"
                class="p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between"
                :class="form.wing === 'gigante' ? 'bg-white border-[#B05A2F] ring-2 ring-[#B05A2F]/20 shadow-sm' : 'bg-white/70 border-slate-200/80 hover:border-orange-200 hover:bg-white'"
              >
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-sm text-slate-800">{{ $t('reservation.wings.giganteTitle') }}</span>
                    <span v-if="form.wing === 'gigante'" class="w-2.5 h-2.5 rounded-full bg-[#B05A2F]"></span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('reservation.wings.giganteDesc') }}</p>
                </div>
                <span class="mt-3 inline-block text-[11px] font-semibold text-[#B05A2F] bg-orange-100/90 px-2.5 py-1 rounded-full self-start">
                  {{ $t('reservation.wings.giganteBadge') }}
                </span>
              </button>

              <!-- Option Aile 26 -->
              <button
                type="button"
                @click="form.wing = '26'"
                class="p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between"
                :class="form.wing === '26' ? 'bg-white border-[#B05A2F] ring-2 ring-[#B05A2F]/20 shadow-sm' : 'bg-white/70 border-slate-200/80 hover:border-orange-200 hover:bg-white'"
              >
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-sm text-slate-800">{{ $t('reservation.wings.wing26Title') }}</span>
                    <span v-if="form.wing === '26'" class="w-2.5 h-2.5 rounded-full bg-[#B05A2F]"></span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ $t('reservation.wings.wing26Desc') }}</p>
                </div>
                <span class="mt-3 inline-block text-[11px] font-semibold text-[#B05A2F] bg-orange-100/90 px-2.5 py-1 rounded-full self-start">
                  {{ $t('reservation.wings.wing26Badge') }}
                </span>
              </button>
            </div>
          </div>

          <!-- GRILLE NOM & EMAIL -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <User class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.name') }} *
              </label>
              <input
                type="text"
                v-model="form.name"
                required
                :placeholder="$t('reservation.namePlaceholder')"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Mail class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.email') }} *
              </label>
              <input
                type="email"
                v-model="form.email"
                required
                :placeholder="$t('reservation.emailPlaceholder')"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <!-- GRILLE TÉLÉPHONE & NOMBRE DE PERSONNES -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Phone class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.phone') }}
              </label>
              <input
                type="tel"
                v-model="form.phone"
                :placeholder="$t('reservation.phonePlaceholder')"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Users class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.guests') }} *
              </label>
              <input
                type="number"
                min="1"
                :max="maxGuests"
                v-model="form.guests"
                required
                :placeholder="$t('reservation.guestsPlaceholder')"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <!-- GRILLE DATES ARRIVÉE & DÉPART -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.arrival') }} *
              </label>
              <input
                type="date"
                v-model="form.arrival"
                required
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Calendar class="w-4 h-4 text-[#B05A2F]" />
                {{ $t('reservation.departure') }} *
              </label>
              <input
                type="date"
                v-model="form.departure"
                required
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <!-- MESSAGE -->
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">
              {{ $t('reservation.message') }}
            </label>
            <textarea
              v-model="form.message"
              rows="4"
              :placeholder="$t('reservation.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:ring-2 focus:ring-[#B05A2F] focus:border-transparent transition-all outline-none resize-y"
            ></textarea>
          </div>

          <!-- BOUTON DE SOUMISSION -->
          <div class="pt-4">
            <button
              type="submit"
              :disabled="status === 'submitting'"
              class="w-full py-4 px-8 rounded-full bg-[#B05A2F] hover:bg-[#964a25] text-white font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
            >
              <Send v-if="status !== 'submitting'" class="w-5 h-5" />
              <span v-if="status === 'submitting'">{{ $t('reservation.submitting') }}</span>
              <span v-else>{{ $t('reservation.submit') }}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</template>
