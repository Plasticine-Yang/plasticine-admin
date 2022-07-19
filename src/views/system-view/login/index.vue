<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/store'
import { mixColor } from '@/utils'

const theme = useThemeStore()

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff'
  const ratio = theme.darkMode ? 0.2 : 0.5
  // 深色模式下让白色占比更少一些
  return mixColor(theme.themeColor, COLOR_WHITE, ratio)
})
</script>

<template>
  <!-- 背景容器 -->
  <div class="w-full h-full" :style="{ backgroundColor: bgColor }">
    <dark-mode-switch
      class="absolute left-48px top-24px"
      :dark="theme.darkMode"
      @update:dark="theme.setDarkMode"
    />
  </div>
</template>
