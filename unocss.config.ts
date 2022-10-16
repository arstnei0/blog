// unocss.config.ts
import { defineConfig, presetAttributify, presetUno, presetMini, transformerDirectives } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import presetDaisy from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),
    presetScrollbar(),
    presetDaisy(),
  ],
  transformers: [
    transformerDirectives(),
  ]
})