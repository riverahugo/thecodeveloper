<template>
  <h1 ref="el" class="typing"></h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const el = ref(null)

onMounted(() => {
  const typed = new Typed(el.value, {
    strings: [
      '🚀 Próximamente...',
      '🌐 ¡The Codeveloper!',
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
  })
})
</script>

<style scoped>
.typing {
  color: #2e7d32;
  font-size: 1.8rem;
  text-align: center;
}
</style>
