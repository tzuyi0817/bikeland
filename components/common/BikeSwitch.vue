<script setup lang="ts">
import type { Page } from '@/types/common';

interface Props {
  isShowMenu: boolean;
}

const props = defineProps<Props>();
const current = ref<Page>('bicycle');

function toggleSwitch(type: Page) {
  current.value = type;
}
</script>

<template>
  <div :class="['bikeSwitch', isShowMenu ? 'translate-y-24' : 'translate-y-0']">
    <button
      :class="{
        'bikeSwitch_button': true,
        'bikeSwitch_button-active': current === 'bicycle',
      }"
      @click="toggleSwitch('bicycle')"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'bicycle']" />
      </client-only>
      <p>找單車</p>
    </button>
    <button
      :class="{
        'bikeSwitch_button': true,
        'bikeSwitch_button-active': current === 'parking',
      }"
      @click="toggleSwitch('parking')"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'parking']" />
      </client-only>
      <p>找車位</p>
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.bikeSwitch {
  @apply
  absolute
  top-[46px]
  left-1/2
  -translate-x-1/2
  bg-white
  rounded-[35px]
  flex
  justify-center
  items-center
  gap-1
  px-[6px]
  py-1
  transition-transform
  duration-300;
  &_button {
    @apply px-3 py-1 gap-1 rounded-2xl text-primary-400 flex items-center;
    &-active {
      @apply bg-primary-400 text-white;
    }
  }
}
</style>
