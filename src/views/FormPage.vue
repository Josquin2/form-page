<script setup lang="ts">
import plus from '@/components/icons/plus.vue'
import { useHumansStore } from '@/stores/humans'
import { type Ref, ref } from 'vue'
import router from '@/router'
import { type Human } from '@/types/Human'

const store = useHumansStore()

const userName = ref('')
const userAge = ref('')

const kids: Ref<Array<Human>> = ref([])

function onAddKidClick(id: number) {
  if (kids.value.length < 5) {
    kids.value.push({
      name: '',
      age: '',
      id: id
    })
  }
}

function onDeleteKidClick(id: number) {
  const cleanArray: Array<Human> = []
  for (let i = 0; i < kids.value?.length; i++) {
    if (kids?.value[i]?.id != id) {
      cleanArray?.push(kids?.value[i])
    }
  }

  kids.value = cleanArray
}

function clearKidsArray() {
  const cleanArray: Array<Human> = []
  for (let i = 0; i < kids.value?.length; i++) {
    if (kids?.value[i]?.name != '') {
      cleanArray.push(kids?.value[i])
    }
  }
  kids.value = cleanArray
}

function onSaveButtonClick() {
  store.setPersonal(userName.value, userAge.value)

  // cleaning Kids array before sending
  clearKidsArray()
  store.setKids(kids.value)

  // there should be toast about success but i did just router.push
  router.push({ name: 'preview-page' })
}
</script>

<template>
  <div class="form-page">
    <div class="personal-data">
      <h2>Персональные данные</h2>
      <div class="personal-inputs">
        <div class="one-input">
          <input class="input" type="text" placeholder="" v-model="userName" />
          <label class="placeholder">Имя</label>
        </div>
        <div class="one-input">
          <input class="input" type="text" placeholder="" v-model="userAge" />
          <label class="placeholder">Возраст</label>
        </div>
      </div>
    </div>

    <div class="kids">
      <div class="kids-header">
        <h2>Дети (макс. 5)</h2>
        <button @click="onAddKidClick(kids.length)" :class="{ disabled: kids?.length > 4 }">
          <plus /> Добавить ребенка
        </button>
      </div>

      <div class="all-kids">
        <div class="one-kid" v-for="kid in kids" :key="kid?.id">
          <div class="one-input">
            <input class="input" type="text" placeholder="" v-model="kid.name" />
            <label class="placeholder">Имя</label>
          </div>
          <div class="one-input">
            <input class="input" type="text" placeholder="" v-model="kid.age" />
            <label class="placeholder">Возраст</label>
          </div>
          <button @click="onDeleteKidClick(kid?.id)">Удалить</button>
        </div>
      </div>
    </div>

    <div class="save-button">
      <button @click="onSaveButtonClick()">Сохранить</button>
    </div>
  </div>
</template>

<style lang="css">
/* all styles in separated file */
</style>
