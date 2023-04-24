<script setup lang="ts">
import User from '@/components/Aside/User.vue'

const menu = [
   {
      title: 'Двери',
      icon: 'i-ic-baseline-door-front',
      link: '/doors'
   },
   {
      title: 'Цвета',
      icon: 'i-ic-baseline-door-front',
      link: '/colors'
   },
   {
      title: 'Стекла',
      icon: 'i-ic-baseline-door-front',
      link: '/glasses'
   },
   {
      title: 'Погонаж',
      icon: 'i-ic-baseline-door-front',
      link: '/details'
   },
   {
      title: 'Размеры',
      icon: 'i-ic-baseline-door-front',
      link: '/sizes'
   },
   {
      title: 'Тип',
      icon: 'i-ic-baseline-door-front',
      link: '/types'
   },
   {
      title: 'Стиль',
      icon: 'i-ic-baseline-door-front',
      link: '/styles'
   },
   {
      title: 'Материал',
      icon: 'i-ic-baseline-door-front',
      link: '/materials'
   },
   {
      title: 'Коллекции дверей',
      icon: 'i-ic-baseline-door-front',
      link: '/collections'
   },
   {
      title: 'Производители',
      icon: 'i-ic-baseline-door-front',
      link: '/factories'
   }
]
</script>

<template>
   <aside class="bg-aside text-white">
      <User class="mt-72px" />

      <nav class="mt-40px flex flex-col gap-y-20px select-none">
         <div class="flex flex-col px-24px">
            <span class="text-12px uppercase text-primary">База данных</span>
            <span class="text-11px text-white/50">Основное наименование</span>
         </div>

         <ul class="flex flex-col gap-y-4px px-8px">
            <li v-for="item in menu" :key="item.title">
               <router-link
                  :to="item.link"
                  class="flex items-center gap-x-16px text-white/70 hover:bg-white/20 hover:text-white px-16px py-12px rounded"
                  active-class="bg-white/20 text-white!"
               >
                  <div class="text-20px" :class="item.icon"></div>
                  {{ item.title }}
               </router-link>
            </li>
         </ul>
      </nav>
   </aside>
</template>

<style scoped></style>
