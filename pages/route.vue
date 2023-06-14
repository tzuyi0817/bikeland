<script setup lang="ts">
import SearchBar from '@/components/common/SearchBar.vue';
import SortButton from '@/components/common/SortButton.vue';

const isLoading = ref(false);
const search = ref('');
const currentSort = ref<'distance'>('distance');
const routeSortOptions = [
  { name: '距離較近', value: 'distance' },
];
</script>

<template>
  <div>
    <teleport to="#bikeInfo">
      <div class="info_header">
        <search-bar v-model="search" type="text" placeholder="搜尋路線或鄰近地點" />
        <sort-button v-model:currentSort="currentSort" :options="routeSortOptions" />
      </div>
      <!-- <transition name="page" mode="out-in">
        <p v-if="isLoading">Loading..</p>
        <bicycle-info v-else :bike-info="bikeInfo" />
      </transition> -->
    </teleport>
  </div>
</template>
