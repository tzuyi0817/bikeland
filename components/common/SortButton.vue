<script setup lang="ts">
interface Props {
  currentSort: string;
  options: Array<Record<string, string>>;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:currentSort']);
const isShowMenu = ref(false);

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value;
}

function toggleSort(type: string) {
  emit('update:currentSort', type);
  toggleMenu();
}
</script>

<template>
  <div class="sortButton">
    <button class="button_primary flex gap-1 items-center" @click="toggleMenu">
      <client-only>
        <font-awesome-icon :icon="['fas', 'sort-amount-down']" />
      </client-only>
      <span class="md:text-sm">排序</span>
    </button>
    <menu :class="[isShowMenu ? 'scale-y-100' : 'scale-y-0']">
      <li
        v-for="{ name, value } in options"
        :key="value"
        :class="{ 'sortButton-active': currentSort === value }"
        @click="toggleSort(value)"
      >
        {{ name }}
      </li>
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
    p-1
    -translate-x-1/2
    translate-y-[calc(100%+5px)]
    transition-transform
    origin-top
    shadow-[4px_4px_20px_rgba(118,118,118,0.3)];
    li {
      @apply
      px-1
      py-2
      text-primary-400
      whitespace-nowrap
      text-xs
      cursor-pointer
      transition-colors
      rounded
      hover:bg-primary-100
      hover:outline
      hover:outline-[1px]
      hover:outline-primary-300
      md:text-sm;
      &:nth-of-type(1), &:nth-of-type(2) {
        @apply border-b-[1px] border-grey-300;
      }
    }
  }
  &-active {
    @apply bg-primary-100 outline outline-[1px] outline-primary-300;
  }
}
</style>
