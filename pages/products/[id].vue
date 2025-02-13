<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolores architecto veritatis ratione cumque necessitatibus deserunt dolor voluptatem cupiditate autem!</p>
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>