<script setup lang="ts">
defineProps<{
   title: string
   text?: string
}>()
</script>

<template>
   <header class="mb-32px flex items-center justify-between">
      <div>
         <h1>{{ title }}</h1>
         <span class="text-gray-500 font-400">{{ text }}</span>
      </div>
      <slot />
   </header>
</template>
