<script setup lang="ts">
import type { Page, MenuOptions } from '@/types/common';

interface Props {
  currentSwitch: Page;
  isShowMenu: boolean;
  options: MenuOptions;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:currentSwitch']);

toggleSwitch(props.options[0].value);

function toggleSwitch(type: Page) {
  emit('update:currentSwitch', type);
}
</script>

<template>
  <div :class="['bikeSwitch', isShowMenu ? 'translate-y-24' : 'translate-y-0']">
    <button
      v-for="{ value, name } in options"
      :key="value"
      class="bikeSwitch_button"
      :class="{
        'bikeSwitch_button-active': currentSwitch === value,
      }"
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
