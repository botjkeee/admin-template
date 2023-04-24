import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
   theme: {
      colors: {
         aside: '#10172b',
         content: '#f1f5f9',
         primary: 'var(--primary-color)'
      },
      breakpoints: {},
      boxShadow: {}
   },
   shortcuts: [
      ['trs', 'transition duration-200'],
      ['flexc', 'flex items-center justify-center']
   ],
   presets: [
      presetUno(),
      presetIcons({
         warn: true
      }),
      presetWebFonts({
         fonts: {
            sans: 'Inter:300,400,500,600,700'
         }
      })
   ],
   transformers: [transformerDirectives()],
   variants: [
      (matcher) => {
         if (!matcher.startsWith('&hover:')) return { matcher }
         return {
            matcher: matcher.slice(7),
            parent: `@media (hover: hover) and (pointer: fine)`,
            selector: (s) => `${s}:hover`
         }
      }
   ]
})
