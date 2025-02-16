<script setup lang="ts">
import { NCard } from 'naive-ui'
import MainContent from './MainContent.vue'
import NavBar from './NavBar.vue'
</script>

<template>
  <div class="mx-auto w-screen">
    <div class="flex flex-col items-center">
      <NavBar />
      <NCard embedded class="w-full sm:w-screen-sm">
        <MainContent />
      </NCard>
    </div>
  </div>
</template>
