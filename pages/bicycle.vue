<script setup lang="ts">
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import BicycleStation from '@/components/bicycle/BicycleStation.vue';
import BicycleParking from '@/components/bicycle/BicycleParking.vue';
import type { Page, MenuOptions } from '@/types/common';

const currentPage = shallowRef(BicycleStation);
const { isShowMenu } = useMenu();
const bicycleSwitch: MenuOptions = [
  { value: 'bicycle', name: '找單車' },
  { value: 'parking', name: '找車位' },
];

function changeSwitch(type: Page) {
  const pageMap = {
    bicycle: BicycleStation,
    parking: BicycleParking,
  };

  currentPage.value = pageMap[type];
}
</script>

<template>
  <div>
    <bike-switch
      :is-show-menu="isShowMenu"
      :options="bicycleSwitch"
      @change-switch="changeSwitch"
    />
    <teleport to="#bikeInfo">
      <transition name="page" mode="out-in">
        <component :is="currentPage" />
      </transition>
    </teleport>
  </div>
</template>
