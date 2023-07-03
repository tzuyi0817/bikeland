import { useCityStore } from '@/store';
import { fetchGeoDistrict } from '@/apis/common';
import type { Coordinate } from '@/types/common';

function useGeolocation() {
  const position = ref({ lat: 24.91571, lng: 121.6739 });
  const isUpdatingPosition = ref(false);

  function updateCurrentPosition() {
    isUpdatingPosition.value = true;
    navigator.geolocation?.getCurrentPosition(async({ coords }: GeolocationPosition) => {
      position.value = { lat: coords.latitude, lng: coords.longitude };
      await fetchCurrentCity({ lat: coords.latitude, lng: coords.longitude });
      isUpdatingPosition.value = false;
    }, async(error) => {
      await fetchCurrentCity(position.value);
      isUpdatingPosition.value = false;
      throw new Error(error.message, { cause: error });
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
    isUpdatingPosition,
    updateCurrentPosition,
  };
}

export default useGeolocation;
