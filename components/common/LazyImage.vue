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
  <img
    ref="imageRef"
    class="w-full h-full object-cover transition-[scaleX_scaleY] duration-300 hover:scale-125"
    :data-src="src"
    :alt="alt"
  >
</template>
