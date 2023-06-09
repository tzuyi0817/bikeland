<script setup lang="ts">
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import SortButton from '@/components/common/SortButton.vue';
import Loading from '@/components/common/Loading.vue';
import BicycleInfo from '@/components/bicycle/BicycleInfo.vue';
import { fetchNearByStation, fetchNearByAvailability } from '@/apis/bike';
import { sleep } from '@/utils/common';
import type { MenuOptions, Coordinate } from '@/types/common';
import type { BikeStation, AvailableBike } from '@/types/bike';
import type { BicycleSortType } from '@/types/sort';

const { isShowMenu } = useMenu();
const { bikeInfo, mapCenterPos, currentSwitch, setBikeInfo } = useMap();
const bikeStations = ref<Array<BikeStation>>([]);
const availableMap = ref<Record<string, AvailableBike>>({});
const isLoading = ref(false);
const search = ref('');
const currentSort = ref<BicycleSortType>('distance');
const bicycleSwitch: MenuOptions = [
  { value: 'bicycle', name: '找單車' },
  { value: 'parking', name: '找車位' },
];
const bicycleSortOptions = [
  { name: '距離較近', value: 'distance' },
  { name: '可借車數', value: 'AvailableRentBikes' },
  { name: '可還車數', value: 'AvailableReturnBikes' },
];

currentSwitch.value = 'bicycle';

const filterStations = computed(() => {
  return bikeStations.value.filter(({ StationName }) => {
    return StationName.Zh_tw.includes(search.value);
  });
});

function fetchBikeInfo(coord: Coordinate) {
  isLoading.value = true;
  Promise.all([fetchNearByStation(coord), fetchNearByAvailability(coord)])
    .then(([{ data: stations }, { data: available }]) => {
      const availableInfo = available?.value ?? [];

      bikeStations.value = stations?.value ?? [];
      availableMap.value = availableInfo.reduce((map, info) => {
        map[info.StationUID] = info;
        return map;
      }, {});
      changeSort(currentSort.value);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

async function changeSort(sortKey: BicycleSortType) {
  const isAsc = sortKey === 'distance';

  isLoading.value = true;
  await sleep();
  bikeInfo.value.sort((a, b) => {
    return isAsc
      ? a[sortKey] - b[sortKey]
      : (b[sortKey] ?? 0) - (a[sortKey] ?? 0);
  });
  isLoading.value = false;
}

watch(mapCenterPos, fetchBikeInfo, { immediate: true });
watch(currentSort, changeSort);
watch([filterStations, availableMap], ([stations, available]) => {
  setBikeInfo(stations, available);
});
onBeforeUnmount(() => {
  bikeInfo.value = [];
});
</script>

<template>
  <div>
    <bike-switch
      v-model:currentSwitch="currentSwitch"
      :is-show-menu="isShowMenu"
      :options="bicycleSwitch"
    />
    <client-only>
      <teleport to="#bikeInfo">
        <div class="info_header">
          <search-bar v-model="search" type="text" placeholder="搜尋站點或鄰近地點" />
          <sort-button v-model:currentSort="currentSort" :options="bicycleSortOptions" />
        </div>
        <transition name="page" mode="out-in">
          <loading v-if="isLoading" />
          <bicycle-info v-else :bike-info="bikeInfo" />
        </transition>
      </teleport>
    </client-only>
  </div>
</template>
