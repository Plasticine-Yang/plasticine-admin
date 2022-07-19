<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 深色模式 */
  dark?: boolean
}

interface Emits {
  (e: 'update:dark', darkMode: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
})

const emit = defineEmits<Emits>()

const isDarkMode = computed({
  get() {
    return props.dark
  },
  set(newVal: boolean) {
    emit('update:dark', newVal)
  },
})

const handleSwitch = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <div class="c-white text-2xl cursor-pointer" @click="handleSwitch">
    <!-- 根据深色模式展示不同的图标 -->
    <div class="i-ic:twotone-dark-mode" v-if="isDarkMode"></div>
    <div class="i-akar-icons:sun" v-else></div>
  </div>
</template>
