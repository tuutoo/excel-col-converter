import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    VueJsx(),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ri'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    AutoImport({
      imports: [
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        'vue',
        '@vueuse/core',
      ],
      resolvers: [
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
    UnoCSS({
      shortcuts: {
        'border-base': 'border-gray/20 dark:border-gray/15',
        'bg-base': 'bg-white dark:bg-[#1a1a1a]',
        'bg-canvas': 'bg-gray:15 dark:bg-[#111]',
        'icon-btn': 'op30 hover:op100',
      },
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
})
