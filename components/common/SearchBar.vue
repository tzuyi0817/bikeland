<script setup lang="ts">
import { debounce } from '@/utils/common';

interface Props {
  type?: string;
  placeholder: string;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});
const emit = defineEmits(['update:modelValue']);
const search = ref('');
const changeSearch = debounce(() => emit('update:modelValue', search.value), 500);
</script>

<template>
  <div class="relative flex-1">
    <input
      v-model="search"
      class="searchBar"
      :type="type"
      :placeholder="placeholder"
      @input="changeSearch"
    />
    <client-only>
      <font-awesome-icon
        class="absolute right-4 top-1/2 -translate-y-1/2 text-grey-500 text-sm"
        :icon="['fas', 'search']"
      />
    </client-only>
  </div>
</template>

<style lang="postcss" scoped>
.searchBar {
  @apply
  w-full
  pl-4
  pr-9
  py-2
  bg-grey-200
  rounded-lg
  text-xs
  tracking-wide
  focus:outline-1
  focus:outline-primary-300
  md:text-sm;
  &::placeholder {
    @apply text-grey-500;
  }
}
</style>
