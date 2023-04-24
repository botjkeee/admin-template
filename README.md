Нужно в корне проекта создать файлы:

-  .env
   BASE_URL=http://localhost:5173
   VITE_GRAPHQL_URL=http://111.111.111.111:8080/v1/graphql
   VITE_GRAPHQL_TOKEN=11111

-  .graphqlrc
   schema:

   -  http://111.111.111.111:8080/v1/graphql:
      headers:
      hasura_access: '11111'

-  codegen.ts
   import type { CodegenConfig } from '@graphql-codegen/cli'

   const config: CodegenConfig = {
   overwrite: true,
   schema: [
   {
   'http://111.111.111.111:8080/v1/graphql': {
   headers: { hasura_access: '11111' }
   }
   }
   ],
   documents: 'src/\*_/_.vue',
   ignoreNoDocuments: true,
   generates: {
   'src/gql/': {
   preset: 'client',
   plugins: [],
   config: {
   useTypeImports: true
   }
   }
   }
   }

   export default config

Проверить новые зависимости и поставить их при необходимости

Запустить

-  npm run install
-  npm run codegen

Установить расширения:

-  https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
-  https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax
-  https://marketplace.visualstudio.com/items?itemName=Vue.volar
-  https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin
