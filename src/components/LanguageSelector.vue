<script setup lang="ts">
import type { Locales } from '@/i18n/i18n-types'
import { loadLocaleAsync } from '@/i18n/i18n-util.async'
import { typesafeI18n } from '@/i18n/i18n-vue'

import { NDropdown } from 'naive-ui'

const { locale, setLocale } = typesafeI18n()

const options = [
  {
    label: 'English',
    key: 'en',
  },
  {
    label: '简体中文',
    key: 'zh-cn',
  },
]

async function chooseLocale(locale: Locales) {
  await loadLocaleAsync(locale)
  setLocale(locale)
}
</script>

<template>
  <NDropdown
    v-model:value="locale"
    :options="options"
    @select="chooseLocale"
  >
    <i-mdi-translate />
  </NDropdown>
</template>
