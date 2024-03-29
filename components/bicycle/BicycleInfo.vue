<script setup lang="ts">
import MapMarker from '@/components/common/MapMarker.vue';
import BikePrompt from '@/components/common/BikePrompt.vue';
import { bikeAvailableColor } from '@/utils/bike';
import { isNumber } from '@/utils/checkType';
import { BikeServiceStatusEnum, BIKE_SERVICE_STATUS } from '@/configs/bike';
import type { BikeInfo } from '@/types/bike';

interface Props {
  bikeInfo: Array<BikeInfo>;
}

const props = defineProps<Props>();
const { toggleCard } = useCard();

function statusColor(info: BikeInfo) {
  const {
    AvailableRentBikes: rentCount,
    AvailableReturnBikes: returnCount,
    ServiceStatus: serviceStatus,
  } = info;
  if (!isNumber(rentCount) || !isNumber(returnCount)) return '';
  if (serviceStatus !== BikeServiceStatusEnum.NORMAL) return 'border-grey-300 text-grey-400';
  if (rentCount > 0 && returnCount > 0) return 'border-accent-300 text-accent-500';
  return 'border-alert-300 text-alert-400';
}

function formatStatus(info: BikeInfo) {
  const {
    AvailableRentBikes: rentCount,
    AvailableReturnBikes: returnCount,
    ServiceStatus: serviceStatus,
  } = info;
  if (!isNumber(rentCount) || !isNumber(returnCount) || serviceStatus === undefined) return '';
  if (serviceStatus !== BikeServiceStatusEnum.NORMAL) return BIKE_SERVICE_STATUS[serviceStatus];
  if (rentCount > 0 && returnCount > 0) return '可借可還';
  return rentCount > 0 ? '只可借車' : '只可停車';
}
</script>

<template>
  <transition-group class="bicycleInfo info_content" tag="ul" name="page">
    <li
      v-for="info in bikeInfo"
      :key="info.StationUID"
      class="info_content_item"
      @click="toggleCard(info, false)"
    >
      <div class="flex justify-between items-center mb-2 gap-5">
        <div class="flex-1 flex gap-2 items-center overflow-hidden">
          <p class="text-primary-500 ellipsis font-bold md:text-xl">{{ info.StationName.Zh_tw }}</p>
          <div :class="['bicycleInfo_status md:hidden', statusColor(info)]">
            {{ formatStatus(info) }}
          </div>
        </div>
        <div class="text-grey-500 flex items-center gap-1 md:hidden">
          <map-marker class="text-grey-500" />
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
      <div class="hidden md:flex md:justify-between md:mt-3">
        <div :class="['bicycleInfo_status', statusColor(info)]">
          {{ formatStatus(info) }}
        </div>
        <div class="text-grey-500 flex items-center gap-1">
          <map-marker class="text-grey-500" />
          <span class="text-sm whitespace-nowrap">{{ `距離${info.distance}公尺` }}</span>
        </div>
      </div>
    </li>
    <bike-prompt v-if="!bikeInfo.length">很抱歉，查詢不到此站點</bike-prompt>
  </transition-group>
</template>

<style lang="postcss" scoped>
.bicycleInfo {
  &_status {
    @apply
    rounded
    border-[1px]
    px-2
    py-[2px]
    text-xs
    whitespace-nowrap
    md:text-sm
    md:rounded-md
    md:px-3
    md:py-1;
  }
  &_available {
    @apply rounded-lg py-2 flex justify-center items-center gap-4 md:flex-col md:gap-1;
  }
}
</style>
