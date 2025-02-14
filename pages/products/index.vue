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

  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Learning Nuxt 3 - Nuxt Dojo Merch' }
    ]
  })
</script>

<style scoped>
</style>