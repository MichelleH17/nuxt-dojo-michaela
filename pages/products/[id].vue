<template>
  <div>
    <div v-if="product">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.id }}</p>    
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { id } = useRoute().params 
  const uri = 'https://fakestoreapi.com/products/' + id

  const { data: product } = await useFetch<IProduct>(uri, { key: id as string })
  
  definePageMeta({
      layout: 'products'
  })
</script>

<style scoped>

</style>