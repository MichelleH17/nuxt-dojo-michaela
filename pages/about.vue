<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere sunt corrupti suscipit numquam cupiditate labore iusto, deserunt consectetur maxime.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati id doloribus eos alias eveniet vitae perferendis, sunt voluptas tempore.</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>