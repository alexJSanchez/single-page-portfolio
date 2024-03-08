<script setup>
import { useStyleStore } from '../stores/styles.js'
import HelloWorld from '../components/HelloWorld.vue'
const styles = useStyleStore()
console.log(styles.typography)
</script>

<template>
  <div><HelloWorld /></div>
</template>
