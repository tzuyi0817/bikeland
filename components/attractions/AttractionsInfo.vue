<script setup lang="ts">
import type { Attractions } from '@/types/attractions';

interface Props {
  attractionsInfo: Array<Attractions>;
}

defineProps<Props>();
</script>

<template>
  <ul class="attractionsInfo info_content">
    <li
      v-for="info in attractionsInfo"
      :key="info.ScenicSpotID ?? info.RestaurantID"
      class="info_content_item flex flex-col gap-2"
    >
      {{ info }}
    </li>
  </ul>
</template>
