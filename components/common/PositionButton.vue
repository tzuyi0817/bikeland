<script setup lang="ts">
interface Props {
  isShowInfo: boolean;
  isUpdatingPosition: boolean;
}

defineProps<Props>();
const emit = defineEmits(['updateCurrentPosition']);
</script>

<template>
  <button
    :class="['positionButton', isShowInfo ? '-translate-y-3' : 'translate-y-[calc(50vh-202px)]']"
    data-after="點擊定位"
    :disabled="isUpdatingPosition"
    @click="emit('updateCurrentPosition')"
  >
    <img src="@/assets/images/icon/cross-hairs.svg" alt="" />
  </button>
</template>

<style lang="postcss" scoped>
.positionButton {
  @apply
  fixed
  bottom-1/2
  right-7
  w-10
  h-10
  bg-primary-400
  rounded-full
  shadow-[4px_4px_20px_rgba(118,118,118,0.3)]
  flex
  justify-center
  items-center
  transition-[transform_colors]
  duration-300
  hover:bg-primary-500
  hover:enabled:before:opacity-100
  hover:enabled:after:opacity-100
  disabled:bg-grey-300
  md:w-[60px]
  md:h-[60px]
  md:top-[106px]
  md:bottom-auto
  md:left-[730px]
  md:translate-y-0
  before:content-['']
  before:absolute
  before:top-0
  before:md:top-full
  before:left-1/2
  before:-translate-x-1
  before:md:-translate-x-2/3
  before:w-3
  before:h-5
  before:bg-accent-400
  before:rounded-sm
  before:-translate-y-[calc(100%+4px)]
  before:md:translate-y-1
  before:rotate-45
  before:opacity-0
  before:transition-opacity
  before:duration-300
  after:content-[attr(data-after)]
  after:absolute
  after:top-0
  after:md:top-full
  after:left-1/2
  after:-translate-x-1/2
  after:px-2
  after:py-1
  after:bg-accent-400
  after:-translate-y-[calc(100%+8px)]
  after:md:translate-y-2
  after:text-xs
  after:whitespace-nowrap
  after:text-white
  after:rounded
  after:opacity-0
  after:transition-opacity
  after:duration-300;
  img {
    @apply w-5 md:w-[30px];
  }
}
</style>
