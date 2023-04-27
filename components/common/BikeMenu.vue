<script setup lang="ts">
interface Props {
  isShowMenu: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <client-only>
    <nav :class="['bikeMenu', isShowMenu ? 'translate-y-0' : '-translate-y-full']">
      <ul class="flex h-[60px] bg-primary-100 py-2 text-primary-400">
        <li class="bikeMenu_item">
          <nuxt-link class="border-r-[1px] border-primary-300">
            <font-awesome-icon :icon="['fas', 'bicycle']" />
            <p>找單車</p>
          </nuxt-link>
        </li>
        <li class="bikeMenu_item">
          <nuxt-link class="border-r-[1px] border-primary-300">
            <font-awesome-icon :icon="['fas', 'route']" />
            <p>找路線</p>
          </nuxt-link>
        </li>
        <li class="bikeMenu_item">
          <nuxt-link>
            <font-awesome-icon :icon="['fas', 'umbrella-beach']" />
            <p>找景點</p>
          </nuxt-link>
        </li>
      </ul>
      <div class="h-9 text-accent-600 flex justify-center items-center bg-accent-100 gap-1">
        <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-xs rotate-90" />
        <p class="font-bold text-xs">聯絡單車客服</p>
      </div>
    </nav>
  </client-only>
</template>

<style lang="postcss" scoped>
.bikeMenu {
  @apply absolute top-[34px] left-0 w-full transition-transform duration-300;
  &_item {
    @apply flex-1;
    a {
      @apply flex flex-col gap-1 justify-center items-center py-1;
    }
    p {
      @apply text-xs font-bold;
    }
  }
}
</style>
