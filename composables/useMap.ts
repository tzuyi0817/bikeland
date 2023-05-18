import { calculateDistance } from '@/utils/common';
import type { Coordinate } from '@/types/common';
import type { BikeInfo, BikeStation, AvailableBike } from '@/types/bike';

function useMap() {
  const mapZoom = useState('mapZoom', () => 20);
  const mapCenterPos = useState<Coordinate>('mapCenterPos', () => ({ lat: 25.0802696, lng: 121.5674925 }));
  const bikeInfo = useState<BikeInfo[]>('bikeInfo', () => []);

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
    setBikeInfo,
  };
}

export default useMap;
