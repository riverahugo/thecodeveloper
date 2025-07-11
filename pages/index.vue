<script setup lang="ts">
import TypingText from '~/components/TypingText.vue';

</script>

<template>
  <div class="container">
    <div class="content">
      <TypingText/>
    </div>
  </div>
</template>


<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #a8e6cf, #dcedc1);
  padding: 20px;
}

.content {
  text-align: center;
  max-width: 90%;
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  color: #2e7d32;
  font-family: 'Segoe UI', sans-serif;
}
</style>