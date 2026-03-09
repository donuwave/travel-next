export const API_PREFIX = '/api/v1';
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';

export const getApiUrl = (path: string) => {
  return `${API_PREFIX}${path.startsWith('/') ? path : `/${path}`}`;
};
