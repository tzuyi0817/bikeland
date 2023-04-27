<script setup lang="ts">
import BikeMenu from '@/components/common/BikeMenu.vue';
import BikeSwitch from '@/components/common/BikeSwitch.vue';

const isShowMenu = ref(false);

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value;
}
</script>

<template>
  <div class="fixed w-full">
    <header class="navigation">
      <img src="@/assets/images/logo-light.png" width="106" alt="LOGO" />
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-white text-base"
          @click="toggleMenu"
        />
      </client-only>
    </header>
    <bike-menu :is-show-menu="isShowMenu" />
    <bike-switch :is-show-menu="isShowMenu" />
  </div>
</template>

<style lang="postcss" scoped>
.navigation {
  @apply
  h-[34px]
  relative
  flex
  justify-between
  items-center
  px-5
  z-10
  bg-primary-400;
}
</style>
