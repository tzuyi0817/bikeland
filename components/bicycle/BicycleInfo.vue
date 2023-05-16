<script setup lang="ts">
import { bikeAvailableColor } from '@/utils/bike';
import { BikeServiceStatusEnum, BIKE_SERVICE_STATUS } from '@/configs/bike';
import type { BikeInfo } from '@/types/bike';

interface Props {
  bikeInfo: Array<BikeInfo>;
}

const props = defineProps<Props>();
const { toggleCard } = useCard();

function statusColor(info: BikeInfo) {
  const { AvailableRentBikes, AvailableReturnBikes, ServiceStatus } = info;

  if (ServiceStatus !== BikeServiceStatusEnum.NORMAL) return 'border-grey-300 text-grey-400';
  if (AvailableRentBikes > 0 && AvailableReturnBikes > 0) return 'border-accent-300 text-accent-500';
  return 'border-alert-300 text-alert-400';
}

function formatStatus(info: BikeInfo) {
  const { AvailableRentBikes, AvailableReturnBikes, ServiceStatus } = info;

  if (ServiceStatus !== BikeServiceStatusEnum.NORMAL) return BIKE_SERVICE_STATUS[ServiceStatus];
  if (AvailableRentBikes > 0 && AvailableReturnBikes > 0) return '可借可還';
  return AvailableRentBikes > 0 ? '只可借車' : '只可停車';
}
</script>

<template>
  <ul class="bicycleInfo info_content">
    <li
      v-for="info in bikeInfo"
      :key="info.StationUID"
      class="py-5 border-b-[1px] border-grey-300"
      @click="toggleCard(true, info)"
    >
      <div class="flex justify-between items-center mb-2 gap-5">
        <div class="flex-1 flex gap-2 items-center overflow-hidden">
          <p class="text-primary-500 ellipsis font-bold">{{ info.StationName.Zh_tw }}</p>
          <div :class="['bicycleInfo_status', statusColor(info)]">
            {{ formatStatus(info) }}
          </div>
        </div>
        <div class="text-grey-500 flex items-center gap-1">
          <client-only>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          </client-only>
          <span class="text-xs whitespace-nowrap">{{ `距離${info.distance}公尺` }}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div :class="['bicycleInfo_available', bikeAvailableColor(info.AvailableRentBikes)]">
          <p>
            <client-only>
              <font-awesome-icon :icon="['fas', 'bicycle']" />
            </client-only>
            <span class="ml-1">可租借</span>
          </p>
          <h5>{{ info.AvailableRentBikes }}</h5>
        </div>
        <div :class="['bicycleInfo_available', bikeAvailableColor(info.AvailableReturnBikes)]">
          <p>
            <client-only>
              <font-awesome-icon :icon="['fas', 'parking']" />
            </client-only>
            <span class="ml-1">可停車</span>
          </p>
          <h5>{{ info.AvailableReturnBikes }}</h5>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.bicycleInfo {
  &_status {
    @apply rounded border-[1px] px-2 py-[2px] text-xs whitespace-nowrap;
  }
  &_available {
    @apply rounded-lg py-2 flex justify-center items-center gap-4;
  }
}
</style>
