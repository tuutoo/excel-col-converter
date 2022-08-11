<script setup lang="ts">
import { NCard } from 'naive-ui'

import MainContent from './MainContent.vue'
</script>

<template>
  <div class="mx-auto w-screen">
    <div class="flex flex-col items-center">
      <div flex="~ gap2" items-center justify-between>
        <span text-3xl ma-2>Online Excel Column Converter v2.2.0</span>
        <DarkSwitcher ma-2 />
      </div>
      <NCard embedded class="w-full sm:w-screen-sm">
        <MainContent />
      </NCard>
    </div>
  </div>
</template>
