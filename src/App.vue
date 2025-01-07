<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <SisdaiNavegacionPrincipal>
    <template #identidad> andres-geotec </template>
  </SisdaiNavegacionPrincipal>

  <RouterView />
</template>

<style scoped></style>
