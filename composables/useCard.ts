import { LMarker } from '@vue-leaflet/vue-leaflet';
import type { BikeInfo } from '@/types/bike';

function useCard() {
  const cardInfo = useState<Partial<BikeInfo>>('cardInfo', () => ({}));
  const mapMarkers = useState<typeof LMarker[]>('mapMarkers', () => []);

  function toggleCard(info: Partial<BikeInfo> = {}, isFromMap = true) {
    cardInfo.value = info;
    if (isFromMap) return;
    const marker = mapMarkers.value.find(marker => marker.name === info.StationUID);

    marker?.leafletObject.openPopup();
  }

  function setMarkers(markers?: typeof LMarker[]) {
    if (!markers) return;
    mapMarkers.value = markers;
  }

  return {
    cardInfo,
    toggleCard,
    setMarkers,
  };
}

export default useCard;
