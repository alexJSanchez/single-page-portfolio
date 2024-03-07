<script setup>
import { useStyleStore } from '../stores/styles.js'
const styles = useStyleStore()
console.log(styles.typography)
</script>

<template><div v-bind:style="styles.typography.body">AlexSanchez</div></template>
