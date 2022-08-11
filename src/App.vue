<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import MainContainer from './components/MainContainer.vue'
</script>

<template>
  <NConfigProvider :theme="isDark.value === true ? darkTheme : null" :theme-overrides="isDark.value === true ? darkThemeOverrides : lightThemeOverrides">
    <NGlobalStyle />
    <MainContainer />
  </NConfigProvider>
</template>

<style>
</style>
