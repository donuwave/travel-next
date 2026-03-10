export const API_PREFIX = '/api/v1';
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';

export const getApiUrl = (path: string) => {
  return `${API_PREFIX}${path.startsWith('/') ? path : `/${path}`}`;
};

export const getAssetUrl = (path?: string | null) => {
  if (!path) return '';
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  return new URL(path, API_BASE_URL).toString();
};
