<script setup lang="ts">
import { NButton } from 'naive-ui'

const toggleDark = useToggle(isDark)
</script>

<template>
  <NButton
    size="small"
    @click="toggleDark()"
  >
    <i-ri-sun-line v-if="isDark.value" />
    <i-ri-moon-line v-else />
  </NButton>
</template>
