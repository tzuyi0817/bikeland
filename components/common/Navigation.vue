<script setup lang="ts">
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
    <client-only>
      <nav :class="['navigation_menu', isShowMenu ? 'translate-y-0' : '-translate-y-full']">
        <ul class="flex h-[60px] bg-primary-100 py-2 text-primary-400">
          <li>
            <nuxt-link class="border-r-[1px] border-primary-300">
              <font-awesome-icon :icon="['fas', 'bicycle']" />
              <p>找單車</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="border-r-[1px] border-primary-300">
              <font-awesome-icon :icon="['fas', 'route']" />
              <p>找路線</p>
            </nuxt-link>
          </li>
          <li>
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
  &_menu {
    @apply absolute top-[34px] left-0 w-full transition-transform duration-300;
    li {
      @apply flex-1;
      a {
        @apply flex flex-col gap-1 justify-center items-center py-1;
      }
      p {
        @apply text-xs font-bold;
      }
    }
  }
}
</style>
