<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: null
  },
  modelValue: {
    type: String,
    required: true
  } ,
  placeholder: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
})

const  emits = defineEmits(['update:modelValue'])
</script>

<template>
<div>
  <label v-if="label"
         class="block pl-3 ml-px text-sm font-medium text-gray-700"

  >{{ label }}</label>
  <input @input="event => emits('update:modelValue', event.target.value)"
         :type="type" :value="modelValue"
         class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
         :placeholder="placeholder"/>
</div>
</template>

<style scoped>

</style>