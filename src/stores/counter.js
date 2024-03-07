import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    addCount() {
      this.count = this.count + 1
    }
  }
})
