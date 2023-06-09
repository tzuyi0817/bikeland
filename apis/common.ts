import type { TDXToken, Coordinate } from '@/types/common';

export async function updateToken() {
  const token = useCookie('bike_land_token', { sameSite: 'lax' });
  const expires = useCookie('bike_land_expires');

  if (token.value && Date.now() < (expires.value ? +expires.value : 0)) return;
  const { public: { tokenUrl, clientId, clientSecret } } = useRuntimeConfig();
  const { data } = await useFetch(`${tokenUrl}/token`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  if (!data.value) return;
  const {
    access_token: accessToken,
    expires_in: expiresIn,
  } = data.value as TDXToken;
  const intervals = 4 * 60 * 60;
  const expiresInterval = (expiresIn - intervals) * 1000;

  token.value = accessToken;
  expires.value = `${Date.now() + expiresInterval}`;
}

export function fetchGeoDistrict({ lat, lng }: Coordinate) {
  const params = {
    $format: 'JSON',
  };

  return useRequest(
    `/advanced/V3/Map/GeoLocating/District/LocationX/${lng}/LocationY/${lat}`,
    { method: 'get', params },
  );
}
