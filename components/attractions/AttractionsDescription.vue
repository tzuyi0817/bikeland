<script setup lang="ts">
import BikeCollapse from '@/components/common/BikeCollapse.vue';
import type { Attractions } from '@/types/attractions';

const currentAttraction = useState<Attractions | null>('currentAttraction');

function toggleDescription() {
  currentAttraction.value = null;
}
</script>

<template>
  <div class="attractionsDescription">
    <bike-collapse :is-open="!!currentAttraction" @toggle="toggleDescription" />
  </div>
</template>

<style lang="postcss" scoped>
.attractionsDescription {
  @apply fixed bottom-0 w-full px-6 py-5 bg-white transition-transform duration-300 z-10;
}
</style>
