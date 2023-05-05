import type { FetchResponse } from 'ofetch';
import type { UseFetchOptions } from '#app';

type Response<T> = Array<T>;

function useRequest(url: string, options: UseFetchOptions<Response<any>>) {
  return useFetch(url, {
    onRequest({ options }) {
      const token = useCookie('bike_land_token');
      const { public: { apiUrl } } = useRuntimeConfig();

      options.baseURL = apiUrl;
      if (!token.value) return;
      options.headers = new Headers(options.headers);
      options.headers.set('Authorization', `Bearer ${token.value}`);
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
