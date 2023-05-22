<script setup lang="ts">
import MapMarker from '@/components/common/MapMarker.vue';
import { bikeAvailableColor } from '@/utils/bike';

const { isShowMenu } = useMenu();
const { toggleCard, isShowCard, cardInfo } = useCard();
</script>

<template>
  <transition name="page" mode="out-in">
    <div
      v-if="isShowCard"
      :class="['bicycleCard', isShowMenu ? 'translate-y-24' : 'translate-y-0']"
    >
      <p class="text-primary-500 ellipsis font-bold mb-2">
        {{ cardInfo.StationName?.Zh_tw }}
      </p>
      <div class="flex items-center justify-between gap-6">
        <div class="flex gap-3">
          <div :class="['bicycleCard_available', bikeAvailableColor(cardInfo.AvailableRentBikes)]">
            <client-only>
              <font-awesome-icon :icon="['fas', 'bicycle']" />
            </client-only>
            <p class="font-bold">{{ cardInfo.AvailableRentBikes }}</p>
          </div>
          <div :class="['bicycleCard_available', bikeAvailableColor(cardInfo.AvailableReturnBikes)]">
            <client-only>
              <font-awesome-icon :icon="['fas', 'parking']" />
            </client-only>
            <p class="font-bold">{{ cardInfo.AvailableReturnBikes }}</p>
          </div>
        </div>
        <div class="text-grey-500 flex items-center gap-[6px]">
          <map-marker class="text-gray-500" />
          <span class="text-xs whitespace-nowrap">{{ `距離${cardInfo.distance ?? 0}公尺` }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>
.bicycleCard {
  @apply
  absolute
  top-[100px]
  left-1/2
  -translate-x-1/2
  transition-all
  duration-300
  px-5
  py-3
  rounded-lg
  bg-white border-2
  border-primary-300
  shadow-[4px_4px_20px_rgba(118,118,118,0.3)];
  &_available {
    @apply rounded-[4px] px-2 py-[2px] flex justify-center items-center gap-2;
  }
}
</style>
