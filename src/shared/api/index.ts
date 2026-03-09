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

const logOnDev = (message: string) => {
  if (process.env.NODE_ENV !== 'production' || isServer) {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).format(new Date()),
      message
    );
  }
};

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
  const requestUrl = buildUrl(url, params);
  const runtime = isServer ? 'server' : 'client';

  logOnDev(`🚀 [API:${runtime}] ${method} ${requestUrl} | Request`);

  try {
    const response = await fetch(requestUrl, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      next,
    });

    logOnDev(`✅ [API:${runtime}] ${method} ${requestUrl} | Response ${response.status}`);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = (await response.json()) as T;

    return { data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logOnDev(`🚨 [API:${runtime}] ${method} ${requestUrl} | Error ${message}`);
    throw error;
  }
};
