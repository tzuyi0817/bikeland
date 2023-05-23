<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import MapMarker from '@/components/common/MapMarker.vue';
import { bikeMarkerColor, bikeMarkerHoleColor } from '@/utils/bike';
import type { Coordinate } from '@/types/common';

const map = ref<typeof LMap>();
const { mapZoom, mapCenterPos, bikeMarkers } = useMap();
const { position } = useGeolocation();
const { public: { mapToken, mapStyle } } = useRuntimeConfig();
const attribution = 'Imagery &copy; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>';

function mapReCenter(coord: Coordinate) {
  mapCenterPos.value = coord;
}

watch(position, mapReCenter);
onMounted(() => {
  // console.log(map.value);
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
        :attribution="attribution"
        :url="`https://api.mapbox.com/styles/v1/tzuyi/${mapStyle}/tiles/256/{z}/{x}/{y}@2x?access_token=${mapToken}`"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="[position.lat, position.lng]">
        <l-icon class-name="marker_self"><div></div></l-icon>
      </l-marker>
      <l-marker
        v-for="{ id, stationPosition, available } in bikeMarkers"
        :key="id"
        :lat-lng="[stationPosition.PositionLat, stationPosition.PositionLon]"
      >
        <l-icon class-name="marker_map">
          <div :class="`marker_map_available ${bikeMarkerColor(available)}`">{{ available }}</div>
          <map-marker :class="`relative ${bikeMarkerColor(available)} z-[2]`" width="37.74" height="44" />
          <div :class="`marker_map_hole ${bikeMarkerHoleColor(available)}`"></div>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>
