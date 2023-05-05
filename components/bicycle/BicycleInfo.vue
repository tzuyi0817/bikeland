<script setup lang="ts">
import type { BikeInfo } from '@/types/bike';

interface Props {
  bikeInfo: Array<BikeInfo>;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="bicycleInfo">
    {{ bikeInfo }}
  </div>
</template>
