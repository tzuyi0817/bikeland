<script setup lang="ts">
const { isShowMenu } = useMenu();
const { toggleCard, isShowCard } = useCard();
</script>

<template>
  <transition name="page" mode="out-in">
    <div :class="['bicycleCard', isShowMenu ? 'translate-y-24' : 'translate-y-0']">
      <p class="text-primary-500 ellipsis font-bold mb-2">{{ '太原廣場' }}</p>
      <div class="flex items-center justify-between gap-6">
        <div class="flex gap-3">
          <div class="bicycleCard_available">
            <client-only>
              <font-awesome-icon :icon="['fas', 'bicycle']" />
            </client-only>
            <p class="font-bold">43</p>
          </div>
          <div class="bicycleCard_available">
            <client-only>
              <font-awesome-icon :icon="['fas', 'parking']" />
            </client-only>
            <p class="font-bold">43</p>
          </div>
        </div>
        <div class="text-grey-500 flex items-center gap-1">
          <client-only>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          </client-only>
          <span class="text-xs whitespace-nowrap">{{ `距離25公尺` }}</span>
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
  transition-transform
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
