<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LIcon, LPopup, LPolyline, LTooltip } from '@vue-leaflet/vue-leaflet';
import MapMarker from '@/components/common/MapMarker.vue';
import PositionButton from '@/components/common/PositionButton.vue';
import BicycleCard from '@/components/bicycle/BicycleCard.vue';
import { bikeMarkerColor, bikeMarkerHoleColor } from '@/utils/bike';
import type { Coordinate } from '@/types/common';

const map = ref<typeof LMap>();
const markers = ref();
const { mapZoom, mapCenterPos, bikeMarkers, routePolyline, routeShape } = useMap();
const { toggleCard, setMarkers } = useCard();
const { isShowInfo } = useInfo();
const { position, updateCurrentPosition } = useGeolocation();
const { public: { mapToken, mapStyle } } = useRuntimeConfig();
const attribution = 'Imagery &copy; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>';

const routePoints = computed(() => {
  const size = routePolyline.value.length;
  if (!routeShape.value || !size) return [];
  const startPoint = routePolyline.value[0];
  const lastPoint = routePolyline.value[size - 1];
  const { RoadSectionStart, RoadSectionEnd } = routeShape.value;

  return [
    { id: 0, latLng: [startPoint[0], startPoint[1]], roadSection: RoadSectionStart },
    { id: 1, latLng: [lastPoint[0], lastPoint[1]], roadSection: RoadSectionEnd },
  ];
});

function mapReCenter(coord: Coordinate) {
  mapCenterPos.value = coord;
  mapFlyTo(coord);
}

function mapFlyTo(coord: Coordinate) {
  map.value?.leafletObject?.flyTo([coord.lat, coord.lng]);
}

watch(markers, setMarkers);
watch(position, mapReCenter);
watch(routePolyline, (polyline) => {
  if (polyline) {
    const [lat, lng] = polyline[Math.floor(polyline.length / 2)];

    mapFlyTo({ lat: +lat, lng: +lng });
    return;
  }
  mapFlyTo(position.value);
});
</script>

<template>
  <div class="fixed w-full h-full top-8">
    <l-map
      ref="map"
      v-model:zoom="mapZoom"
      :center="[mapCenterPos.lat, mapCenterPos.lng]"
      :min-zoom="2"
      :use-global-leaflet="false"
      @ready="mapFlyTo(mapCenterPos)"
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
        ref="markers"
        :key="info.StationUID"
        :name="info.StationUID"
        :lat-lng="[info.StationPosition.PositionLat, info.StationPosition.PositionLon]"
        @click="toggleCard(info);"
      >
        <l-icon class-name="marker_map" :icon-anchor="[19, 50]">
          <div :class="`marker_map_available w-6 h-5 translate-y-[29px] ${bikeMarkerColor(info.available)}`">
            {{ info.available }}
          </div>
          <map-marker :class="`relative ${bikeMarkerColor(info.available)} z-[2]`" width="37.74" height="44" />
          <div :class="`marker_map_hole ${bikeMarkerHoleColor(info.available)}`"></div>
        </l-icon>
        <l-popup>
          <BicycleCard />
        </l-popup>
      </l-marker>
      <l-polyline :lat-lngs="routePolyline" color="#E75578" :weight="4"></l-polyline>
      <template v-if="routePoints.length">
        <l-marker
          v-for="{ id, latLng, roadSection } in routePoints"
          :key="id"
          :lat-lng="latLng"
        >
          <l-icon class-name="marker_map" :icon-anchor="[15, 50]">
            <div class="marker_map_available w-5 h-4 translate-y-6"></div>
            <map-marker class="relative text-alert-500 z-[2]" width="28.8" height="36" />
          </l-icon>
          <l-tooltip
            :options="{ permanent: true, direction: 'top', offset: [0, -32] }"
            class="bg-alert-500 text-white"
          >
            {{ roadSection }}
          </l-tooltip>
        </l-marker>
      </template>
    </l-map>
  </div>
  <position-button :is-show-info="isShowInfo" @update-current-position="updateCurrentPosition" />
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

:deep(.leaflet-tooltip) {
  @apply bg-alert-500 rounded border-alert-500 px-3 py-1;
}

:deep(.leaflet-tooltip-top:before) {
  @apply hidden;
}
</style>
