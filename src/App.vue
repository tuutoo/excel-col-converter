<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import MainContainer from './components/MainContainer.vue'

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#40a9ff',
    primaryColorHover: '#1890ff',
    primaryColorPressed: '#40a9ff',
    primaryColorSuppl: '#096dd9',
  },
  Input: {
    textColorDisabled: 'rgba(255, 255, 255, 0.82)',
  },
}

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1890ff',
    primaryColorHover: '#40a9ff',
    primaryColorPressed: '#096dd9',
    primaryColorSuppl: '#40a9ff',
  },
  Input: {
    textColorDisabled: 'rgb(51, 54, 57)',
  },
}
</script>

<template>
  <NConfigProvider :theme="isDark === true ? darkTheme : null" :theme-overrides="isDark === true ? darkThemeOverrides : lightThemeOverrides">
    <NGlobalStyle />
    <MainContainer />
  </NConfigProvider>
</template>

<style>
</style>
