<script setup lang="ts">
import router from '../router'
function onFormPageClick() {
  router.push({ name: 'form-page' })
}

function onPreviewPageClick() {
  router.push({ name: 'preview-page' })
}
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <img src="/logo.png" alt="" />
    </div>
    <div class="nav-buttons">
      <button @click="onFormPageClick()">Форма</button>
      <button @click="onPreviewPageClick()">Превью</button>
    </div>
  </header>
</template>

<style lang="css">
.main-header {
  display: flex;
  height: 76px;
  align-items: center;
  padding: 0px 6.73vw;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
}

.nav-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.nav-buttons button {
  font-size: 16px;
  font-weight: 200;
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  color: rgba(17, 17, 17, 0.48);
}
</style>
