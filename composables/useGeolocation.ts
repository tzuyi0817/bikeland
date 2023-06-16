import { useCityStore } from '@/store';
import { fetchGeoDistrict } from '@/apis/common';
import type { Coordinate } from '@/types/common';

function useGeolocation() {
  const position = ref({ lat: 24.91571, lng: 121.6739 });

  function updateCurrentPosition() {
    navigator.geolocation?.getCurrentPosition(({ coords }: GeolocationPosition) => {
      position.value = { lat: coords.latitude, lng: coords.longitude };
      fetchCurrentCity({ lat: coords.latitude, lng: coords.longitude });
    });
  }

  async function fetchCurrentCity({ lat, lng }: Coordinate) {
    const { data } = await fetchGeoDistrict({ lat, lng });

    if (!data.value) return;
    const { City, TownName } = data.value[0];

    useCityStore().setCity(City);
    useCityStore().setTownName(TownName);
  }

  onMounted(updateCurrentPosition);

  return {
    position,
    updateCurrentPosition,
  };
}

export default useGeolocation;
