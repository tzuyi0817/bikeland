<script setup lang="ts">
import { sleep } from '@/utils/common';
import type { Page, MenuOptions } from '@/types/common';

interface Props {
  currentSwitch: Page;
  isShowMenu: boolean;
  options: MenuOptions;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:currentSwitch']);
const transitionEffect = ref(false);

async function toggleSwitch(type: Page) {
  transitionEffect.value = true;
  emit('update:currentSwitch', type);
  await sleep();
  transitionEffect.value = false;
}
</script>

<template>
  <div :class="['bikeSwitch', isShowMenu ? 'translate-y-24' : 'translate-y-0']">
    <div
      class="bikeSwitch_effect"
      :class="{
        'translate-x-0': currentSwitch === options[0].value,
        'translate-x-[100px]': currentSwitch === options[1].value,
      }"
    ></div>
    <button
      v-for="{ value, name } in options"
      :key="value"
      class="bikeSwitch_button"
      :class="{
        'bikeSwitch_button-active': !transitionEffect && currentSwitch === value,
      }"
      :disabled="transitionEffect"
      @click="toggleSwitch(value)"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', value]" />
      </client-only>
      <p>{{ name }}</p>
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
  drop-shadow-md
  transition-transform
  duration-300
  md:left-[595px]
  md:top-[106px]
  md:px-3
  md:py-2;
  &_button {
    @apply
    relative
    min-w-[96px]
    text-primary-400
    py-1
    gap-1
    rounded-2xl
    flex
    items-center
    justify-center
    disabled:text-primary-300
    md:text-lg
    md:px-4
    md:py-2;
    &-active {
      @apply bg-primary-400 text-white;
    }
  }
  &_effect {
    @apply absolute w-24 h-8 bg-primary-400 rounded-2xl left-[6px] transition-transform duration-300;
  }
}
</style>
