<script setup lang="ts">
const {defaultTransition, twitterColorBorder} = useTailwindConfig()

</script>

<template>
<div class="p-3 border-b cursor-pointer hover:bg-gray-100  dark:hover:bg-dim-300 "
     :class="`${defaultTransition} ${twitterColorBorder}`">
  <slot/>
</div>
</template>

<style scoped>

</style>