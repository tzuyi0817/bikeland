<script setup lang="ts">
import BikeCollapse from '@/components/common/BikeCollapse.vue';

const { isShowInfo, toggleInfo } = useInfo();
</script>

<template>
  <div :class="['bikeInfo', isShowInfo ? 'translate-y-0' : 'translate-y-[calc(100%-190px)]']">
    <div class="bikeInfo_content">
      <div id="bikeInfo"></div>
    </div>
    <bike-collapse :is-open="isShowInfo" @toggle="toggleInfo" />
  </div>
</template>

<style lang="postcss" scoped>
.bikeInfo {
  @apply
  fixed
  bottom-0
  w-full
  transition-transform
  duration-300
  h-1/2
  md:left-8
  md:top-[106px]
  md:bottom-8
  md:h-auto
  md:w-[425px]
  md:translate-y-0
  md:shadow-[4px_4px_20px_0px_rgba(118,118,118,0.30)];
  &_content {
    @apply w-full h-full px-3 py-5 rounded-lg bg-white shadow-[0px_-2px_4px_rgba(118,118,118,0.3)];
  }
}
</style>
