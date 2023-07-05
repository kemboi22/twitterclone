<script setup lang="ts">
const {defaultTransition} = useTailwindConfig()
const {active} = defineProps({
  active: {
    default: false,
    type: Boolean
  }
})

const textClasses = computed(() => active ? 'font-semibold' : 'font-normal')

</script>

<template>
<div>
  <NuxtLink to="" class="flex items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
      <slot name="icon"></slot>
    </div>
    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</div>
</template>

<style scoped>

</style>