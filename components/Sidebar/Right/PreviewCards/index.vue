<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
const {twitterColorBorder, defaultTransition} = useTailwindConfig()
</script>

<template>
<div class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden" :class="twitterColorBorder">
  <h1 class="p-3 text-xl font-extrabold text-gray-900 dark:text-white" :class="twitterColorBorder">
    {{ title }}
  </h1>
  <slot/>
  <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300" :class="defaultTransition">
    Show More
  </div>
</div>
</template>

<style scoped>

</style>