<script setup lang="ts">
import MapMarker from '@/components/common/MapMarker.vue';
import { meterToKilometer } from '@/utils/common';
import type { RouteShape } from '@/types/route';

interface Props {
  routeInfo: Array<RouteShape>;
}

defineProps<Props>();
const { routeShape } = useMap();

function setRouteShape(info: RouteShape) {
  routeShape.value = info;
}

function formatCyclingLength(cyclingLength: number) {
  return cyclingLength >= 1000
    ? `${meterToKilometer(cyclingLength)}公里`
    : `${cyclingLength}公尺`;
}

onBeforeUnmount(() => {
  routeShape.value = null;
});
</script>

<template>
  <ul class="routeInfo info_content">
    <li
      v-for="info in routeInfo"
      :key="info.RouteName"
      class="info_content_item flex flex-col gap-2"
      @click="setRouteShape(info)"
    >
      <div class="flex justify-between items-center gap-5">
        <p class="text-primary-500 ellipsis font-bold">{{ info.RouteName }}</p>
        <div class="text-grey-400 flex items-center gap-1">
          <map-marker class="text-grey-400" />
          <span class="text-xs whitespace-nowrap">{{ info.City }}</span>
        </div>
      </div>
      <div class="routeInfo_road">
        <div class="routeInfo_road_caption">起</div>
        <div class="routeInfo_road_section ellipsis">{{ info.RoadSectionStart }}</div>
      </div>
      <div class="routeInfo_road">
        <div class="routeInfo_road_caption">迄</div>
        <div class="routeInfo_road_section ellipsis">{{ info.RoadSectionEnd }}</div>
      </div>
      <div class="flex items-center justify-end gap-[6px]">
        <img src="@/assets/images/icon/route.svg" alt="" />
        <span class="text-xs text-grey-500">
          {{ `總長${formatCyclingLength(info.CyclingLength)}` }}
        </span>
      </div>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.routeInfo {
  &_road {
    @apply flex gap-1 text-primary-500 text-xs;
    div {
      @apply bg-primary-100 rounded py-[6px];
    }
    &_caption {
      @apply px-2;
    }
    &_section {
      @apply px-3 flex-1;
    }
  }
}
</style>
