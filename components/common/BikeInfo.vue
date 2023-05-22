<script setup lang="ts">
const isShowInfo = ref(false);

function toggleInfo() {
  isShowInfo.value = !isShowInfo.value;
}
</script>

<template>
  <div :class="['bikeInfo', isShowInfo ? 'translate-y-0' : 'translate-y-[calc(100%-210px)]']">
    <div class="bikeInfo_content">
      <div id="bikeInfo"></div>
    </div>
    <div class="bikeInfo_collapse" @click="toggleInfo">
      <img
        src="@/assets/images/icon/triangle.svg"
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
    @apply h-full px-3 py-5 rounded-lg bg-white shadow-[0px_-2px_4px_rgba(118,118,118,0.3)];
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
</style>
