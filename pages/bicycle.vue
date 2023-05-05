<script setup lang="ts">
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import BicycleInfo from '@/components/bicycle/BicycleInfo.vue';
import { fetchNearByStation, fetchNearByAvailability } from '@/apis/bike';
import { calculateDistance } from '@/utils/common';
import type { Page, MenuOptions, Coordinate } from '@/types/common';
import type { BikeStation, AvailableBike } from '@/types/bike';

const { isShowMenu } = useMenu();
const coord = { lat: 25.0802696, lng: 121.5674925 }; // TODO
const bikeStations = ref<Array<BikeStation>>([]);
const availableBikes = ref<Array<AvailableBike>>([]);
const isLoading = ref(false);
const bicycleSwitch: MenuOptions = [
  { value: 'bicycle', name: '找單車' },
  { value: 'parking', name: '找車位' },
];

const bikeInfo = computed(() => {
  return bikeStations.value.map((station) => {
    const { StationUID, StationPosition: { PositionLat, PositionLon } } = station;
    const availableBike = availableBikes.value.find(bike => bike.StationUID === StationUID)!;
    const stationCoord = { lat: PositionLat, lng: PositionLon };

    return {
      ...station,
      ...availableBike,
      distance: calculateDistance(coord, stationCoord),
    };
  });
});

fetchBikeInfo(coord);

function fetchBikeInfo(coord: Coordinate) {
  isLoading.value = true;
  Promise.all([fetchNearByStation(coord), fetchNearByAvailability(coord)])
    .then(([{ data: stations }, { data: available }]) => {
      bikeStations.value = stations?.value ?? [];
      availableBikes.value = available?.value ?? [];
    })
    .finally(() => {
      isLoading.value = false;
    });
}

function changeSwitch(type: Page) {}
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
        <p v-if="isLoading">Loading..</p>
        <bicycle-info v-else :bike-info="bikeInfo" />
      </transition>
    </teleport>
  </div>
</template>
