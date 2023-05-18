<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import type { Coordinate } from '@/types/common';

const map = ref<typeof LMap>();
const { mapZoom } = useMap();
const { position } = useGeolocation();

function mapReCenter(coord: Coordinate) {

}

onMounted(() => {
  console.log(map.value);
});
</script>

<template>
  <div class="fixed w-full h-full top-8">
    <l-map
      ref="map"
      v-model:zoom="mapZoom"
      :center="[position.lat, position.lng]"
      :min-zoom="2"
      :use-global-leaflet="false"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="[position.lat, position.lng]">
        <l-icon class-name="marker_self"><div></div></l-icon>
      </l-marker>
    </l-map>
  </div>
</template>
