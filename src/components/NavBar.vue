<script setup lang="ts">
import { typesafeI18n } from '@/i18n/i18n-vue'

const { LL } = typesafeI18n()
</script>

<template>
  <nav class="w-full flex items-center justify-between px-4 py-2">
    <div class="flex-1 flex justify-center">
      <span text-3xl>{{ LL.title() }} v3.0.2</span>
    </div>
    <div class="flex items-center gap-2">
      <LanguageSelector />
      <DarkSwitcher />
      <GithubBtn mr-3 />
    </div>
  </nav>
</template>
