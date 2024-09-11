<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <MainHeader />
  <RouterView class="body" />
  <MainFooter />
</template>

<style lang="css">
.body {
  min-height: calc(100vh - 152px);
}
</style>
