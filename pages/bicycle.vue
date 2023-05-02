<script setup lang="ts">
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import type { Page, MenuOptions } from '@/types/common';

const { isShowMenu } = useMenu();
const bicycleSwitch: MenuOptions = [
  { value: 'bicycle', name: '找單車' },
  { value: 'parking', name: '找車位' },
];

function changeSwitch(type: Page) {
  console.log({ type });
}
</script>

<template>
  <div>
    <bike-switch
      :is-show-menu="isShowMenu"
      :options="bicycleSwitch"
      @change-switch="changeSwitch"
    />
  </div>
</template>
