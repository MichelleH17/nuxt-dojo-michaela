<template>
  <div>
    <div v-if="product">
      <ProductDetails :product="product" />  
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { id } = useRoute().params 
  const uri = 'https://fakestoreapi.com/products/' + id

  const { data: product } = await useFetch<IProduct>(uri, { key: id as string })

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
  }
  
  definePageMeta({
      layout: 'products'
  })
</script>

<style scoped>

</style>