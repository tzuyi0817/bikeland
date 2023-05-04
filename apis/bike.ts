import generateParams from '@/utils/generateParams';
import type { Coordinate } from '@/types/common';

export function fetchNearByStation({ lat, lng }: Coordinate) {
  const params = generateParams({
    $spatialFilter: `nearby(${lat}, ${lng}, 1000)`,
  });

  return useRequest(`/advanced/v2/Bike/Station/NearBy?${params}`, { method: 'get' });
}

export function fetchNearByAvailability({ lat, lng }: Coordinate) {
  const params = generateParams({
    $spatialFilter: `nearby(${lat}, ${lng}, 1000)`,
  });

  return useRequest(`/advanced/v2/Bike/Availability/NearBy?${params}`, { method: 'get' });
}
