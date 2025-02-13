<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>    
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'products'
  })

  const { data: products } = await useFetch<IProduct[]>('https://fakestoreapi.com/products')
</script>

<style scoped>
</style>