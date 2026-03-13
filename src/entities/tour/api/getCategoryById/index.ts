import { API } from '@/shared/api';
import { getApiUrl } from '@/shared/config';

import { convertCategory } from './getCategoryById.convertation';
import { IAPIGetCategoryById, ICategoryById, IGetCategoryById } from './getCategoryById.types';
import { ValidationSchema } from './getCategoryById.validation';

export const getCategoryById = async ({ id }: IGetCategoryById): Promise<ICategoryById | null> => {
  try {
    const categoryPath = `/categories/${encodeURIComponent(id)}`;

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
