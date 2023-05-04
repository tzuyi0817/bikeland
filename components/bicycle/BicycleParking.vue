<script setup lang="ts">
import { fetchNearByAvailability } from '@/apis/bike';

const { data, refresh, pending } = fetchNearByAvailability({ lat: 25.0802696, lng: 121.5674925 });
</script>

<template>
  <div class="bicycleParking">
    Parking
  </div>
</template>
