<script setup lang="ts">
import type { BikeInfo } from '@/types/bike';

interface Props {
  bikeInfo: Array<BikeInfo>;
}

const props = defineProps<Props>();

function availableColor(available: number) {
  if (available > 5) return 'text-primary-500 bg-primary-100';
  if (available === 0) return 'text-grey-300 bg-grey-200';
  return 'text-alert-600 bg-alert-100';
}
</script>

<template>
  <ul class="bicycleInfo">
    <li
      v-for="{ StationUID, StationName, distance, AvailableRentBikes, AvailableReturnBikes } in bikeInfo"
      :key="StationUID"
      class="py-5 border-b-[1px] border-grey-300"
    >
      <div class="flex justify-between items-center mb-2 gap-5">
        <div class="flex-1 flex gap-2 ellipsis items-center">
          <h7 class="ellipsis primary-500">{{ StationName.Zh_tw }}</h7>
          <div class="bicycleInfo_status">可借可還</div>
        </div>
        <div class="text-grey-500 flex items-center gap-1">
          <client-only>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          </client-only>
          <span class="text-xs whitespace-nowrap">{{ `距離${distance}公尺` }}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div :class="['bicycleInfo_available', availableColor(AvailableRentBikes)]">
          <p>可租借</p>
          <h5>{{ AvailableRentBikes }}</h5>
        </div>
        <div :class="['bicycleInfo_available', availableColor(AvailableReturnBikes)]">
          <p>可停車</p>
          <h5>{{ AvailableReturnBikes }}</h5>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.bicycleInfo {
  &_status {
    @apply rounded border-[1px] px-2 py-1 text-xs;
  }
  &_available {
    @apply rounded-lg py-2 flex justify-center items-center gap-4;
  }
}
</style>
