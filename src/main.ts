import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql, { cacheExchange, fetchExchange } from '@urql/vue'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@/assets/styles/default.css'

const app = createApp(App)

app.use(urql, {
   url: import.meta.env.VITE_GRAPHQL_URL,
   requestPolicy: 'cache-and-network',
   fetchOptions: () => {
      return {
         headers: {
            hasura_access: import.meta.env.VITE_GRAPHQL_TOKEN
         }
      }
   },
   exchanges: [cacheExchange, fetchExchange]
})
app.use(createPinia())
app.use(router)

app.mount('#app')
