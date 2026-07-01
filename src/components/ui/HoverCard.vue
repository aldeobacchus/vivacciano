<template>
  <component
    :is="as"
    class="rounded-2xl shadow-sm transition-all duration-300 group"
    :class="[hoverLift ? 'hover:-translate-y-1' : '', contentClass, wrapperClass]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'div'
  },
  hoverLift: {
    type: Boolean,
    default: false
  },
  wrapperClass: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: 'bg-white border border-slate-100'
  }
})
</script>
