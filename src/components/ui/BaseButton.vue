<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    class="inline-block px-6 py-3 rounded-none transition font-medium"
    :class="variantClass"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  variant: {
    type: String,
    default: "primary", // primary | outline-white | outline-black
  },
  href: String,
  to: String,
  tag: {
    type: String,
    default: "button",
  },
})

const variantClass = computed(() => {
  switch (props.variant) {

    case "primary":
      return "bg-orange-500 hover:bg-orange-600 text-white"

    case "outline-white":
      return "border border-white text-white hover:bg-white hover:text-black"

    case "outline-black":
      return "border border-black text-black hover:bg-black hover:text-white"

    default:
      return ""
  }
})
</script>