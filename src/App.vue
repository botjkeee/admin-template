<script setup lang="ts">
import { RouterView } from 'vue-router'
import Aside from '@/components/Aside/Aside.vue'
import Header from '@/components/Header/Header.vue'
</script>

<template>
   <div class="grid grid-cols-[280px_1fr] h-screen">
      <Aside />
      <div>
         <Header class="h-64px px-24px" />

         <RouterView class="py-40px px-80px" />
      </div>
   </div>
</template>
