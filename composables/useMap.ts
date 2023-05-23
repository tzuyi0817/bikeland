import { calculateDistance } from '@/utils/common';
import type { Coordinate, Page } from '@/types/common';
import type { BikeInfo, BikeStation, AvailableBike } from '@/types/bike';

function useMap() {
  const mapZoom = useState('mapZoom', () => 16);
  const mapCenterPos = useState<Coordinate>('mapCenterPos', () => ({ lat: 25.0802696, lng: 121.5674925 }));
  const currentSwitch = useState<Page>('currentSwitch', () => 'default');
  const bikeInfo = useState<BikeInfo[]>('bikeInfo', () => []);
  const bikeMarkers = computed(() => {
    const markerMap = {
      bicycle() {
        return bikeInfo.value.map(({ StationUID, StationPosition, AvailableRentBikes }) => {
          return { id: StationUID, stationPosition: StationPosition, available: AvailableRentBikes };
        });
      },
      parking() {
        return bikeInfo.value.map(({ StationUID, StationPosition, AvailableReturnBikes }) => {
          return { id: StationUID, stationPosition: StationPosition, available: AvailableReturnBikes };
        });
      },
      default: () => [],
    };
    return markerMap[currentSwitch.value]();
  });

  function setBikeInfo(stations: Array<BikeStation>, available: Array<AvailableBike>) {
    bikeInfo.value = stations.map((station) => {
      const { StationUID, StationPosition: { PositionLat, PositionLon } } = station;
      const availableBike = available.find(bike => bike.StationUID === StationUID) ?? {};
      const stationCoord = { lat: PositionLat, lng: PositionLon };

      return {
        ...station,
        ...availableBike,
        distance: calculateDistance(mapCenterPos.value, stationCoord),
      };
    });
  }

  return {
    mapZoom,
    bikeInfo,
    mapCenterPos,
    currentSwitch,
    bikeMarkers,
    setBikeInfo,
  };
}

export default useMap;
