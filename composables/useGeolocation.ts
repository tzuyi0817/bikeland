function useGeolocation() {
  const position = ref({ lat: 24.91571, lng: 121.6739 });

  function updateCurrentPosition() {
    navigator.geolocation?.getCurrentPosition(({ coords }: GeolocationPosition) => {
      position.value = { lat: coords.latitude, lng: coords.longitude };
    });
  }

  onMounted(updateCurrentPosition);

  return {
    position,
  };
}

export default useGeolocation;
