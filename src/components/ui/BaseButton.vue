<template>
  <component
    :is="componentTag"
    v-bind="componentProps"
    class="btn"
    :class="[variantClass, sizeClass]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router"

const props = defineProps({
  variant: {
    type: String,
    default: "primary", // primary | outline-black | outline-white | link
  },
  size: {
    type: String,
    default: "md", // sm | md | lg
  },
  href: String,
  to: String,
})

const componentTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const componentProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    const isExternal = props.href.startsWith('http') || props.href.startsWith('//')
    return {
      href: props.href,
      ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})
    }
  }
  return {}
})

const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "btn-primary"
    case "outline-black":
      return "btn-outline"
    case "outline-white":
      return "border border-white text-white hover:bg-white hover:text-slate-900"
    case "link":
      return "!p-0 bg-transparent text-[#B05A2F] hover:text-[#c07e5d] underline underline-offset-4 active:scale-100 hover:shadow-none shadow-none cursor-pointer inline font-medium"
    default:
      return ""
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-4 py-2 text-sm"
    case "md":
      return "px-6 py-3 text-base"
    case "lg":
      return "px-8 py-4 text-lg"
    default:
      return ""
  }
})
</script>