<script setup>
import { useStyleStore } from '../stores/styles.js'
const styles = useStyleStore()
console.log(styles.typography)
</script>

<template>
  <div><p v-bind:style="styles.typography.body"></p></div>
</template>
