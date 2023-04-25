<script setup lang="ts">
</script>

<template>
  <header class="navigation">
    <img src="@/assets/images/logo-light.png" width="106" alt="LOGO" />
    <font-awesome-icon :icon="['fas', 'bars']" class="text-white" />
    <nav></nav>
  </header>
</template>

<style lang="postcss" scoped>
.navigation {
  @apply
  h-[34px]
  w-full
  fixed
  flex
  justify-between
  items-center
  px-5
  bg-primary-400;
  nav {
    @apply absolute;
  }
}
</style>
