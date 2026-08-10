<template>
  <span
    class="inline-flex items-center justify-center shrink-0 overflow-hidden rounded-[3px] shadow-xs border border-slate-300/80 align-middle select-none"
    :class="customClass || 'w-5 h-3.5'"
  >
    <!-- FRANCE -->
    <svg
      v-if="code === 'fr'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      class="w-full h-full object-cover"
    >
      <rect width="20" height="40" fill="#00205B" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#E1000F" />
    </svg>

    <!-- ITALY -->
    <svg
      v-else-if="code === 'it'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      class="w-full h-full object-cover"
    >
      <rect width="20" height="40" fill="#009246" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#CE2B37" />
    </svg>

    <!-- DIAGONALLY SPLIT GB / US FLAG FOR ENGLISH -->
    <svg
      v-else-if="code === 'en'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      class="w-full h-full object-cover"
    >
      <defs>
        <!-- Top-Left triangle for GB -->
        <clipPath id="clip-gb">
          <polygon points="0,0 60,0 0,40" />
        </clipPath>
        <!-- Bottom-Right triangle for US -->
        <clipPath id="clip-us">
          <polygon points="60,0 60,40 0,40" />
        </clipPath>
        <!-- Clip for UK saltire offset -->
        <clipPath id="uk-st-patrick">
          <path d="M30 20 L60 0 L60 20 Z M30 20 L0 40 L0 20 Z M30 20 L60 40 L30 40 Z M30 20 L0 0 L30 0 Z" />
        </clipPath>
      </defs>

      <!-- GB HALF (Top-Left) -->
      <g clip-path="url(#clip-gb)">
        <!-- Base Blue -->
        <rect width="60" height="40" fill="#012169" />
        <!-- White Saltire -->
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFFFFF" stroke-width="8" stroke-linecap="square" />
        <!-- Red Saltire -->
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" stroke-width="5" clip-path="url(#uk-st-patrick)" />
        <!-- White St George Cross -->
        <path d="M30 0 V40 M0 20 H60" stroke="#FFFFFF" stroke-width="12" />
        <!-- Red St George Cross -->
        <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" stroke-width="7" />
      </g>

      <!-- US HALF (Bottom-Right) -->
      <g clip-path="url(#clip-us)">
        <!-- Base White -->
        <rect width="60" height="40" fill="#FFFFFF" />
        <!-- Red Stripes -->
        <rect y="0" width="60" height="3.08" fill="#B22234" />
        <rect y="6.15" width="60" height="3.08" fill="#B22234" />
        <rect y="12.31" width="60" height="3.08" fill="#B22234" />
        <rect y="18.46" width="60" height="3.08" fill="#B22234" />
        <rect y="24.62" width="60" height="3.08" fill="#B22234" />
        <rect y="30.77" width="60" height="3.08" fill="#B22234" />
        <rect y="36.92" width="60" height="3.08" fill="#B22234" />
        <!-- Blue Canton -->
        <rect x="0" y="0" width="25" height="21.5" fill="#3C3B6E" />
        <!-- Stars in Canton -->
        <g fill="#FFFFFF">
          <circle cx="4" cy="4" r="1" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="20" cy="4" r="1" />
          <circle cx="8" cy="8" r="1" />
          <circle cx="16" cy="8" r="1" />
          <circle cx="4" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="20" cy="12" r="1" />
          <circle cx="8" cy="16" r="1" />
          <circle cx="16" cy="16" r="1" />
        </g>
      </g>

      <!-- Diagonal dividing line for clean border -->
      <line x1="60" y1="0" x2="0" y2="40" stroke="#FFFFFF" stroke-width="1.5" />
    </svg>
  </span>
</template>

<script setup>
defineProps({
  code: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>
