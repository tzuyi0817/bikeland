<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCityStore } from '@/store';
import SearchBar from '@/components/common/SearchBar.vue';
import SortButton from '@/components/common/SortButton.vue';
import Loading from '@/components/common/Loading.vue';
import RouteInfo from '@/components/route/RouteInfo.vue';
import { fetchCyclingShape } from '@/apis/bike';
import { sleep } from '@/utils/common';
import type { RouteShape } from '@/types/route';
import type { RouteSortType } from '@/types/sort';

const isLoading = ref(false);
const search = ref('');
const currentSort = ref<RouteSortType>('cyclingLengthShort');
const { city } = storeToRefs(useCityStore());
const { data, pending, refresh } = await fetchCyclingShape(city.value);
const routeSortOptions = [
  { name: '總長較短', value: 'cyclingLengthShort' },
  { name: '總長較長', value: 'cyclingLengthLong' },
];

const routes = computed<RouteShape[]>(() => {
  const routes = data?.value ?? [];

  return routes.filter(({ RouteName }) => RouteName.includes(search.value));
});

async function changeSort(sortKey: RouteSortType) {
  const isShort = sortKey === 'cyclingLengthShort';

  isLoading.value = true;
  await sleep();
  routes.value.sort((a, b) => {
    return isShort
      ? a.CyclingLength - b.CyclingLength
      : b.CyclingLength - a.CyclingLength;
  });
  isLoading.value = false;
}

watch(city, () => refresh());
watch(currentSort, changeSort);
</script>

<template>
  <div>
    <teleport to="#bikeInfo">
      <div class="info_header">
        <search-bar v-model="search" type="text" placeholder="搜尋路線或鄰近地點" />
        <sort-button v-model:currentSort="currentSort" :options="routeSortOptions" />
      </div>
      <transition name="page" mode="out-in">
        <loading v-if="isLoading || pending" />
        <route-info v-else :route-info="routes" />
      </transition>
    </teleport>
  </div>
</template>
