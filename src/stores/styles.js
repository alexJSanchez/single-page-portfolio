import { defineStore } from 'pinia'

export const useStyleStore = defineStore('style', {
  state: () => ({
    colors: {
      mattBlack: '#151515',
      mintJelly: '#4ee1a0',
      verifiedBlack: '#242424',
      orochimaru: '#d9d9d9',
      regWhite: '#ffffff'
    },
    typography: {
      headingXl: 'font-size: 5.5rem; line-height: 88px; letter-spacing:-2.5px;',
      headingL: 'font-size: 3rem; line-height: 56px; letter-spacing:-1.5px;',
      headingM: 'font-size:1.5rem; line-height: 24px;',
      body: 'font-size:1.125rem; line-height: 18px;'
    }
  })
})
