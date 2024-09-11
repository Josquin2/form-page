<script setup lang="ts">
import { useHumansStore } from '@/stores/humans'

const store = useHumansStore()
</script>

<template>
  <div class="preview-page">
    <div class="personal-data">
      <h2>Персональные данные</h2>

      <h3 v-if="store?.getPersonal?.name != '' && store?.getPersonal?.age">
        {{ store?.getPersonal?.name }}, {{ store?.getPersonal?.age }} лет
      </h3>
      <h3 v-else>Вы не указали данные о себе!</h3>
    </div>

    <div class="kids-block">
      <h2>Дети</h2>
      <div class="all-kids" v-if="store?.getKids?.length > 0">
        <div class="one-kid" v-for="(kid, index) in store?.getKids" :key="index">
          <h3>{{ kid?.name }}, {{ kid?.age }} лет</h3>
        </div>
      </div>
      <div class="all-kids" v-else>
        <div class="one-kid">
          <h3>Нет данных о детях!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
/* all styles in separated file */
</style>
