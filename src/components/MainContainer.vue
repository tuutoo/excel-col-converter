<script setup lang="ts">
import { typesafeI18n } from '@/i18n/i18n-vue'
import { NCard } from 'naive-ui'
import MainContent from './MainContent.vue'

const { LL } = typesafeI18n()
</script>

<template>
  <div class="mx-auto w-screen">
    <div class="flex flex-col items-center">
      <div flex="~ gap2" items-center justify-between>
        <span text-3xl ma-2>{{ LL.title() }} v3.0.1</span>
        <LanguageSelector />
        <DarkSwitcher />
        <GithubBtn />
      </div>
      <NCard embedded class="w-full sm:w-screen-sm">
        <MainContent />
      </NCard>
    </div>
  </div>
</template>
