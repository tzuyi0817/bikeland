<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';

const zoom = ref(17);
</script>

<template>
  <div class="fixed w-full h-full top-8">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[47.41322, -1.219482]"
      :min-zoom="2"
      :useGlobalLeaflet="false"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
    </l-map>
  </div>
</template>
