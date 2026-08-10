<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronLeft, ChevronRight, Maximize2, X, Info } from 'lucide-vue-next'

const { t, te } = useI18n()

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  altTitle: {
    type: String,
    default: 'Gîte'
  }
})

// Normalize images array so it handles both string URLs, object format { url, caption }, and i18n keys
const normalizedImages = computed(() => {
  return props.images.map(img => {
    if (typeof img === 'string') {
      return { url: img, caption: null }
    }
    const rawCaption = img?.caption || img?.description || null
    let caption = null
    if (rawCaption) {
      if (typeof rawCaption === 'string') {
        caption = te(rawCaption) ? t(rawCaption) : rawCaption
      } else if (typeof rawCaption === 'object') {
        caption = rawCaption.fr || Object.values(rawCaption)[0] || null
      }
    }
    return {
      url: img?.url || img?.src || '',
      caption
    }
  })
})

const currentIndex = ref(0)
const isFullscreen = ref(false)
const showCaption = ref(true)
const thumbnailsContainer = ref(null)

// Current active image object
const currentImg = computed(() => {
  if (!normalizedImages.value.length) return { url: '', caption: null }
  return normalizedImages.value[currentIndex.value]
})

function nextImage() {
  if (!normalizedImages.value.length) return
  currentIndex.value = (currentIndex.value + 1) % normalizedImages.value.length
}

function prevImage() {
  if (!normalizedImages.value.length) return
  currentIndex.value =
    (currentIndex.value - 1 + normalizedImages.value.length) % normalizedImages.value.length
}

function selectImage(index) {
  currentIndex.value = index
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

function toggleCaption() {
  showCaption.value = !showCaption.value
}

// Auto-scroll active thumbnail into view
watch(currentIndex, (newIdx) => {
  nextTick(() => {
    if (!thumbnailsContainer.value) return
    const activeThumb = thumbnailsContainer.value.children[newIdx]
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  })
})

// Mouse Wheel & Drag to Scroll Thumbnails
const isDraggingThumb = ref(false)
let thumbStartX = 0
let thumbScrollLeftStart = 0
let thumbMoved = false

function handleThumbnailWheel(e) {
  if (!thumbnailsContainer.value) return
  e.preventDefault()
  const scrollAmount = e.deltaY !== 0 ? e.deltaY : e.deltaX
  thumbnailsContainer.value.scrollLeft += scrollAmount
}

function handleThumbMouseDown(e) {
  if (!thumbnailsContainer.value) return
  isDraggingThumb.value = true
  thumbMoved = false
  thumbStartX = e.pageX - thumbnailsContainer.value.offsetLeft
  thumbScrollLeftStart = thumbnailsContainer.value.scrollLeft
}

function handleThumbMouseLeave() {
  isDraggingThumb.value = false
}

function handleThumbMouseUp() {
  isDraggingThumb.value = false
}

function handleThumbMouseMove(e) {
  if (!isDraggingThumb.value || !thumbnailsContainer.value) return
  const x = e.pageX - thumbnailsContainer.value.offsetLeft
  const walk = (x - thumbStartX) * 1.5
  if (Math.abs(x - thumbStartX) > 5) {
    thumbMoved = true
  }
  thumbnailsContainer.value.scrollLeft = thumbScrollLeftStart - walk
}

function onThumbClick(idx) {
  if (!thumbMoved) {
    selectImage(idx)
  }
}

// Touch Gestures (Swipe)
let touchStartX = 0
let touchEndX = 0

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

function handleSwipe() {
  const swipeThreshold = 40
  if (touchStartX - touchEndX > swipeThreshold) {
    nextImage()
  } else if (touchEndX - touchStartX > swipeThreshold) {
    prevImage()
  }
}

// Keyboard Navigation
function handleKeyDown(e) {
  if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  } else if (e.key === 'Escape' && isFullscreen.value) {
    isFullscreen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div v-if="normalizedImages.value?.length || normalizedImages.length" class="space-y-3 select-none">
    
    <!-- MAIN CAROUSEL DISPLAY -->
    <div
      class="relative group w-full h-[55vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 transition-all duration-300"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- Background Images -->
      <transition-group name="fade" tag="div" class="absolute inset-0">
        <div
          v-for="(img, idx) in normalizedImages"
          :key="img.url + idx"
          v-show="idx === currentIndex"
          class="absolute inset-0 w-full h-full"
        >
          <img
            :src="img.url"
            :alt="`${altTitle} - Image ${idx + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </transition-group>

      <!-- TOP BAR OVERLAY (Counter + Fullscreen Button + Caption Toggle) -->
      <div class="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
        
        <!-- COUNTER BADGE -->
        <div class="pointer-events-auto bg-slate-900/60 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/15 shadow-md flex items-center gap-1.5">
          <span class="text-amber-400 font-bold">{{ currentIndex + 1 }}</span>
          <span class="text-slate-400">/</span>
          <span>{{ normalizedImages.length }}</span>
        </div>

        <!-- ACTION BUTTONS (TOGGLE CAPTION & FULLSCREEN) -->
        <div class="pointer-events-auto flex items-center gap-2">
          <button
            v-if="currentImg.caption"
            @click="toggleCaption"
            :title="showCaption ? 'Masquer la description' : 'Afficher la description'"
            class="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white/90 hover:text-white hover:bg-slate-900/80 border border-white/15 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            :class="{'bg-amber-500/30 text-amber-300 border-amber-400/30': showCaption}"
          >
            <Info class="w-4 h-4" />
          </button>

          <button
            @click="toggleFullscreen"
            title="Plein écran"
            class="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white/90 hover:text-white hover:bg-slate-900/80 border border-white/15 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Maximize2 class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- NAV BUTTON PREV -->
      <button
        @click="prevImage"
        aria-label="Image précédente"
        class="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/50 backdrop-blur-md text-white border border-white/15 shadow-lg hover:bg-slate-900/80 transition-all duration-200 cursor-pointer hover:scale-110 active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>

      <!-- NAV BUTTON NEXT -->
      <button
        @click="nextImage"
        aria-label="Image suivante"
        class="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/50 backdrop-blur-md text-white border border-white/15 shadow-lg hover:bg-slate-900/80 transition-all duration-200 cursor-pointer hover:scale-110 active:scale-90 opacity-90 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight class="w-6 h-6" />
      </button>

      <!-- BOTTOM CAPTION OVERLAY -->
      <transition name="slide-up">
        <div
          v-if="currentImg.caption && showCaption"
          class="absolute bottom-0 inset-x-0 z-20 p-4 md:p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white backdrop-blur-[2px]"
        >
          <div class="max-w-3xl mx-auto flex items-start gap-3">
            <div class="mt-0.5 p-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30 shrink-0">
              <Info class="w-3.5 h-3.5" />
            </div>
            <p class="text-sm md:text-base font-light text-slate-100 leading-relaxed drop-shadow-sm">
              {{ currentImg.caption }}
            </p>
          </div>
        </div>
      </transition>
    </div>

    <!-- THUMBNAILS STRIP -->
    <div
      ref="thumbnailsContainer"
      class="flex gap-2.5 overflow-x-auto pb-3 pt-1 px-1 custom-scrollbar snap-x cursor-grab active:cursor-grabbing select-none"
      @wheel.prevent="handleThumbnailWheel"
      @mousedown="handleThumbMouseDown"
      @mouseleave="handleThumbMouseLeave"
      @mouseup="handleThumbMouseUp"
      @mousemove="handleThumbMouseMove"
    >
      <button
        v-for="(img, idx) in normalizedImages"
        :key="'thumb-' + idx"
        @click="onThumbClick(idx)"
        class="relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-center cursor-pointer group"
        :class="idx === currentIndex ? 'border-[#B05A2F] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-100'"
      >
        <img
          :src="img.url"
          :alt="`Vignette ${idx + 1}`"
          class="w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
        <div v-if="idx === currentIndex" class="absolute inset-0 bg-[#B05A2F]/10 pointer-events-none" />
      </button>
    </div>

    <!-- LIGHTBOX MODAL (FULLSCREEN) -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="isFullscreen"
          class="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
        >
          <!-- HEADER LIGHTBOX -->
          <div class="flex items-center justify-between z-10">
            <!-- Counter Badge -->
            <div class="bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
              <span class="text-amber-400 font-bold">{{ currentIndex + 1 }}</span>
              <span class="text-slate-400 mx-1">/</span>
              <span>{{ normalizedImages.length }}</span>
            </div>

            <!-- Close Button -->
            <button
              @click="toggleFullscreen"
              class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              title="Fermer (Échap)"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <!-- LIGHTBOX IMAGE DISPLAY -->
          <div class="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              :src="currentImg.url"
              :alt="`${altTitle} - Image Grand Format`"
              class="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
            />

            <!-- LIGHTBOX PREV -->
            <button
              @click="prevImage"
              class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 border border-white/20 shadow-xl transition-all cursor-pointer hover:scale-110"
            >
              <ChevronLeft class="w-8 h-8" />
            </button>

            <!-- LIGHTBOX NEXT -->
            <button
              @click="nextImage"
              class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 border border-white/20 shadow-xl transition-all cursor-pointer hover:scale-110"
            >
              <ChevronRight class="w-8 h-8" />
            </button>
          </div>

          <!-- LIGHTBOX FOOTER (CAPTION & THUMBNAILS) -->
          <div class="z-10 space-y-3 max-w-4xl mx-auto w-full text-center">
            <p v-if="currentImg.caption" class="text-slate-200 text-sm md:text-base bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md inline-block border border-white/10">
              {{ currentImg.caption }}
            </p>
          </div>
        </div>
      </transition>
    </Teleport>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Discreet, theme-matching scrollbar for thumbnails */
.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(226, 232, 240, 0.5); /* Slate-200 / 50% */
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #B05A2F; /* Terracotta theme color */
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #8F4420;
}

/* Firefox scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #B05A2F rgba(226, 232, 240, 0.5);
}
</style>
