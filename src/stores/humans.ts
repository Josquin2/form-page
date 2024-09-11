import { defineStore } from 'pinia'
import { type Human } from '@/types/Human'

export const useHumansStore = defineStore({
  id: 'humans',
  state: (): { personal: Human; kids: Human[] } => ({
    personal: {
      name: '',
      age: '',
      id: 6
    },

    kids: []
  }),
  getters: {
    getPersonal: (state) => {
      return state.personal
    },
    getKids: (state) => {
      return state.kids
    }
  },
  actions: {
    setPersonal(name: string, age: string) {
      this.personal.name = name
      this.personal.age = age
      console.log('yea')
    },
    setKids(array: Array<any>) {
      this.kids = array
    }
  }
})
