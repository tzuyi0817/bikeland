<script setup lang="ts">
import MapMarker from '@/components/common/MapMarker.vue';
import LazyImage from '@/components/common/LazyImage.vue';
import BikePrompt from '@/components/common/BikePrompt.vue';
import type { Attractions } from '@/types/attractions';

interface Props {
  attractionsInfo: Array<Attractions>;
  observer: IntersectionObserver | null;
}

defineProps<Props>();
</script>

<template>
  <transition-group class="attractionsInfo info_content" tag="ul" name="page">
    <li
      v-for="info in attractionsInfo"
      :key="info.ScenicSpotID ?? info.RestaurantID"
      class="info_content_item flex flex-col"
    >
      <section :class="['attractionsInfo_image', info.Picture.PictureUrl1 ? 'border-transparent' : 'border-grey-400']">
        <lazy-image
          v-if="info.Picture.PictureUrl1"
          :observer="observer"
          :src="info.Picture.PictureUrl1"
          :alt="info.Picture.PictureDescription1"
        />
        <img v-else src="@/assets/images/logo-dark.png" width="246" alt="logo-dark">
      </section>
      <section class="attractionsInfo_section mb-1">
        <h6 class="text-primary-500 ellipsis flex-1">{{ info.ScenicSpotName ?? info.RestaurantName }}</h6>
        <div class="text-grey-400 flex items-center gap-1">
          <map-marker class="text-grey-400" />
          <span class="text-xs whitespace-nowrap">{{ info.City }}</span>
        </div>
      </section>
      <section class="attractionsInfo_section">
        <div class="flex gap-1">
          <div v-if="info.Class1 || info.Class" class="attractionsInfo_class">{{ info.Class1 ?? info.Class }}</div>
          <div v-if="info.Class2" class="attractionsInfo_class">{{ info.Class2 }}</div>
          <div v-if="info.Class3" class="attractionsInfo_class">{{ info.Class3 }}</div>
        </div>
        <div class="flex gap-2">
          <img
            class="attractionsInfo_icon"
            :class="{ 'attractionsInfo_icon-disabled': !info.WebsiteUrl }"
            src="@/assets/images/icon/website-url.svg"
            alt="website-url"
          >
          <img
            class="attractionsInfo_icon"
            :class="{ 'attractionsInfo_icon-disabled': !info.Phone }"
            src="@/assets/images/icon/phone.svg"
            alt="phone"
          >
        </div>
      </section>
    </li>
    <bike-prompt v-if="!attractionsInfo.length">很抱歉，查詢不到此景點</bike-prompt>
  </transition-group>
</template>

<style lang="postcss" scoped>
.attractionsInfo {
  &_image {
    @apply
    flex
    justify-center
    items-center
    border-[1px]
    rounded-lg
    h-40
    mb-2
    overflow-hidden
    cursor-pointer
    transition-colors
    duration-300
    hover:bg-primary-100;
  }
  &_section {
    @apply flex justify-between items-center gap-1;
  }
  &_class {
    @apply px-2 py-[2px] bg-primary-400 text-xs text-white rounded-[20px];
  }
  &_icon {
    @apply w-5 md:w-[26px] cursor-pointer transition-[filter] hover:hue-rotate-90 hover:invert-[3%];
    &-disabled {
      @apply grayscale cursor-not-allowed hover:filter-none;
    }
  }
}
</style>
