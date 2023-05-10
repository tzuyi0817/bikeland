<script setup lang="ts">
const isShowMenu = ref(false);

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value;
}
</script>

<template>
  <div class="sortButton">
    <button class="button_primary flex gap-1 items-center" @click="toggleMenu">
      <client-only>
        <font-awesome-icon :icon="['fas', 'sort-amount-down']" />
      </client-only>
      <span>排序</span>
    </button>
    <menu :class="[isShowMenu ? 'scale-y-100' : 'scale-y-0']">
      <li>距離較近</li>
      <li>可借車數</li>
      <li>可還車數</li>
    </menu>
  </div>
</template>

<style lang="postcss" scoped>
.sortButton {
  @apply relative;
  menu {
    @apply
    absolute
    left-1/2
    bottom-0
    bg-white
    border-[1px]
    border-primary-300
    rounded-lg
    px-3
    py-1
    -translate-x-1/2
    translate-y-[calc(100%+5px)]
    transition-transform
    origin-top
    shadow-[4px_4px_20px_rgba(118,118,118,0.3)];
    li {
      @apply px-1 py-2 text-primary-400 whitespace-nowrap;
      &:nth-of-type(1), &:nth-of-type(2) {
        @apply border-b-[1px] border-grey-300;
      }
    }
  }
}
</style>
