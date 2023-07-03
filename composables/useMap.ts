import { calculateDistance } from '@/utils/common';
import type { Coordinate, Page } from '@/types/common';
import type { BikeInfo, BikeStation, AvailableBike } from '@/types/bike';
import type { RouteShape } from '@/types/route';
import type { Attractions } from '@/types/attractions';

function useMap() {
  const mapZoom = useState('mapZoom', () => 16);
  const mapCenterPos = useState<Coordinate>('mapCenterPos', () => ({ lat: 24.91571, lng: 121.6739 }));
  const currentSwitch = useState<Page>('currentSwitch', () => 'default');
  const bikeInfo = useState<BikeInfo[]>('bikeInfo', () => []);
  const routeShape = useState<RouteShape | null>('routeShape', () => null);
  const attractions = useState<Attractions[]>('attractions', () => []);
  const currentAttraction = useState<Attractions | null>('currentAttraction', () => null);
  const bikeMarkers = computed(() => {
    const markerMap = {
      bicycle() {
        return bikeInfo.value.map((info) => {
          return { ...info, available: info.AvailableRentBikes };
        });
      },
      parking() {
        return bikeInfo.value.map((info) => {
          return { ...info, available: info.AvailableReturnBikes };
        });
      },
      'umbrella-beach': () => [],
      utensils: () => [],
      default: () => [],
    };
    return markerMap[currentSwitch.value]();
  });

  const routePolyline = computed(() => {
    if (!routeShape.value) return [];
    const geometry = routeShape.value.Geometry
      .replace('MULTILINESTRING ((', '')
      .slice(0, -2)
      .split(',');

    return geometry.map(geo => geo.split(' ').reverse());
  });

  function setBikeInfo(stations: Array<BikeStation>, availableMap: Record<string, AvailableBike>) {
    bikeInfo.value = stations.map((station) => {
      const { StationUID, StationPosition: { PositionLat, PositionLon } } = station;
      const availableBike = availableMap[StationUID] ?? {};
      const stationCoord = { lat: PositionLat, lng: PositionLon };
      const distance = calculateDistance(mapCenterPos.value, stationCoord);

      return { ...station, ...availableBike, distance };
    });
  }

  return {
    mapZoom,
    bikeInfo,
    mapCenterPos,
    currentSwitch,
    routeShape,
    attractions,
    currentAttraction,
    bikeMarkers,
    routePolyline,
    setBikeInfo,
  };
}

export default useMap;
