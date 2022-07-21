<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { subscribeStore } from '@/store'

// 订阅 store 的变化
subscribeStore()
</script>

<template>
  <router-view />
</template>
