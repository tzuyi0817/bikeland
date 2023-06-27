<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCityStore } from '@/store';
import BikeSwitch from '@/components/common/BikeSwitch.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import SortButton from '@/components/common/SortButton.vue';
import Loading from '@/components/common/Loading.vue';
import AttractionsInfo from '@/components/attractions/AttractionsInfo.vue';
import AttractionsDescription from '@/components/attractions/AttractionsDescription.vue';
import { fetchScenicSpot, fetchRestaurant } from '@/apis/bike';
import { onImageInView } from '@/utils/image';
import type { MenuOptions, Page } from '@/types/common';
import type { Attractions } from '@/types/attractions';
import type { BicycleSortType } from '@/types/sort';

type AttractionsType = 'umbrella-beach' | 'utensils';

const { isShowMenu } = useMenu();
const { currentSwitch, attractions: attractionsForMap } = useMap();
const { city, townName } = storeToRefs(useCityStore());
const currentAttraction = useState<Attractions | null>('currentAttraction');
const attractions = ref<Attractions[]>([]);
const isLoading = ref(false);
const search = ref('');
const currentSort = ref<BicycleSortType>('distance');
const observer = useIntersectionObserver(onImageInView, {});
const attractionsSwitch: MenuOptions = [
  { value: 'umbrella-beach', name: '找景點' },
  { value: 'utensils', name: '找餐廳' },
];
const bicycleSortOptions = [
  { name: '距離較近', value: 'distance' },
  { name: '可借車數', value: 'AvailableRentBikes' },
  { name: '可還車數', value: 'AvailableReturnBikes' },
];

currentSwitch.value = 'umbrella-beach';

const filterAttractions = computed(() => {
  return attractions.value.filter(({ ScenicSpotName, RestaurantName }) => {
    const nameMap = {
      'umbrella-beach': ScenicSpotName,
      utensils: RestaurantName,
    };

    return isAttractions(currentSwitch.value)
      ? nameMap[currentSwitch.value].includes(search.value)
      : [];
  });
});

const searchBarPlaceholder = computed(() => {
  return `搜尋${currentSwitch.value === 'umbrella-beach' ? '景點' : '餐廳'}或鄰近地點`;
});

function isAttractions(type: Page): type is AttractionsType {
  return ['umbrella-beach', 'utensils'].includes(type);
}

async function fetchAttractions(type: AttractionsType, city: string, townName: string) {
  const apiMap = {
    'umbrella-beach': fetchScenicSpot,
    utensils: fetchRestaurant,
  };
  isLoading.value = true;
  attractions.value = [];
  const { data } = await apiMap[type](city, townName);

  attractions.value = data?.value ?? [];
  isLoading.value = false;
}

watch([currentSwitch, city, townName], ([type, city, townName]) => {
  currentAttraction.value = null;
  isAttractions(type) && city && townName
    ? fetchAttractions(type, city, townName)
    : attractions.value = [];
}, { immediate: true });
watch(filterAttractions, (attractions) => {
  attractionsForMap.value = attractions;
});
onBeforeUnmount(() => {
  attractionsForMap.value = [];
});
</script>

<template>
  <div>
    <bike-switch
      v-model:currentSwitch="currentSwitch"
      :is-show-menu="isShowMenu"
      :options="attractionsSwitch"
    />
    <client-only>
      <teleport to="#bikeInfo">
        <div class="info_header">
          <search-bar v-model="search" type="text" :placeholder="searchBarPlaceholder" />
          <sort-button v-model:currentSort="currentSort" :options="bicycleSortOptions" />
        </div>
        <transition name="page" mode="out-in">
          <loading v-if="isLoading" />
          <attractions-info v-else :attractions-info="filterAttractions" :observer="observer" />
        </transition>
      </teleport>
    </client-only>
    <attractions-description />
  </div>
</template>
