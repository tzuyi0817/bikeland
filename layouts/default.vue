<script setup lang="ts">
import Navigation from '@/components/common/Navigation.vue';
import BikeInfo from '@/components/common/BikeInfo.vue';
import BikeMap from '@/components/common/BikeMap.vue';

</script>

<template>
  <main>
    <bike-map />
    <navigation />
    <slot></slot>
    <bike-info />
  </main>
</template>
