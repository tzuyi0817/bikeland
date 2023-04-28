<script setup lang="ts">
import Navigation from '@/components/common/Navigation.vue';
import BikeInfo from '@/components/common/BikeInfo.vue';

</script>

<template>
  <main>
    <navigation />
    <slot></slot>
    <bike-info />
  </main>
</template>
