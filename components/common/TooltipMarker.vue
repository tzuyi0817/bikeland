<script setup lang="ts">
import { LMarker, LIcon, LTooltip } from '@vue-leaflet/vue-leaflet';
import MapMarker from '@/components/common/MapMarker.vue';

interface Props {
  isShowTooltip: boolean;
  latLng: Array<string | number>;
}

const props = defineProps<Props>();
const markerRef = ref<typeof LMarker>();

watch(() => props.isShowTooltip, (isShowTooltip) => {
  const marker = markerRef.value?.leafletObject;

  if (!marker) return;
  isShowTooltip ? marker.openTooltip() : marker.closeTooltip();
});
</script>

<template>
  <l-marker ref="markerRef" :lat-lng="latLng">
    <l-icon class-name="marker_map" :icon-anchor="[15, 50]">
      <div class="marker_map_available w-5 h-4 translate-y-6"></div>
      <map-marker class="relative text-alert-500 z-[2]" width="28.8" height="36" />
    </l-icon>
    <l-tooltip
      :options="{ direction: 'top', offset: [0, -32] }"
      class="bg-alert-500 text-white"
    >
      <slot></slot>
    </l-tooltip>
  </l-marker>
</template>
