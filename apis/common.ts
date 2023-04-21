import type { TDXToken } from '@/types/common';

export async function updateToken() {
  const token = useCookie('bike_land_token');
  const expires = useCookie('bike_land_expires') ?? 0;

  if (token.value && Date.now() < +expires) return;
  const { public: { tokenUrl, clientId, clientSecret } } = useRuntimeConfig();
  const { data } = await useFetch('/token', {
    headers: {
      baseURL: tokenUrl,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    body: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    },
  });
  const { access_token, expires_in } = data.value as TDXToken;
  const intervals = 4 * 60 * 60;
  const expiresIn = (expires_in - intervals) * 1000;

  token.value = access_token;
  expires.value = `${Date.now() + expiresIn}`;
}
