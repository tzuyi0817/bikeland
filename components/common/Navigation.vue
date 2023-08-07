<script setup lang="ts">
import BikeMenu from '@/components/common/BikeMenu.vue';

const { isShowMenu, toggleMenu } = useMenu();
</script>

<template>
  <div class="fixed w-full">
    <header class="navigation">
      <img src="@/assets/images/logo-light.png" class="w-[106px] md:w-52" alt="LOGO" />
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-white text-base md:!hidden"
          @click="toggleMenu"
        />
      </client-only>
    </header>
    <bike-menu :is-show-menu="isShowMenu" @toggle-menu="toggleMenu" />
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
  bg-primary-400
  md:h-auto
  md:px-[72px]
  md:py-5;
}
</style>
