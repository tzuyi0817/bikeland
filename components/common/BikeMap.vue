<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from '@vue-leaflet/vue-leaflet';
import MapMarker from '@/components/common/MapMarker.vue';
import BicycleCard from '@/components/bicycle/BicycleCard.vue';
import { bikeMarkerColor, bikeMarkerHoleColor } from '@/utils/bike';
import type { Coordinate } from '@/types/common';

const map = ref<typeof LMap>();
const { mapZoom, mapCenterPos, bikeMarkers } = useMap();
const { toggleCard } = useCard();
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
        v-for="info in bikeMarkers"
        :key="info.StationUID"
        :lat-lng="[info.StationPosition.PositionLat, info.StationPosition.PositionLon]"
        @click="toggleCard(true, info);"
      >
        <l-icon class-name="marker_map">
          <div :class="`marker_map_available ${bikeMarkerColor(info.available)}`">{{ info.available }}</div>
          <map-marker :class="`relative ${bikeMarkerColor(info.available)} z-[2]`" width="37.74" height="44" />
          <div :class="`marker_map_hole ${bikeMarkerHoleColor(info.available)}`"></div>
        </l-icon>
        <l-popup>
          <BicycleCard />
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="postcss" scoped>
:deep(.leaflet-popup) {
  @apply mb-0;
}

:deep(.leaflet-popup-content-wrapper) {
  @apply bg-transparent rounded-lg p-0;
}

:deep(.leaflet-popup-content) {
  @apply m-0 !w-fit;
  p {
    @apply m-0;
  }
}

:deep(.leaflet-popup-tip-container) {
  @apply hidden;
}
</style>
