import type { Coordinate } from '@/types/common';

export function fetchNearByStation({ lat, lng }: Coordinate) {
  const params = {
    $spatialFilter: `nearby(${lat}, ${lng}, 1000)`,
    $format: 'JSON',
  };

  return useRequest('/advanced/v2/Bike/Station/NearBy', { method: 'get', params });
}

export function fetchNearByAvailability({ lat, lng }: Coordinate) {
  const params = {
    $spatialFilter: `nearby(${lat}, ${lng}, 1000)`,
    $format: 'JSON',
  };

  return useRequest('/advanced/v2/Bike/Availability/NearBy', { method: 'get', params });
}

export function fetchCyclingShape(city: string) {
  const params = {
    $format: 'JSON',
  };

  return useRequest(`/basic/v2/Cycling/Shape/City/${city}`, { method: 'get', params });
}
