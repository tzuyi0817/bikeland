<script setup lang="ts">
import SearchBar from '@/components/common/SearchBar.vue';

const isShowInfo = ref(false);
const search = ref('');

function toggleInfo() {
  isShowInfo.value = !isShowInfo.value;
}
</script>

<template>
  <div :class="['bikeInfo', isShowInfo ? 'translate-y-0' : 'translate-y-3/4']">
    <div class="bikeInfo_content">
      <div class="flex gap-3 items-center">
        <search-bar
          v-model="search"
          class="flex-1"
          type="text"
          placeholder="搜尋站點或鄰近地點"
        />
        <button class="button_primary flex gap-1 items-center">
          <client-only>
            <font-awesome-icon :icon="['fas', 'sort-amount-down']" />
          </client-only>
          <span>排序</span>
        </button>
      </div>
      <div id="bikeInfo"></div>
    </div>
    <div class="bikeInfo_collapse" @click="toggleInfo">
      <img
        src="@/assets/images/triangle.svg"
        :class="[isShowInfo ? 'rotate-180' : 'rotate-0']"
        width="10"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bikeInfo {
  @apply fixed bottom-0 w-full transition-transform duration-300 h-3/4;
  &_content {
    @apply h-full px-6 py-5 rounded-lg bg-white shadow-[0px_-2px_4px_rgba(118,118,118,0.3)];
  }
  &_collapse {
    @apply
    absolute
    bg-white
    top-0
    left-1/2
    -translate-x-1/2
    -translate-y-full
    px-5
    py-1
    rounded-t-lg
    z-10
    shadow-[0px_-2px_4px_rgba(118,118,118,0.3)];
  }
}

#bikeInfo {
  @apply mt-5 overflow-y-auto h-[calc(100%-54px)];
}
</style>
