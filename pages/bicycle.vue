<script setup lang="ts">
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import { fetchNearByStation } from '@/apis/bike';
import type { Page, MenuOptions } from '@/types/common';

const { data, refresh, pending } = fetchNearByStation({ lat: 25.0802696, lng: 121.5674925 });
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
    <!-- {{ data }} -->
  </div>
</template>
