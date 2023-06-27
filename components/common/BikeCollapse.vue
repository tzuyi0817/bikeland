<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits(['toggle']);
</script>

<template>
  <div class="bikeCollapse" @click="emit('toggle')">
    <img
      src="@/assets/images/icon/triangle.svg"
      :class="[isOpen ? 'rotate-180' : 'rotate-0']"
      width="10"
      alt="triangle svg"
    />
  </div>
</template>

<style lang="postcss" scoped>
.bikeCollapse {
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
</style>
