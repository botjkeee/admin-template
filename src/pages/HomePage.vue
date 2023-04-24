<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from '@/gql/gql'

const getColor = graphql(`
   query Colors {
      colors {
         id
      }
   }
`)

const { data, error } = useQuery({ query: getColor })
</script>

<template>
   <main>Главная</main>
</template>
