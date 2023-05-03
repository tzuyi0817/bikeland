import type { FetchResponse } from 'ofetch';
import type { UseFetchOptions } from '#app';

interface RequestOptions {

}

function useRequest(url: string, options: UseFetchOptions<RequestOptions>) {
  return useFetch(url, {
    onRequest({ options }) {
      const token = useCookie('bike_land_token');
      const { public: { apiUrl } } = useRuntimeConfig();

      options.baseURL = apiUrl;
      console.log({ token: token.value });
      if (!token.value) return;
      options.headers = new Headers(options.headers);
      options.headers.set('Authorization', `Bearer ${token.value}`);
      console.log({ options });
    },
    onResponse({ response }) {
      if (response.headers.get('content-disposition') && response.status === 200)
        return response;

      return response._data;
    },
    onResponseError({ response }) {
      const { status, statusText } = response;

      // if (statusText === 'Unauthorized') {}
      return Promise.reject(response?._data ?? null);
    },
    ...options,
  });
}

function handleError(response: FetchResponse<any> & FetchResponse<ResponseType>) {

}

export default useRequest;
