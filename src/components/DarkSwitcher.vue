<script setup lang="ts">
import { NButton } from 'naive-ui'

const toggleDark = useToggle(isDark)
</script>

<template>
  <NButton
    @click="toggleDark()"
  >
    <i-ri-sun-line v-if="isDark" />
    <i-ri-moon-line v-else />
  </NButton>
</template>
