<script setup lang="ts">
interface Props {
  observer: IntersectionObserver | null;
  src?: string;
  alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
});
const imageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (!imageRef.value) return;
  props.observer?.observe(imageRef.value);
});

onBeforeUnmount(() => {
  if (!imageRef.value) return;
  props.observer?.unobserve(imageRef.value);
});
</script>

<template>
  <img ref="imageRef" :data-src="src" :alt="alt">
</template>
