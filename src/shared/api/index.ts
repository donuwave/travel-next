import { API_BASE_URL } from '@/shared/config';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestConfig = {
  url: string;
  method?: HttpMethod;
  params?: Record<string, string | number | boolean | null | undefined>;
  body?: BodyInit | null;
  headers?: HeadersInit;
  next?: NextFetchRequestConfig;
};

const isServer = typeof window === 'undefined';

const buildUrl = (url: string, params?: RequestConfig['params']) => {
  const base = isServer ? API_BASE_URL : '';
  const requestUrl = new URL(url, `${base || 'http://localhost'}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || value === '') continue;
      requestUrl.searchParams.append(key, String(value));
    }
  }

  return isServer ? requestUrl.toString() : `${requestUrl.pathname}${requestUrl.search}`;
};

export const API = async <T>({
  url,
  method = 'GET',
  params,
  body,
  headers,
  next,
}: RequestConfig): Promise<{ data: T }> => {
  const response = await fetch(buildUrl(url, params), {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    next,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = (await response.json()) as T;

  return { data };
};
