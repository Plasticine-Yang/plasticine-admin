<script setup lang="ts">
import { useThemeStore } from '@/store'

const theme = useThemeStore()

const bgColor = theme.themeColor
</script>

<template>
  <div class="w-full h-full" :style="{ backgroundColor: bgColor }"></div>
</template>
