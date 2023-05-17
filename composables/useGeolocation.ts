function useGeolocation() {
  const position = ref({ lat: 24.91571, lng: 121.6739 });

  function success({ coords }: GeolocationPosition) {
    position.value = { lat: coords.latitude, lng: coords.longitude };
  }

  onMounted(() => {
    navigator.geolocation?.getCurrentPosition(success);
  });

  return {
    position,
  };
}

export default useGeolocation;
