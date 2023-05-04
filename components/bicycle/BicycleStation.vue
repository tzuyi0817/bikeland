<script setup lang="ts">
import { fetchNearByStation } from '@/apis/bike';

const { data, refresh, pending } = fetchNearByStation({ lat: 25.0802696, lng: 121.5674925 });
</script>

<template>
  <div class="bicycleStation">
    Station
  </div>
</template>
