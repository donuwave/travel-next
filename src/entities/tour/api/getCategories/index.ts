import { API } from '@/shared/api';
import { getApiUrl } from '@/shared/config';

import { convertationCategoriesList } from './getCategories.convertation';
import { IAPIGetCategoriesList, ICategoryCard } from './getCategories.types';
import { ValidationSchema } from './getCategories.validation';

export const getCategoriesListKey = 'getCategoriesList';

export const getCategoriesList = async (): Promise<ICategoryCard[]> => {
  try {
    const { data } = await API<IAPIGetCategoriesList>({
      url: getApiUrl('/categories'),
      method: 'GET',
      next: { revalidate: 60 },
    });
    const isValid = ValidationSchema.isValidSync(data);

    if (!isValid) {
      throw new Error('Failed to validate categories response');
    }

    return convertationCategoriesList(data);
  } catch {
    return [];
  }
};

export * from './getCategories.types';
