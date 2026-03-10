import { API } from '@/shared/api';
import { getApiUrl } from '@/shared/config';

import { convertCategory } from './getCategoryById.convertation';
import { IAPIGetCategoryById, ICategoryById, IGetCategoryById } from './getCategoryById.types';
import { ValidationSchema } from './getCategoryById.validation';

export const getCategoryByIdKey = 'getCategoryById';
const CATEGORY_SLUG_ENDPOINTS = new Set(['bus-tours', 'excursion-tours']);

export const getCategoryById = async ({ id }: IGetCategoryById): Promise<ICategoryById | null> => {
  try {
    // Known category slugs are resolved by a direct endpoint; other ids still use `/categories/:id`.
    const categoryPath = CATEGORY_SLUG_ENDPOINTS.has(id)
      ? `/${encodeURIComponent(id)}`
      : `/categories/${encodeURIComponent(id)}`;

    const { data } = await API<IAPIGetCategoryById>({
      url: getApiUrl(categoryPath),
      method: 'GET',
      next: { revalidate: 60 },
    });
    const isValid = ValidationSchema.isValidSync(data);

    if (!isValid) {
      throw new Error('Failed to validate category response');
    }

    return convertCategory(data);
  } catch {
    return null;
  }
};

export * from './getCategoryById.types';
