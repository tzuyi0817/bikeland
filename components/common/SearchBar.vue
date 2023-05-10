<script setup lang="ts">
interface Props {
  type?: string;
  placeholder: string;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="relative flex-1">
    <input
      class="searchBar"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
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
  focus:outline-1
  focus:outline-primary-300;
  &::placeholder {
    @apply text-grey-500;
  }
}
</style>
