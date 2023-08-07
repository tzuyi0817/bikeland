<script setup lang="ts">
interface Props {
  isShowMenu: boolean;
}

defineProps<Props>();
const emit = defineEmits(['toggleMenu']);

function closeMenu() {
  emit('toggleMenu');
}
</script>

<template>
  <client-only>
    <nav :class="['bikeMenu', isShowMenu ? 'translate-y-0' : '-translate-y-full']">
      <ul class="flex h-[60px] bg-primary-100 py-2 text-primary-400 md:bg-transparent md:h-auto md:py-0 md:gap-4">
        <li class="bikeMenu_item" @click="closeMenu">
          <nuxt-link class="border-r-[1px] border-primary-300 md:border-none" to="/bicycle">
            <font-awesome-icon :icon="['fas', 'bicycle']" />
            <p>找單車</p>
          </nuxt-link>
        </li>
        <li class="bikeMenu_item" @click="closeMenu">
          <nuxt-link class="border-r-[1px] border-primary-300 md:border-none" to="/route">
            <font-awesome-icon :icon="['fas', 'route']" />
            <p>找路線</p>
          </nuxt-link>
        </li>
        <li class="bikeMenu_item" @click="closeMenu">
          <nuxt-link to="/attractions">
            <font-awesome-icon :icon="['fas', 'umbrella-beach']" />
            <p>找景點</p>
          </nuxt-link>
        </li>
      </ul>
      <section class="h-9 text-accent-600 flex justify-center items-center bg-accent-100 gap-1 md:hidden">
        <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-xs rotate-90" />
        <p class="font-bold text-xs">聯絡單車客服</p>
      </section>
    </nav>
  </client-only>
</template>

<style lang="postcss" scoped>
.bikeMenu {
  @apply
  absolute
  top-[34px]
  left-0
  w-full
  transition-transform
  duration-300
  md:left-auto
  md:top-5
  md:right-[72px]
  md:translate-y-0
  md:w-fit
  md:z-10;
  &_item {
    @apply flex-1;
    a {
      @apply
      flex
      flex-col
      gap-1
      justify-center
      items-center
      py-1
      md:flex-row
      md:whitespace-nowrap
      md:bg-grey-100
      md:rounded-lg
      md:outline
      md:outline-1
      md:outline-primary-300
      md:px-4
      md:py-[6px]
      md:hover:bg-primary-100
      md:transition-colors
      md:duration-300
      md:disabled:bg-grey-100;
      &.router-link-active {
        @apply outline-[3px];
      }
    }
    p {
      @apply text-xs font-bold md:text-sm;
    }
  }
}
</style>
