<script setup lang="ts">
interface Props {
  width?: string;
  height?: string;
}

withDefaults(defineProps<Props>(), {
  width: '12.8',
  height: '16',
});
</script>

<template>
  <svg :width="width" :height="height" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.8692 0C8.46528 0 0.000192097 8.55766 0.000192097 19.0634C-0.0682079 34.431 18.1521
      47.1733 18.8692 47.6883C18.8692 47.6883 37.8065 34.431 37.7381 19.0753C37.7381 8.55767 29.273
      0 18.8692 0ZM18.8692 28.613C13.6566 28.613 9.43468 24.3449 9.43468 19.0753C9.43468 13.8058
      13.6566 9.53766 18.8692 9.53766C24.0817 9.53766 28.3036 13.8058 28.3036 19.0753C28.3036 24.3449
      24.0817 28.613 18.8692 28.613Z"
      fill="currentColor"
    />
  </svg>
</template>
