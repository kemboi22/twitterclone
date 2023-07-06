<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

const {twitterColorBorder} = useTailwindConfig()
</script>

<template>
<div class="border-x" :class="twitterColorBorder">
  <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur dark:bg-dim-900">
    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
  </div>
  <div v-if="loading" class="flex items-center justify-center p-4 border-b" :class="twitterColorBorder">
    <IconsSpinner/>
  </div>
  <div v-else>
    <slot/>
  </div>
</div>
</template>

<style scoped>

</style>