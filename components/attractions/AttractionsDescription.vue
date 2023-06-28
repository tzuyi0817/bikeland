<script setup lang="ts">
import BikeCollapse from '@/components/common/BikeCollapse.vue';
import MapMarker from '@/components/common/MapMarker.vue';
import type { Attractions } from '@/types/attractions';

const currentAttraction = useState<Attractions | null>('currentAttraction');
const isShow = computed(() => !!currentAttraction.value);

function toggleDescription() {
  currentAttraction.value = null;
}
</script>

<template>
  <div :class="['attractionsDescription', isShow ? 'translate-y-0' : 'translate-y-[calc(100%+18px)]']">
    <section :class="['image_section', currentAttraction?.Picture.PictureUrl1 ? 'border-transparent' : 'border-grey-400']">
      <img
        v-if="currentAttraction?.Picture.PictureUrl1"
        class="image_effect"
        :src="currentAttraction?.Picture.PictureUrl1"
        :alt="currentAttraction?.Picture.PictureDescription1"
      />
      <img v-else src="@/assets/images/logo-dark.png" width="246" alt="logo-dark">
    </section>
    <h6 class="text-primary-500">{{ currentAttraction?.ScenicSpotName ?? info?.RestaurantName }}</h6>
    <p class="attractionsDescription_text">
      <map-marker width="13" height="13" />
      <span class="ellipsis">{{ currentAttraction?.Address }}</span>
    </p>
    <p class="attractionsDescription_text">
      <img src="@/assets/images/icon/clock.svg" alt="clock svg">
      <span class="ellipsis">{{ currentAttraction?.OpenTime }}</span>
    </p>
    <bike-collapse :is-open="isShow" @toggle="toggleDescription" />
  </div>
</template>

<style lang="postcss" scoped>
.attractionsDescription {
  @apply
  fixed
  bottom-0
  w-full
  flex
  flex-col
  gap-1
  px-6
  py-5
  bg-white
  transition-transform
  duration-300
  z-10;
  &_text {
    @apply text-grey-400 text-xs flex gap-1;
  }
}
</style>
